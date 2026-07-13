import { cities } from '../data/locations/cities';
import { getPublicCityProjection } from '../data/locations/locationHelpers';

export async function GET() {
  const projectedCities = cities.map(getPublicCityProjection);

  return new Response(JSON.stringify(projectedCities), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
