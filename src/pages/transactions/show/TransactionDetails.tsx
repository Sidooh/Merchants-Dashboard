import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { useParams } from 'react-router-dom';
import { useGetTransactionQuery } from '@/services/transactionsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import AlertError from '@/components/errors/AlertError.tsx';
import moment from 'moment';
import StatusBadge from '@/components/common/StatusBadge.tsx';
import { Status } from '@/lib/enums.ts';
import Latency from '@/components/Latency.tsx';
import { currencyFormat } from '@/lib/utils.ts';
import { Separator } from '@/components/ui/separator.tsx';

const TransactionDetails = () => {
    const { id } = useParams();
    const { data: transaction, isLoading, isError, error } = useGetTransactionQuery(Number(id));

    if (isLoading) return <Skeleton className={'h-[700px]'} />;
    if (isError) return <AlertError error={error} />;
    if (!transaction) return <AlertError error={'Unable to fetch transaction.'} />;

    return (
        <section className={'space-y-3'}>
            <Card>
                <CardHeader>
                    <CardTitle>Transaction: #{transaction.id}</CardTitle>
                    <CardDescription>{moment(transaction.created_at).format('MMM Do, Y, HH:mm A')}</CardDescription>
                    <span className={'absolute top-0 end-0 pe-3'}>
                        <Latency from={transaction.created_at} to={transaction.updated_at} />
                    </span>
                    <hr />
                </CardHeader>
                <CardContent>
                    <StatusBadge
                        status={transaction.status}
                        statuses={[Status.COMPLETED, Status.FAILED, Status.PENDING, Status.REFUNDED]}
                        onStatusChange={(s) => console.log(s)}
                    />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex h-10 items-center justify-between space-x-4 text-sm">
                        <div>
                            <small className={'text-muted-foreground'}>Description</small>
                            <h3>{transaction.description}</h3>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <small className={'text-muted-foreground'}>Amount</small>
                            <h3>{currencyFormat(transaction.amount)}</h3>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <small className={'text-muted-foreground'}>Destination</small>
                            <h3>{transaction.destination}</h3>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <small className={'text-muted-foreground'}>Product</small>
                            <h3>{transaction.product}</h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};

export default TransactionDetails;
