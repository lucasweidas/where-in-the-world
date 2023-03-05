export function formatPopulation(country) {
  const formatted = country.population.toLocaleString('en-US');
  return formatted;
}

export function getLocalName(country) {
  const names = Object.values(country.name.nativeName);
  return names[0].common;
}

export function getCurrencies(country) {
  const currencies = Object.values(country.currencies);
  return currencies.map(curr => curr.name).join(', ');
}

export function getLanguages(country) {
  const languages = Object.values(country.languages);
  return languages.join(', ');
}
