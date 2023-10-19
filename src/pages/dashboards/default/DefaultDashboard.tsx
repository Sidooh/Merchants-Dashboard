import { columns } from '@/pages/transactions/datatable/Columns.tsx';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { PiLifebuoyDuotone } from 'react-icons/pi';
import { DataTable } from '@/components/datatable/DataTable.tsx';
import { useGetTransactionsQuery } from '@/services/transactionsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';

const DefaultDashboard = () => {
    const { data } = useGetTransactionsQuery({ days: 1 });

    if (!data) return <Skeleton className={'h-[700px]'} />;

    return (
        <DataTable
            title={"Today's Merchants"}
            columns={columns}
            data={data}
            facetedFilters={[
                {
                    column_id: 'product',
                    title: 'Product',
                    options: [
                        { label: 'Withdraw', value: 'WITHDRAWAL', icon: BiMoneyWithdraw },
                        { label: 'Float', value: 'FLOAT', icon: PiLifebuoyDuotone },
                    ],
                },
            ]}
        />
    );
};

export default DefaultDashboard;
