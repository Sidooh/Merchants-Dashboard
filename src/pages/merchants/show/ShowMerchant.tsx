import { useParams } from 'react-router-dom';
import Details from '@/pages/merchants/show/Details.tsx';
import TransactionsTable from '@/components/tables/transactions-table/TransactionsTable.tsx';
import { useGetTransactionsQuery } from '@/services/transactionsApi.ts';
import { Skeleton } from '@/components/ui/skeleton.tsx';
import MpesaStoresTable from '@/components/tables/mpesa-stores-table/MpesaStoresTable.tsx';
import { useGetMpesaStoresQuery } from '@/services/merchantsApi.ts';

const Transactions = ({ merchantId }: { merchantId: number }) => {
    const { data } = useGetTransactionsQuery({ merchants: merchantId });

    if (!data) return <Skeleton className={'h-[500px]'} />;

    return <TransactionsTable transactions={data} hideMerchantCol />;
};

const MpesaStores = ({ merchantId }: { merchantId: number }) => {
    const { data } = useGetMpesaStoresQuery(merchantId);

    if (!data) return <Skeleton className={'h-[500px]'} />;

    return <MpesaStoresTable stores={data} />;
};

const ShowMerchant = () => {
    const { id } = useParams();
    const merchantId = Number(id);

    return (
        <div className={'space-y-3'}>
            <Details id={merchantId} />

            <Transactions merchantId={merchantId} />

            <MpesaStores merchantId={merchantId} />
        </div>
    );
};

export default ShowMerchant;
