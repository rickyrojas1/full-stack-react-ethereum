import { useMemo, useState } from 'react';
import { darkTheme, lightTheme } from '../styles/theme.styles';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>();
  const currentTheme = theme === 'light' || !theme ? lightTheme : darkTheme;

  const toggleTheme = () => {
    // if (!theme) setTheme('dark');
    setTheme(theme === 'light' || !theme ? 'dark' : 'light');
  };

  const themeObj = useMemo(() => {
    return { currentTheme, toggleTheme };
  }, [currentTheme]);

  return themeObj;
};
