import { Form, useSearchParams } from 'react-router-dom';

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  return (
    <Form action="/countries" role="search">
      <div className="relative flex items-center gap-4 rounded-lg bg-white p-4  ring-current drop-shadow-2md focus-within:ring-2 dark:bg-blue-950 md:gap-6 md:px-10 md:max-lg:py-5 lg:w-[480px]">
        <span className="text-gray-950 dark:text-inherit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          className="w-full border-none bg-transparent placeholder:text-current placeholder:text-gray-950 focus-visible:outline-none dark:placeholder:text-inherit"
          type="search"
          name="query"
          placeholder="Search for a country..."
          aria-label="Search for a country"
          defaultValue={query}
        />
      </div>
    </Form>
  );
}
