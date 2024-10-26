import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Root = lazy(() => import('app/layout/root'));
const QuotePage = lazy(() => import('pages/quote'));

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        path: '/quote',
        element: <QuotePage />
      }
    ]
  }
];
