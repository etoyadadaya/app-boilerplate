import { type ReactNode, useMemo, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';
import { lightTheme, darkTheme } from '@/shared/lib/theme/theme';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  const scTheme = theme === Theme.DARK ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={contextValue}>
      <SCThemeProvider theme={scTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
