import { useSearchParams } from 'react-router-dom';
import Index from './Index';

function useEndpoint() {
  const [searchParams] = useSearchParams();

  if (searchParams.has('query')) {
    return `name/${searchParams.get('query')}`;
  }
  if (searchParams.has('region')) {
    return `region/${searchParams.get('region')}`;
  }
}

export default function CountriesPage() {
  const query = useEndpoint();

  return <Index key={query} query={query} />;
}
