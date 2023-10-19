import { useGetMerchantByIdQuery } from '@/services/merchantsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Separator } from '@/components/ui/separator.tsx';

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
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div className={'text-center space-y-2'}>
                        <h3>Name</h3>
                        <p>
                            {data.first_name} {data.last_name}
                        </p>
                    </div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Details;
