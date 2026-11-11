import fs from 'fs';
import path from 'path';

async function pingSearchEngines() {
  console.log('====================================================');
  console.log('🚀 SEARCH ENGINE INDEXING & CRAWL ACCELERATION');
  console.log('====================================================');

  const sitemapPath = path.resolve(process.cwd(), 'dist', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ dist/sitemap.xml not found. Please run "npm run build" first.');
    process.exit(1);
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urlMatches = sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g);
  const urlList: string[] = [];
  for (const m of urlMatches) {
    urlList.push(m[1]);
  }

  console.log(`📄 Discovered ${urlList.length} canonical URLs in sitemap.xml to submit.\n`);

  const indexNowKey = 'c4a6b281f9e248b991b1a772cbbdf990';
  const host = 'www.rabbiapsychologist.com';
  const keyLocation = `https://${host}/${indexNowKey}.txt`;

  // 1. Submit to IndexNow API (Bing, Yandex, Seznam, Naver)
  try {
    console.log('📡 Submitting URLs to IndexNow protocol (Bing, Copilot, Yandex)...');
    const payload = {
      host,
      key: indexNowKey,
      keyLocation,
      urlList: urlList.slice(0, 1000)
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow accepted ${payload.urlList.length} URLs (Status: ${response.status})`);
    } else {
      console.log(`⚠️ IndexNow response: Status ${response.status} (${response.statusText})`);
    }
  } catch (err: any) {
    console.log('ℹ️ IndexNow ping network note:', err.message);
  }

  // 2. Ping Google sitemap
  try {
    console.log('\n📡 Pinging Google Sitemap crawler...');
    const googlePingUrl = `https://www.google.com/ping?sitemap=https://${host}/sitemap.xml`;
    const gResponse = await fetch(googlePingUrl);
    console.log(`✅ Google sitemap ping response status: ${gResponse.status}`);
  } catch (err: any) {
    console.log('ℹ️ Google ping status note:', err.message);
  }

  console.log('\n====================================================');
  console.log('🎯 NEXT STEPS IN GOOGLE SEARCH CONSOLE:');
  console.log('1. Go to: Page indexing -> "Discovered - currently not indexed"');
  console.log('2. Click the button: "VALIDATE FIX"');
  console.log('3. In the URL Inspection bar at top, paste your key updated URLs:');
  console.log('   - https://www.rabbiapsychologist.com/locations/');
  console.log('   - https://www.rabbiapsychologist.com/sitemap/');
  console.log('   - https://www.rabbiapsychologist.com/services/behaviour-planning/');
  console.log('   - https://www.rabbiapsychologist.com/blog/autism-early-signs/');
  console.log('4. Click "Request Indexing" on each to trigger immediate crawler dispatch.');
  console.log('====================================================\n');
}

pingSearchEngines();
