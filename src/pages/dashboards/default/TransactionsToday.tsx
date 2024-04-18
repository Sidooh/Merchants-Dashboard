import { useGetTransactionsQuery } from '@/services/transactionsApi';
import { Skeleton } from '@/components/ui/skeleton';
import TransactionsTable from '@/components/tables/transactions-table/TransactionsTable.tsx';

const TransactionsToday = () => {
    const { data } = useGetTransactionsQuery({ days: 1 });

    if (!data) return <Skeleton className={'h-[700px]'} />;

    return <TransactionsTable title={'Transactions, last 24hrs'} transactions={data} />;
};

export default TransactionsToday;
