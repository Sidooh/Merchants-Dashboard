import { useGetTransactionsQuery } from '@/services/transactionsApi';
import { Skeleton } from '@/components/ui/skeleton';
import TransactionsTable from '@/components/tables/transactions-table/TransactionsTable.tsx';
import { Transaction } from '@/lib/types.ts';
import CountUp from 'react-countup';
import { Card, CardContent, CardHeader } from '@/components/ui/card.tsx';
import CardBgCorner from '@/components/CardBgCorner.tsx';
import { Status } from '@/lib/enums.ts';

type PartialProps = { data?: Transaction[] };

const Stats = ({ data }: PartialProps) => {
    if (!data) return <Skeleton className={'h-[120px]'} />;

    const totalRevenue = data.reduce((acc, tx) => (tx.status === Status.COMPLETED ? acc + tx.amount : acc), 0);

    return (
        <Card className={'relative'}>
            <CardBgCorner />
            <CardHeader className={'pb-0'}>
                <span className={'text-sm text-muted-foreground'}>Revenue, Last 24hrs</span>
            </CardHeader>
            <CardContent className={'relative flex flex-col justify-content-center'}>
                <h5 className="text-xl font-semibold">
                    <CountUp end={totalRevenue} prefix={'KES '} separator="," />
                </h5>
            </CardContent>
        </Card>
    );
};

const Table = ({ data }: PartialProps) => {
    if (!data) return <Skeleton className={'h-[600px]'} />;

    return <TransactionsTable title={'Transactions, last 24hrs'} transactions={data} />;
};

const TransactionsToday = () => {
    const { data } = useGetTransactionsQuery({ days: 1 });

    return (
        <div className={'space-y-3'}>
            <Stats data={data} />
            <Table data={data} />
        </div>
    );
};

export default TransactionsToday;
