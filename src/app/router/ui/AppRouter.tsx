import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';
import { routes } from '@/shared/config/routes/routes';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {Object.values(routes).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={<PageLoader />}>{element}</Suspense>}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
