export async function fetcher<T>(url: string): Promise<T> {
  const BASE_URL = process.env.COINGECKO_BASE_URL;
  const API_KEY = process.env.COINGECKO_API_KEY;

  if (!BASE_URL) {
    throw new Error('COINGECKO_BASE_URL is missing');
  }

  const res = await fetch(`${BASE_URL}${url}`, {
    headers: API_KEY
      ? {
          'x-cg-pro-api-key': API_KEY,
        }
      : undefined,
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`CoinGecko error: ${res.status}`);
  }

  return res.json();
}
