import { Link } from 'react-router-dom';
import { useTheme } from './providers/Theme';

export default function Navbar() {
  const { theme, onChange } = useTheme();
  const isDark = theme === 'dark';

  const handleThemeChange = e => onChange(e.target.checked);

  return (
    <nav className="bg-white px-4 py-7 shadow-2md dark:bg-blue-950 md:p-8 xl:px-20">
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-between gap-4">
        <h1 className="text-base font-extrabold md:text-xl">
          <Link to="/">Where in the world?</Link>
        </h1>
        <div className="relative">
          <input className="peer/toggle absolute w-0 opacity-0" type="checkbox" id="theme-toggle" checked={isDark} onChange={handleThemeChange} />
          <label
            className="flex cursor-pointer items-center gap-3 rounded-sm ring-current peer-focus-visible/toggle:ring-2 md:max-lg:text-[1.125rem]"
            htmlFor="theme-toggle"
          >
            <span>
              <i className={`${isDark ? 'fa-solid' : 'fa-regular'} fa-moon`}></i>
            </span>
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
