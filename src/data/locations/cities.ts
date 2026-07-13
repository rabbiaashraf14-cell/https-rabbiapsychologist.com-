
import { tier1Cities } from './cities/cities-tier-1';
import { tier2Cities } from './cities/cities-tier-2';
import { tier3Cities } from './cities/cities-tier-3';

export const cities = [...tier1Cities, ...tier2Cities, ...tier3Cities];
