import { DataTable } from '@/components/datatable/DataTable.tsx';
import { columns } from '@/components/tables/transactions-table/Columns.tsx';
import { Transaction } from '@/lib/types.ts';
import { Status } from '@/lib/enums.ts';
import { FaCheck, FaCircleExclamation, FaHourglassStart } from 'react-icons/fa6';

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
                    options: [
                        { label: Status.COMPLETED, value: Status.COMPLETED, icon: FaCheck },
                        { label: Status.FAILED, value: Status.FAILED, icon: FaCircleExclamation },
                        { label: Status.PENDING, value: Status.PENDING, icon: FaHourglassStart },
                    ],
                },
            ]}
        />
    );
};

export default TransactionsTable;
