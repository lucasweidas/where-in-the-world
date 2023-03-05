import { Link, useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../util/fetcher';
import { formatPopulation, getCurrencies, getLanguages, getLocalName } from '../util/countryUtil';
import InfoWrapper from './InfoWrapper';
import Error from './Error';
import CountryPageSkeleton from './CountryPageSkeleton';

export default function CountryPage() {
  const { country, isCoutryError, isCountryLoading } = useCountry();
  const { borderCountries, isBordersError, isBordersLoading } = useBorderCountries(country);
  const navigate = useNavigate();

  function handleBackClick() {
    const { state } = history;
    navigate(state.idx === 0 ? '/' : -1);
  }

  return (
    <div className="px-7 py-10 md:p-12 lg:mx-auto lg:max-w-[1440px] lg:py-20 lg:px-8 xl:px-20">
      <button
        className="flex items-center gap-2 rounded-md bg-white px-6 py-2 font-semibold shadow-3xl dark:bg-blue-950 md:gap-3 md:px-7 md:py-3 lg:px-8 lg:py-2"
        onClick={handleBackClick}
      >
        <i className="fa-solid fa-arrow-left-long"></i>
        Back
      </button>
      {isCoutryError ? (
        <Error error={isCoutryError} />
      ) : isBordersError ? (
        <Error error={isBordersError} />
      ) : isCountryLoading || isBordersLoading ? (
        <CountryPageSkeleton />
      ) : country ? (
        <CountryContent country={country} borders={borderCountries} />
      ) : null}
    </div>
  );
}

function CountryContent({ country, borders }) {
  return (
    <section className="mx-auto mt-16 max-xl:max-w-2xl md:mt-20 xl:grid xl:grid-cols-[repeat(2,minmax(auto,560px))] xl:items-center xl:justify-between xl:gap-10">
      <img src={country.flags.svg} alt={country.flags.png} />
      <div className="mt-10 md:mt-12 xl:mt-0">
        <h2 className="text-2xl font-extrabold md:text-3xl">{country.name.common}</h2>
        <div className="mt-6 flex flex-col gap-10 md:mt-8 md:gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-2 md:gap-3">
            <InfoWrapper label="Native Name" data={getLocalName(country)} />
            <InfoWrapper label="Population" data={formatPopulation(country)} />
            <InfoWrapper label="Region" data={country.region} />
            <InfoWrapper label="Sub Region" data={country.subregion} />
            <InfoWrapper label="Capital" data={country.capital} />
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <InfoWrapper label="Top Level Domain" data={country.tld} />
            <InfoWrapper label="Currencies" data={getCurrencies(country)} />
            <InfoWrapper label="Languages" data={getLanguages(country)} />
          </div>
        </div>
        {borders && (
          <div className="mt-10 flex flex-col flex-wrap gap-4 md:mt-12 md:max-lg:gap-6 lg:flex-row lg:items-center">
            <h3 className="flex-shrink-0 text-[18px] font-semibold lg:text-base">Border Countries:</h3>
            <div className="flex flex-wrap gap-3 md:max-lg:gap-4">
              {borders.map(({ name, cca2 }) => (
                <Link className="rounded-md bg-white px-6 py-2 shadow-3xl dark:bg-blue-950 md:px-8" key={name.common} to={`/countries/${cca2.toLowerCase()}`}>
                  {name.common}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function useCountry() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(`alpha/${params.country}`, fetcher);
  return {
    country: data?.[0],
    isCoutryError: error,
    isCountryLoading: isLoading,
  };
}

function getBordersEndpoint(borders) {
  return borders ? `alpha?codes=${borders.join(',')}` : null;
}

function useBorderCountries(country) {
  const { data, error, isLoading } = useSWR(getBordersEndpoint(country?.borders), fetcher);
  return {
    borderCountries: data,
    isBordersError: error,
    isBordersLoading: isLoading,
  };
}
