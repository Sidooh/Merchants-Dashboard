import { coreApi } from '@/services/coreApi';
import { ApiResponse, Transaction } from '@/lib/types';

const transactionsApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        getTransactions: build.query<Transaction[], { days: number }>({
            query: ({ days }) => ({
                url: '/transactions',
                params: { days },
            }),
            transformResponse: (val: ApiResponse<Transaction[]>) => val.data,
            providesTags: ['Transaction'],
        }),
    }),
});

export const { useGetTransactionsQuery } = transactionsApi;
