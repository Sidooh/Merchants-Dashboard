import { Route, Routes } from 'react-router-dom';
import GuestLayout from '@/layouts/GuestLayout';
import { Middleware } from '@/middleware';
import DefaultDashboard from '@/pages/dashboards/default/DefaultDashboard';
import Login from '@/pages/auth/Login';
import NotFound from '@/pages/errors/NotFound';
import MainLayout from '@/layouts/MainLayout';
import Transactions from '@/pages/transactions/Transactions.tsx';

function App() {
    return (
        <Routes>
            <Route element={<GuestLayout />}>
                <Route path={'/login'} element={<Middleware.Guest component={<Login />} />} />
            </Route>

            <Route element={<Middleware.Auth component={<MainLayout />} />}>
                <Route index element={<DefaultDashboard />} />

                <Route path={'/transactions'} element={<Transactions />} />
            </Route>

            <Route path={'*'} element={<NotFound />} />
        </Routes>
    );
}

export default App;
