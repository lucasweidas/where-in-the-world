import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);
const LOCAL_STORAGE_KEY = 'where-in-the-world';
const initialTheme = getLocalStorage().theme;

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(initialTheme === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateLocalStorage('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        theme: isDark ? 'dark' : 'light',
        onChange(checked) {
          setIsDark(checked);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

function updateLocalStorage(key, value) {
  const data = getLocalStorage();
  data[key] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (data) {
    return data;
  }
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return { theme: isDark ? 'dark' : 'light' };
}
