import { ColumnDef } from '@tanstack/react-table';
import { Transaction } from '@/lib/types.ts';
import { currencyFormat, getRelativeDateAndTime, Str } from '@/lib/utils.ts';
import { Actions } from '@/components/tables/transactions-table/Actions';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Transaction>[] = [
    {
        accessorKey: 'merchant',
        header: 'Merchant',
        cell: ({ row: { original: t } }) => {
            if (typeof t.merchant !== 'number') {
                return (
                    <Link to={`/merchants/${t.merchant.id}`} className={'underline'}>
                        {Str.headline(t.merchant.business_name)}
                    </Link>
                );
            }
        },
    },
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
