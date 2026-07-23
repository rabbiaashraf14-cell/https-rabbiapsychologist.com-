export interface SoftLaunchCity {
  cityId: string;
  citySlug: string;
  contentVersion: string;
  routeEnabled: boolean;
  approvalStatus: 'approved-for-noindex-soft-launch' | 'pending' | 'rejected' | 'not-requested' | 'awaiting-human-approval';
  approvedBy?: string;
  reviewerRole?: string;
  approvalDate?: string;
  reviewExpiryDate?: string;
  robotsDirective: string;
  sitemapEligible: boolean;
  hreflangEligible: boolean;
  footerEligible: boolean;
  directoryLinkEligible: boolean;
  indexNowEligible: boolean;
  llmsEligible: boolean;
  analyticsEnabled: boolean;
  qaStatus: 'pending' | 'passed' | 'failed';
  notes?: string;
}

export const citySoftLaunchManifest: SoftLaunchCity[] = [
  {
    cityId: 'c-1',
    citySlug: 'lahore',
    contentVersion: '1.0',
    routeEnabled: false,
    approvalStatus: 'awaiting-human-approval',
    robotsDirective: 'noindex, follow',
    sitemapEligible: false,
    hreflangEligible: false,
    footerEligible: false,
    directoryLinkEligible: false,
    indexNowEligible: false,
    llmsEligible: false,
    analyticsEnabled: false,
    qaStatus: 'pending',
    notes: 'Awaiting explicit human approval.'
  },
  {
    cityId: 'c-10',
    citySlug: 'dubai',
    contentVersion: '1.0',
    routeEnabled: false,
    approvalStatus: 'awaiting-human-approval',
    robotsDirective: 'noindex, follow',
    sitemapEligible: false,
    hreflangEligible: false,
    footerEligible: false,
    directoryLinkEligible: false,
    indexNowEligible: false,
    llmsEligible: false,
    analyticsEnabled: false,
    qaStatus: 'pending',
    notes: 'Awaiting explicit human approval.'
  },
  {
    cityId: 'c-20',
    citySlug: 'london',
    contentVersion: '1.0',
    routeEnabled: false,
    approvalStatus: 'awaiting-human-approval',
    robotsDirective: 'noindex, follow',
    sitemapEligible: false,
    hreflangEligible: false,
    footerEligible: false,
    directoryLinkEligible: false,
    indexNowEligible: false,
    llmsEligible: false,
    analyticsEnabled: false,
    qaStatus: 'pending',
    notes: 'Awaiting explicit human approval.'
  },
  {
    cityId: 'c-30',
    citySlug: 'toronto',
    contentVersion: '1.0',
    routeEnabled: false,
    approvalStatus: 'awaiting-human-approval',
    robotsDirective: 'noindex, follow',
    sitemapEligible: false,
    hreflangEligible: false,
    footerEligible: false,
    directoryLinkEligible: false,
    indexNowEligible: false,
    llmsEligible: false,
    analyticsEnabled: false,
    qaStatus: 'pending',
    notes: 'Awaiting explicit human approval.'
  }
];

export function getSoftLaunchCity(citySlug: string): SoftLaunchCity | undefined {
  return citySoftLaunchManifest.find(c => c.citySlug === citySlug);
}
