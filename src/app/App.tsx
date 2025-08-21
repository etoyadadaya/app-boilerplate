import { Suspense } from 'react';

import { AppRouter } from '@/app/router';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { GlobalStyle } from '@/shared/styles/global';

import '@/shared/config/i18n/i18n';

export const App = () => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <GlobalStyle />
        <Suspense fallback="">
          <AppRouter />
        </Suspense>
      </QueryProvider>
    </ThemeProvider>
  );
};
