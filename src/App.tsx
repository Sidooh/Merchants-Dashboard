import { Route, Routes } from 'react-router-dom';
import GuestLayout from '@/layouts/GuestLayout';
import { Middleware } from '@/middleware';
import DefaultDashboard from '@/pages/dashboards/default/DefaultDashboard';
import Login from '@/pages/auth/Login';
import NotFound from '@/pages/errors/NotFound';
import MainLayout from '@/layouts/MainLayout';
import Transactions from '@/pages/transactions/Transactions.tsx';
import Merchants from '@/pages/merchants/Merchants.tsx';
import ShowMerchant from '@/pages/merchants/show/ShowMerchant.tsx';
import TransactionDetails from '@/pages/transactions/show/TransactionDetails.tsx';

function App() {
    return (
        <Routes>
            <Route element={<GuestLayout />}>
                <Route path={'/login'} element={<Middleware.Guest component={<Login />} />} />
            </Route>

            <Route element={<Middleware.Auth component={<MainLayout />} />}>
                <Route index element={<DefaultDashboard />} />

                <Route path={'/transactions'} element={<Transactions />} />
                <Route path={'/transactions/:id'} element={<TransactionDetails />} />

                <Route path={'/merchants'} element={<Merchants />} />
                <Route path={'/merchants/:id'} element={<ShowMerchant />} />
            </Route>

            <Route path={'*'} element={<NotFound />} />
        </Routes>
    );
}

export default App;
