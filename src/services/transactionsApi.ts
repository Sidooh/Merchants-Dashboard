import { coreApi } from '@/services/coreApi';
import { ApiResponse, Transaction } from '@/lib/types';

const transactionsApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        getTransactions: build.query<Transaction[], { days?: number; merchants?: number }>({
            query: ({ days, merchants }) => ({
                url: '/transactions',
                params: { days, merchants },
            }),
            transformResponse: (val: ApiResponse<Transaction[]>) => val.data,
            providesTags: ['Transaction'],
        }),
    }),
});

export const { useGetTransactionsQuery } = transactionsApi;
