import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { useParams } from 'react-router-dom';
import { useGetTransactionQuery } from '@/services/transactionsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import AlertError from '@/components/errors/AlertError.tsx';
import moment from 'moment';
import StatusBadge from '@/components/common/StatusBadge.tsx';
import { Status } from '@/lib/enums.ts';

const TransactionDetails = () => {
    const { id } = useParams();
    const { data: transaction, isLoading, isError, error } = useGetTransactionQuery(Number(id));

    if (isLoading) return <Skeleton className={'h-[700px]'} />;
    if (isError) return <AlertError error={error} />;
    if (!transaction) return <AlertError error={'Unable to fetch transaction.'} />;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Transaction: #{transaction.id}</CardTitle>
                <CardDescription>{moment(transaction.created_at).format('MMM Do, Y, HH:mm A')}</CardDescription>
            </CardHeader>
            <CardContent>
                <StatusBadge
                    status={transaction.status}
                    statuses={[Status.COMPLETED, Status.FAILED, Status.PENDING, Status.REFUNDED]}
                    onStatusChange={(s) => console.log(s)}
                />
            </CardContent>
        </Card>
    );
};

export default TransactionDetails;
