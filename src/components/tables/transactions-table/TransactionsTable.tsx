import { DataTable } from '@/components/datatable/DataTable.tsx';
import { columns } from '@/components/tables/transactions-table/Columns.tsx';
import { Transaction } from '@/lib/types.ts';
import { Status } from '@/lib/enums.ts';
import { getStatusIcon, getUniquePropertyValues } from '@/lib/utils.ts';
import { useGetMerchantsQuery, useGetMpesaStoresQuery } from '@/services/merchantsApi.ts';

type TransactionsTableProps = { title?: string; transactions: Transaction[]; hideMerchantCol?: boolean };

const TransactionsTable = ({
    title = 'Transactions',
    transactions,
    hideMerchantCol = false,
}: TransactionsTableProps) => {
    const { data: merchants } = useGetMerchantsQuery();
    const { data: stores } = useGetMpesaStoresQuery();

    let cols = columns;

    if (hideMerchantCol) {
        cols = cols.filter((c) => c.header !== 'Merchant');
    }

    transactions = transactions.map((t) => {
        const merchant = merchants?.find((m) => m.id === t.merchant);
        const store = stores?.find(
            (s) => s.agent === t.payment?.destination?.agent && s.store === t.payment?.destination?.store
        );

        return { ...t, merchant, destination: store?.name || t.destination };
    });

    return (
        <DataTable
            title={title}
            columns={cols}
            data={transactions}
            facetedFilters={[
                /*{
                    column_id: 'product',
                    title: 'Product',
                    options: [
                        { label: 'Withdraw', value: 'WITHDRAWAL', icon: BiMoneyWithdraw },
                        { label: 'Float', value: 'FLOAT', icon: PiLifebuoyDuotone },
                    ],
                },*/
                {
                    column_id: 'status',
                    title: 'Status',
                    options: getUniquePropertyValues(transactions, 'status').map((s) => ({
                        label: s as string,
                        value: s as string,
                        icon: getStatusIcon(s as Status),
                    })),
                },
            ]}
        />
    );
};

export default TransactionsTable;
