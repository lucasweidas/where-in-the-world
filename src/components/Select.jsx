import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const options = [
  { id: 0, value: 'africa' },
  { id: 1, value: 'america' },
  { id: 2, value: 'asia' },
  { id: 3, value: 'europe' },
  { id: 4, value: 'oceania' },
];
const dropdownAnimation = {
  hidden: { y: '-5%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
  exit: {
    y: '-5%',
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  },
};

export default function Select() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const value = searchParams.get('region');

  function handleSelectToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative max-w-[250px] md:max-w-[300px] lg:w-[220px]">
      <button
        className="group flex w-full cursor-pointer items-center justify-between rounded-lg bg-white px-5 py-4 font-semibold text-blue-1050 shadow-2md dark:bg-blue-950 dark:text-inherit md:px-8 md:max-lg:py-5 lg:px-6"
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-pressed={isOpen}
        onClick={handleSelectToggle}
      >
        {value ? <span className="capitalize">{value}</span> : <span>Filter by Region</span>}
        <span className="transition-transform duration-150 ease-linear group-aria-expanded:rotate-180">
          <i className="fa-solid fa-angle-up"></i>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="absolute top-16 z-10 flex w-full flex-col rounded-lg bg-white font-semibold text-blue-1050 shadow-2md dark:bg-blue-950 dark:text-inherit md:max-lg:top-[72px]"
            variants={dropdownAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="py-2.5 md:max-lg:py-3">
              {options.map(option => (
                <li key={option.id}>
                  <input
                    className="relative flex w-full cursor-pointer px-5 py-1 text-start capitalize hover:bg-neutral-100 focus-visible:bg-neutral-100 dark:hover:bg-blue-1000 dark:focus-visible:bg-blue-1000 md:px-8 md:py-1.5 lg:px-6"
                    type="submit"
                    name="region"
                    value={option.value}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
