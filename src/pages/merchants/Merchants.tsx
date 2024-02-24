import { columns } from '@/pages/merchants/datatable/Columns';
import { DataTable } from '@/components/datatable/DataTable';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetMerchantsQuery } from '@/services/merchantsApi.ts';

const Merchants = () => {
    const { data } = useGetMerchantsQuery();

    if (!data) return <Skeleton className={'h-[700px]'} />;

    return <DataTable title={'All Merchants'} columns={columns} data={data} />;
};

export default Merchants;
