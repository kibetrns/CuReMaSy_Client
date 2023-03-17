import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/staffs" element={<StaffsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/:input" element={<CurrentUserProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
