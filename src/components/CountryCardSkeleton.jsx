export default function CountryCardSkeleton({ cards }) {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((item, i) => (
          <div role="status" className="w-full max-w-[400px] animate-pulse overflow-hidden rounded-lg bg-white shadow-2md dark:bg-blue-950" key={i}>
            <div className="flex aspect-video w-full items-center justify-center bg-gray-300 dark:bg-gray-700">
              <svg className="h-10 w-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
            <div className="w-full px-6 pt-6 pb-10">
              <div className="mb-4 h-5 max-w-[192px] rounded-full bg-gray-200 dark:bg-gray-700 md:max-lg:h-6"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 max-w-[220px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ))}
    </>
  );
}
