import { GlobalStyle } from '@/shared/styles/global';
import { Suspense } from 'react';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { AppRouter } from '@/app/router';

export const App = () => {
  return (
    <QueryProvider>
      <GlobalStyle />
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </QueryProvider>
  );
};
