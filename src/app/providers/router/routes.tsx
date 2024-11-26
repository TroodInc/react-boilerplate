import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Root = lazy(() => import('app/layout/root'));

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Root />
  }
];
