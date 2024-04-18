import { useGetTransactionsQuery } from '@/services/transactionsApi';
import { Skeleton } from '@/components/ui/skeleton';
import TransactionsTable from '@/components/tables/transactions-table/TransactionsTable.tsx';

const Transactions = () => {
    const { data } = useGetTransactionsQuery({});

    if (!data) return <Skeleton className={'h-[700px]'} />;

    return <TransactionsTable transactions={data} />;
};

export default Transactions;
