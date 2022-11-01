import { lazy } from 'react';
export const Dashboard = lazy(() => import('./Dashboard'));
export const LoadTracker = lazy(() => import('./components/loadTracker'));
export const Shipper = lazy(() => import('./components/shipper'));
export const UserRequest = lazy(() => import('./components/userRequest'));
export const Carrier = lazy(() => import('./components/carrier'));
export const Vehicle = lazy(() => import('./components/vehicle'));
export const Driver = lazy(() => import('./components/driver'));
export const Complain = lazy(() => import('./components/complain'));
