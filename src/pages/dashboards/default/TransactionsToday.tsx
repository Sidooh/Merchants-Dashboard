import { useGetTransactionsQuery } from '@/services/transactionsApi';
import { Skeleton } from '@/components/ui/skeleton';
import TransactionsTable from '@/components/tables/transactions-table/TransactionsTable.tsx';
import { useGetMerchantsQuery } from '@/services/merchantsApi.ts';

const TransactionsToday = () => {
    const { data } = useGetTransactionsQuery({ days: 1 });
    const { data: merchants } = useGetMerchantsQuery();

    if (!data) return <Skeleton className={'h-[700px]'} />;

    const transactions = data.map((t) => {
        const merchant = merchants?.find((m) => m.id === t.merchant);

        if (merchant) t = { ...t, merchant };

        return t;
    });

    return <TransactionsTable title={'Transactions, last 24hrs'} transactions={transactions} />;
};

export default TransactionsToday;
