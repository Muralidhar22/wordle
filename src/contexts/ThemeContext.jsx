import { useContext, useEffect, createContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  const handleChange = (event) => {
    if (event.matches) {
      setTheme('dark');
      document.querySelector(':root').setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.querySelector(':root').setAttribute('data-theme', 'light');
    }
  };

  const switchTheme = (mode) => {
    setTheme(mode);
    document.querySelector(':root').setAttribute('data-theme', mode);
  };

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (match) {
      setTheme('dark');
      document.querySelector(':root').setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.querySelector(':root').setAttribute('data-theme', 'light');
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleChange);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleChange);
    };
  }, []);

  const value = { theme, switchTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
