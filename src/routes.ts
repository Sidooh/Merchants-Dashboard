import { FaChartPie } from 'react-icons/fa6';
import { GrTransaction } from 'react-icons/gr';
import { RouteType } from '@/lib/types';

const routes: RouteType[] = [
    {
        label: 'Dashboard',
        children: [
            {
                name: 'Home',
                to: '/',
                icon: FaChartPie,
            },
        ],
    },
    {
        label: 'Transactions',
        children: [
            {
                name: 'All',
                to: '/transactions',
                icon: GrTransaction,
            },
        ],
    },
];

export default routes;
