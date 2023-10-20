import { columns } from '@/components/tables/mpesa-stores-table/Columns.tsx';
import { DataTable } from '@/components/datatable/DataTable.tsx';
import { MpesaStore } from '@/lib/types.ts';

type MpesaStoresTableProps = { title?: string; stores: MpesaStore[] };
const MpesaStoresTable = ({ title = 'Mpesa Stores', stores }: MpesaStoresTableProps) => {
    return <DataTable title={title} columns={columns} data={stores} />;
};

export default MpesaStoresTable;
