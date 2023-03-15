import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainEntryPage from './pages/main-entry/main-entry-page';
import SignInPage from './pages/sign-in/sign-in-page';
import SignUpPage from './pages/sign-up/sign-up-page';
import ErrorPage from './components/error-page';
import SalesPage from './pages/sales/sales-page';
import DashBoardPage from './pages/dashboard/dashboard-page';
import ProductsPage from './pages/products/products-page';
import CustomersPage from './pages/customers/customers-page';
import ReportsPage from './pages/repor/reports-page';
import StaffsPage from './pages/staffs/staffs';
import NotificationsPage from './pages/notifications/notifications-page';
import SettingsPage from './pages/settin/settings-page';
import CurrentUserProfilePage from './pages/curr-user-profile/current-user-profile-page';

const routes = [
  {
    path: '/',
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <DashBoardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sales',
    element: <SalesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/customers',
    element: <CustomersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/reports',
    element: <ReportsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/staffs',
    element: <StaffsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/notifications',
    element: <NotificationsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:input',
    element: <CurrentUserProfilePage />,
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
