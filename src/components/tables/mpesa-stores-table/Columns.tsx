import { ColumnDef } from '@tanstack/react-table';
import { MpesaStore } from '@/lib/types.ts';
import { Str } from '@/lib/utils.ts';

export const columns: ColumnDef<MpesaStore>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row: { original: m } }) => Str.headline(m.name),
    },
    {
        accessorKey: 'store',
        header: 'Store',
    },
    {
        accessorKey: 'agent',
        header: 'Agent',
    },
];
