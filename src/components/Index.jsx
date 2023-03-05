import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import Countries from './Countries';

export default function Index({ query = 'all' }) {
  return (
    <div className="py-6 px-4 md:py-10 md:px-8 lg:py-12 xl:px-20">
      <div className="mx-auto max-w-screen-xl lg:flex lg:items-center lg:justify-between">
        <SearchForm />
        <FilterForm />
      </div>
      <Countries query={query} />
    </div>
  );
}
