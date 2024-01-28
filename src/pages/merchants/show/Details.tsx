import { useGetMerchantByIdQuery } from '@/services/merchantsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { Str } from '@/lib/utils.ts';
import { Link } from 'react-router-dom';
import { CONFIG } from '@/config.ts';

type DetailsProps = {
    id: number;
};

const Details = ({ id }: DetailsProps) => {
    const { data: merchant } = useGetMerchantByIdQuery(id);

    if (!merchant) return <Skeleton className={'h-[200px]'} />;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Merchant Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex h-5 items-center justify-evenly space-x-4 text-sm">
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Name</h3>
                        <Link
                            to={`${CONFIG.services.accounts.dashboard.url}/${merchant.account_id}`}
                            target={'_blank'}
                            className={'underline text-primary'}
                        >
                            {Str.headline(`${merchant.first_name} ${merchant.last_name}`)} -{' '}
                            <small className={'text-muted-foreground'}>{merchant.account_id}</small>
                        </Link>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Business Name</h3>
                        <p>{merchant.business_name}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Phone</h3>
                        <p>{merchant.phone}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>National ID</h3>
                        <p>{merchant.id_number}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Code</h3>
                        <p>{merchant.code}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Details;
