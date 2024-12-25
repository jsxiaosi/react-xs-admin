import { lazy } from 'react';

export const Home = lazy(() => import('@/views/Home'));
export const Menu1_1 = lazy(() => import('@/views/Nested/Menu1/Menu1-1'));
export const Menu1_2 = lazy(() => import('@/views/Nested/Menu1/Menu1-2'));
export const Permissions = lazy(() => import('@/views/Power/Permissions'));
export const TestPermissionsA = lazy(() => import('@/views/Power/test-permissions-a'));
export const TestPermissionsB = lazy(() => import('@/views/Power/test-permissions-b'));
export const DetailsPage = lazy(() => import('@/views/DetailsPage'));
export const DetailsInfo = lazy(() => import('@/views/DetailsPage/DetailsInfo'));
export const DetailsParams = lazy(() => import('@/views/DetailsPage/DetailsParams'));
