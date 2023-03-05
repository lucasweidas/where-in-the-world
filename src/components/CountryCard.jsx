import { Link } from 'react-router-dom';
import { formatPopulation } from '../util/countryUtil';
import InfoWrapper from './InfoWrapper';

export default function CountryCard({ country }) {
  const { flags, region, capital, name, cca2 } = country;

  return (
    <section className="max-w-[400px] overflow-hidden rounded-lg bg-white shadow-2md dark:bg-blue-950">
      <img className="w-full" src={flags.svg} alt={flags.alt ?? name.common} />
      <div className="px-6 pt-6 pb-10">
        <h2 className="mb-4 text-xl font-extrabold md:max-lg:text-2xl">
          <Link to={`/countries/${cca2.toLowerCase()}`}>{name.common}</Link>
        </h2>
        <div className="flex flex-col gap-2">
          <InfoWrapper label="Population" data={formatPopulation(country)} />
          <InfoWrapper label="Region" data={region} />
          <InfoWrapper label="Capital" data={capital} />
        </div>
      </div>
    </section>
  );
}
