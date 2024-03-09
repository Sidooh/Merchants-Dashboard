import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { useParams } from 'react-router-dom';
import { useGetTransactionQuery } from '@/services/transactionsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import AlertError from '@/components/errors/AlertError.tsx';
import moment from 'moment';
import StatusBadge from '@/components/common/StatusBadge.tsx';
import { Status } from '@/lib/enums.ts';
import Latency from '@/components/Latency.tsx';
import { currencyFormat, Str } from '@/lib/utils.ts';
import { Separator } from '@/components/ui/separator.tsx';
import corner2 from '@/assets/images/icons/spot-illustrations/corner-2.png';

const TransactionDetails = () => {
    const { id } = useParams();
    const { data: transaction, isLoading, isError, error } = useGetTransactionQuery(Number(id));

    if (isLoading) return <Skeleton className={'h-[700px]'} />;
    if (isError) return <AlertError error={error} />;
    if (!transaction) return <AlertError error={'Unable to fetch transaction.'} />;

    return (
        <section className={'space-y-3'}>
            <Card className={'relative'}>
                <div className="bg-card-holder" style={{ backgroundImage: `url(${corner2})` }} />
                <CardHeader>
                    <CardTitle>Transaction: #{transaction.id}</CardTitle>
                    <CardDescription>{moment(transaction.created_at).format('MMM Do, Y, HH:mm A')}</CardDescription>
                    <span className={'absolute top-0 end-0 pe-6 pt-3 text-xs'}>
                        Latency <Latency from={transaction.created_at} to={transaction.updated_at} />
                    </span>
                </CardHeader>
                <Separator className={'w-1/2 mx-auto h-[1px] md:mb-7'} />
                <CardContent>
                    <div className="flex h-12 items-center justify-between space-x-4 text-sm">
                        <div className={'flex flex-col'}>
                            <small className={'text-muted-foreground'}>Status</small>
                            <StatusBadge
                                status={transaction.status}
                                statuses={[Status.COMPLETED, Status.FAILED, Status.PENDING, Status.REFUNDED]}
                                onStatusChange={(s) => console.log(s)}
                            />
                        </div>
                        <Separator orientation="vertical" />
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

            <Card>
                <CardHeader>
                    <CardTitle>Payment</CardTitle>
                </CardHeader>
                <CardContent>
                    {transaction.payment ? (
                        <div className="flex h-20 items-center justify-between space-x-4 text-sm">
                            {transaction.payment.description && (
                                <>
                                    <div>
                                        <small className={'text-muted-foreground'}>Description</small>
                                        <h3>{transaction.payment.description}</h3>
                                    </div>
                                    <Separator orientation="vertical" />
                                </>
                            )}
                            <div>
                                <small className={'text-muted-foreground'}>Amount</small>
                                <h3>{currencyFormat(transaction.payment.amount)}</h3>
                                <p>
                                    <span>Charge: </span>
                                    {currencyFormat(transaction.payment.charge)}
                                </p>
                            </div>
                            <Separator orientation="vertical" />
                            <div>
                                <small className={'text-muted-foreground'}>Destination</small>
                                <ul className="leaders">
                                    {Object.keys(transaction.payment.destination).map((key, index) => (
                                        <li key={index}>
                                            <span>{Str.headline(key)}:</span>
                                            <span>{transaction.payment.destination[key]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Separator orientation="vertical" />
                            <div>
                                <small className={'text-muted-foreground'}>Status</small>
                                <h3>
                                    <StatusBadge status={transaction.payment.status} />
                                </h3>
                            </div>
                        </div>
                    ) : (
                        <small className={'text-muted-foreground'}>No Data</small>
                    )}
                </CardContent>
            </Card>
        </section>
    );
};

export default TransactionDetails;
