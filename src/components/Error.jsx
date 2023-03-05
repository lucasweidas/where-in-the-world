import { useRouteError } from 'react-router-dom';

export default function Error({ error }) {
  const routerError = useRouteError();

  return (
    <div className="my-8 grid place-content-center text-center">
      <span className="mb-4 text-5xl">
        <i className="fa-solid fa-globe"></i>
      </span>
      <h2 className="font-semibold">Something went wrong!</h2>
      <p>
        <em>{routerError?.statusText ?? error}</em>
      </p>
    </div>
  );
}
