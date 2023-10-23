import { useGetMerchantByIdQuery } from '@/services/merchantsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import { Str } from '@/lib/utils.ts';

type DetailsProps = {
    id: number;
};

const Details = ({ id }: DetailsProps) => {
    const { data } = useGetMerchantByIdQuery(id);

    if (!data) return <Skeleton className={'h-[200px]'} />;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Merchant Details</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex h-5 items-center justify-evenly space-x-4 text-sm">
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Name</h3>
                        <p>{Str.headline(`${data.first_name} ${data.last_name}`)}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Business Name</h3>
                        <p>{data.business_name}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>National ID</h3>
                        <p>{data.id_number}</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div className={'space-y-2'}>
                        <h3 className={'text-muted-foreground'}>Code</h3>
                        <p>{data.code}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Details;
