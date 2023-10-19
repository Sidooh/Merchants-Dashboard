import { coreApi } from '@/services/coreApi';
import { ApiResponse, Merchant } from '@/lib/types';

const transactionsApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        getMerchants: build.query<Merchant[], void>({
            query: () => '/merchants',
            transformResponse: (val: ApiResponse<Merchant[]>) => val.data,
            providesTags: ['Merchant'],
        }),
    }),
});

export const { useGetMerchantsQuery } = transactionsApi;
