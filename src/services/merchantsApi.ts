import { coreApi } from '@/services/coreApi';
import { ApiResponse, Merchant } from '@/lib/types';

const transactionsApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        getMerchants: build.query<Merchant[], void>({
            query: () => '/merchants',
            transformResponse: (val: ApiResponse<Merchant[]>) => val.data,
            providesTags: ['Merchant'],
        }),
        getMerchantById: build.query<Merchant, number>({
            query: (id) => `/merchants/${id}`,
            transformResponse: (val: ApiResponse<Merchant>) => val.data,
        }),
    }),
});

export const { useGetMerchantsQuery, useGetMerchantByIdQuery } = transactionsApi;
