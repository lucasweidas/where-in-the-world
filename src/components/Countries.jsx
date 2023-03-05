import useSWR from 'swr';
import { fetcher } from '../util/fetcher';
import Error from './Error';
import { useEffect, useRef, useState } from 'react';
import CountryCard from './CountryCard';
import CountryCardSkeleton from './CountryCardSkeleton';

const ITEMS_INCREMENT = 12;

export default function Countries({ query }) {
  const { countries, isError, isLoading } = useCountries(query);
  const [maxItems, setMaxItems] = useState(ITEMS_INCREMENT);
  const blockEndRef = useRef(null);

  useEffect(() => {
    if (!countries) return;

    const blockEnd = blockEndRef.current;
    const observer = new IntersectionObserver(onIntersection);

    function onIntersection(entries) {
      const { isIntersecting } = entries[0];
      if (!isIntersecting) return;
      setMaxItems(mI => (mI === countries.length ? mI : mI + ITEMS_INCREMENT));
    }

    observer.observe(blockEnd);

    return () => blockEnd && observer.unobserve(blockEnd);
  }, [countries]);

  const countryCards = [];
  if (countries) {
    for (let i = 0; i < countries.length; i++) {
      if (i >= maxItems) break;
      const country = countries[i];
      countryCards.push(<CountryCard key={country.cca2} country={country} />);
    }
  }

  return (
    <div className="relative mx-auto mt-8 grid max-w-screen-xl grid-cols-1 justify-center justify-items-center gap-10 px-[5%] xsm:px-[8%] md:grid-cols-[repeat(auto-fit,minmax(264px,1fr))] md:px-10 lg:mt-12 lg:gap-[clamp(3rem,5vw,4.5rem)] lg:px-0">
      {isError ? (
        <Error error={isError} />
      ) : isLoading ? (
        <CountryCardSkeleton cards={8} />
      ) : countries ? (
        <>
          {countryCards}
          <div className="absolute bottom-0" id="countries-end" ref={blockEndRef}></div>
        </>
      ) : null}
    </div>
  );
}

function useCountries(query) {
  const { data, error, isLoading } = useSWR(query, fetcher);

  return {
    countries: data,
    isError: error,
    isLoading,
  };
}
