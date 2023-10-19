import { ColumnDef } from '@tanstack/react-table';
import { Transaction } from '@/lib/types.ts';
import { currencyFormat, getRelativeDateAndTime } from '@/lib/utils.ts';
import { Actions } from '@/pages/transactions/datatable/Actions.tsx';

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: 'destination',
        header: 'Destination',
    },
    {
        accessorKey: 'description',
        header: 'Description',
    },
    {
        accessorKey: 'amount',
        header: 'Amount',
        cell: ({ row }) => currencyFormat(row.original.amount),
    },
    {
        accessorKey: 'product',
        header: 'Product',
        filterFn: (row, id, value) => value.includes(row.getValue(id)),
    },
    {
        accessorKey: 'created_at',
        header: 'Created',
        cell: ({ row: { original: t } }) => {
            const { date, time } = getRelativeDateAndTime(t.created_at);

            return (
                <>
                    <span>{time}</span>
                    <br />
                    <small className={'text-gray-600 text-[7pt]'}>{date}</small>
                </>
            );
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => <Actions transaction={row.original} />,
    },
];
