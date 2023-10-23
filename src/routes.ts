import { FaChartPie } from 'react-icons/fa6';
import { GrTransaction } from 'react-icons/gr';
import { RouteType } from '@/lib/types';
import { MdSupportAgent } from 'react-icons/md';

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
        label: 'App',
        children: [
            {
                name: 'Merchants',
                to: '/merchants',
                icon: MdSupportAgent,
            },
            {
                name: 'Transactions',
                to: '/transactions',
                icon: GrTransaction,
            },
        ],
    },
];

export default routes;
