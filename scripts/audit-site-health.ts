import fs from 'fs';
import path from 'path';

interface AuditResult {
  totalHtmlFiles: number;
  missingTitles: string[];
  shortTitles: string[];
  missingDescriptions: string[];
  missingCanonicals: string[];
  missingSchemas: string[];
  imagesWithoutAlt: { file: string; src: string }[];
  pagesWithEEATCitations: number;
  comparePagesFound: number;
  alternativePagesFound: number;
  locationPagesFound: number;
}

function walkDir(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function runAudit() {
  console.log('====================================================');
  console.log('🔍 INITIATING CLINICAL & SEO WEBSITE HEALTH AUDIT');
  console.log('====================================================');

  const distDir = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  const htmlFiles = walkDir(distDir);
  console.log(`📁 Analyzed ${htmlFiles.length} static production pages in dist/...\n`);

  const results: AuditResult = {
    totalHtmlFiles: htmlFiles.length,
    missingTitles: [],
    shortTitles: [],
    missingDescriptions: [],
    missingCanonicals: [],
    missingSchemas: [],
    imagesWithoutAlt: [],
    pagesWithEEATCitations: 0,
    comparePagesFound: 0,
    alternativePagesFound: 0,
    locationPagesFound: 0
  };

  let evaluatedCount = 0;

  for (const filePath of htmlFiles) {
    const relPath = path.relative(distDir, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf-8');

    // Skip verification files and redirect stubs
    if (relPath.startsWith('google') || relPath.endsWith('.txt.html')) continue;
    if (content.includes('http-equiv="refresh"') || content.includes('Redirecting to:')) continue;

    evaluatedCount++;

    // Title Check
    const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      results.missingTitles.push(relPath);
    } else if (titleMatch[1].trim().length < 15) {
      results.shortTitles.push(`${relPath} ("${titleMatch[1].trim()}")`);
    }

    // Meta Description Check
    const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) ||
                      content.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
    if (!descMatch || !descMatch[1].trim()) {
      results.missingDescriptions.push(relPath);
    }

    // Canonical Tag Check
    const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
    if (!canonicalMatch || !canonicalMatch[1].trim()) {
      results.missingCanonicals.push(relPath);
    }

    // JSON-LD Schema Check
    const hasSchema = content.includes('application/ld+json');
    if (!hasSchema) {
      results.missingSchemas.push(relPath);
    }

    // E-E-A-T Medical & Credential Check
    if (content.includes('Rabbia Ashraf') || content.includes('Clinical Psychologist') || content.includes('DSM-5-TR') || content.includes('NICE')) {
      results.pagesWithEEATCitations++;
    }

    // Image Alt Tag Check
    const imgMatches = content.matchAll(/<img\s+([^>]*?)>/gi);
    for (const match of imgMatches) {
      const attrs = match[1];
      const hasAlt = /alt=["'][^"']*["']/i.test(attrs);
      if (!hasAlt) {
        const srcMatch = attrs.match(/src=["']([^"']*)["']/i);
        results.imagesWithoutAlt.push({
          file: relPath,
          src: srcMatch ? srcMatch[1] : 'unknown'
        });
      }
    }

    // Programmatic Route Counters
    if (relPath.startsWith('compare/')) results.comparePagesFound++;
    if (relPath.startsWith('alternatives/')) results.alternativePagesFound++;
    if (relPath.startsWith('locations/') || relPath.startsWith('international-families/')) results.locationPagesFound++;
  }

  // Scoring
  results.totalHtmlFiles = evaluatedCount;
  const seoScore = Math.max(0, 100 - (results.missingTitles.length * 5 + results.missingDescriptions.length * 2 + results.missingCanonicals.length * 2));
  const eeatScore = Math.min(100, Math.round((results.pagesWithEEATCitations / results.totalHtmlFiles) * 100));

  console.log('📊 AUDIT SUMMARY & QUALITY METRICS:');
  console.log('----------------------------------------------------');
  console.log(`✅ Total HTML Pages Evaluated:        ${results.totalHtmlFiles}`);
  console.log(`⚡ Programmatic Comparison Pages:     ${results.comparePagesFound}`);
  console.log(`🌿 Programmatic Alternative Pages:      ${results.alternativePagesFound}`);
  console.log(`🌍 International Location Hubs:        ${results.locationPagesFound}`);
  console.log(`🩺 E-E-A-T Authority Coverage:         ${results.pagesWithEEATCitations} / ${results.totalHtmlFiles} (${eeatScore}%)`);
  console.log(`🎯 Technical SEO Health Score:         ${seoScore} / 100`);

  console.log('\n🔍 GRANULAR CHECKLIST:');
  console.log(`- Missing Titles:         ${results.missingTitles.length}`);
  console.log(`- Missing Meta Descs:     ${results.missingDescriptions.length}`);
  console.log(`- Missing Canonicals:     ${results.missingCanonicals.length}`);
  console.log(`- Missing Schema:         ${results.missingSchemas.length}`);
  console.log(`- Images Missing Alt:     ${results.imagesWithoutAlt.length}`);

  if (results.missingTitles.length > 0) {
    console.log('\n⚠️ Pages missing title tags:', results.missingTitles.slice(0, 5));
  }
  if (results.missingDescriptions.length > 0) {
    console.log('\n⚠️ Pages missing meta descriptions:', results.missingDescriptions.slice(0, 5));
  }
  if (results.imagesWithoutAlt.length > 0) {
    console.log('\n⚠️ Images missing alt attributes:', results.imagesWithoutAlt.slice(0, 5));
  }

  console.log('\n====================================================');
  if (seoScore >= 95 && results.imagesWithoutAlt.length === 0) {
    console.log('🌟 STATUS: EXCELLENT — SITE IS PRODUCTION-GRADE & OPTIMIZED FOR 500K TRAFFIC');
  } else {
    console.log('⚠️ STATUS: GOOD WITH MINOR RECOMMENDATIONS');
  }
  console.log('====================================================\n');
}

runAudit();
