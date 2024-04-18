import { useParams } from 'react-router-dom';
import Details from '@/pages/merchants/show/Details.tsx';
import TransactionsTable from '@/components/tables/transactions-table/TransactionsTable.tsx';
import { useGetTransactionsQuery } from '@/services/transactionsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import MpesaStoresTable from '@/components/tables/mpesa-stores-table/MpesaStoresTable.tsx';
import { useGetMerchantMpesaStoresQuery } from '@/services/merchantsApi.ts';
import { useGetEarningAccountsByMerchantQuery } from '@/services/earningAccountsApi.ts';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card.tsx';
import CountUp from 'react-countup';

const Transactions = ({ merchantId }: { merchantId: number }) => {
    const { data } = useGetTransactionsQuery({ merchants: merchantId });

    if (!data) return <Skeleton className={'h-[500px]'} />;

    return <TransactionsTable transactions={data} hideMerchantCol />;
};

const MpesaStores = ({ merchantId }: { merchantId: number }) => {
    const { data } = useGetMerchantMpesaStoresQuery(merchantId);

    if (!data) return <Skeleton className={'h-[500px]'} />;

    return <MpesaStoresTable stores={data} />;
};

const EarningAccounts = ({ merchantId }: { merchantId: number }) => {
    const { data } = useGetEarningAccountsByMerchantQuery(merchantId);

    if (!data) return <Skeleton className={'h-[500px]'} />;

    return (
        <div className={'grid grid-flow-col auto-cols-auto gap-3'}>
            {data.map((a) => (
                <Card key={a.id} className={'bg-gradient-to-r from-[#4a2613] to-[#414ba7] text-white'}>
                    <CardHeader className={'pb-0'}>
                        <CardDescription className={'text-white/70 text-xs'}>{a.type}</CardDescription>
                    </CardHeader>
                    <CardContent className={'text-xl'}>
                        <CountUp end={a.amount} prefix={'KES '} />
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const ShowMerchant = () => {
    const { id } = useParams();
    const merchantId = Number(id);

    return (
        <div className={'space-y-3'}>
            <Details id={merchantId} />

            <Transactions merchantId={merchantId} />

            <MpesaStores merchantId={merchantId} />

            <EarningAccounts merchantId={merchantId} />
        </div>
    );
};

export default ShowMerchant;
