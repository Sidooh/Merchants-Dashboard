import { useGetTransactionsQuery } from '@/services/transactionsApi';
import { columns } from '@/pages/transactions/datatable/Columns';
import { DataTable } from '@/components/datatable/DataTable';
import { Skeleton } from '@/components/ui/skeleton';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { PiLifebuoyDuotone } from 'react-icons/pi';

const TransactionsToday = () => {
    const { data } = useGetTransactionsQuery({ days: 1 });

    if (!data) return <Skeleton className={'h-[700px]'} />;

    return (
        <DataTable
            title={"Today's Transactions"}
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

export default TransactionsToday;
