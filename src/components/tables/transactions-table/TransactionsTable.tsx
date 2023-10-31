import { DataTable } from '@/components/datatable/DataTable.tsx';
import { columns } from '@/components/tables/transactions-table/Columns.tsx';
import { Transaction } from '@/lib/types.ts';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { PiLifebuoyDuotone } from 'react-icons/pi';

type TransactionsTableProps = { title?: string; transactions: Transaction[]; hideMerchantCol?: boolean };
const TransactionsTable = ({
    title = 'Transactions',
    transactions,
    hideMerchantCol = false,
}: TransactionsTableProps) => {
    let cols = columns;

    if (hideMerchantCol) {
        cols = cols.filter((c) => c.header !== 'Merchant');
    }

    return (
        <DataTable
            title={title}
            columns={cols}
            data={transactions}
            facetedFilters={[
                {
                    column_id: 'product',
                    title: 'Product',
                    options: [
                        { label: 'Withdraw', value: 'WITHDRAWAL', icon: BiMoneyWithdraw },
                        { label: 'Float', value: 'FLOAT', icon: PiLifebuoyDuotone },
                    ],
                },
            ]}
        />
    );
};

export default TransactionsTable;
