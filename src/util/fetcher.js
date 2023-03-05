export async function fetcher(endpoint) {
  const response = await fetch(`https://restcountries.com/v3.1/${endpoint}`);
  if (!response.ok) {
    const reason = await response.json();
    throw `${reason.message}`;
  }
  const result = await response.json();
  return result;
}
