import { ColumnDef } from '@tanstack/react-table';
import { Merchant } from '@/lib/types.ts';
import { Actions } from '@/pages/merchants/datatable/Actions.tsx';
import { Str } from '@/lib/utils.ts';

export const columns: ColumnDef<Merchant>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row: { original: m } }) => Str.headline(`${m.first_name} ${m.last_name}`),
    },
    {
        accessorKey: 'business_name',
        header: 'Business',
    },
    {
        accessorKey: 'id_number',
        header: 'National ID',
    },
    {
        accessorKey: 'code',
        header: 'Code',
    },
    {
        id: 'actions',
        cell: ({ row }) => <Actions merchant={row.original} />,
    },
];
