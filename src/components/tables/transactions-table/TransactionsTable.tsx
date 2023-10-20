import { DataTable } from '@/components/datatable/DataTable.tsx';
import { columns } from '@/components/tables/transactions-table/Columns.tsx';
import { Transaction } from '@/lib/types.ts';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { PiLifebuoyDuotone } from 'react-icons/pi';

type TransactionsTableProps = { title?: string; transactions: Transaction[] };
const TransactionsTable = ({ title = 'Transactions', transactions }: TransactionsTableProps) => {
    return (
        <DataTable
            title={title}
            columns={columns}
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
