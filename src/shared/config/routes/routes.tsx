import { type RouteProps } from 'react-router-dom';

import { TestPage } from '@/pages/TestPage';

export enum AppRoutes {
  TEST = 'test',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.TEST]: '/',
};

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <TestPage />,
  },
};
