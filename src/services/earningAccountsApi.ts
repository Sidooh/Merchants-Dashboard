import { coreApi } from '@/services/coreApi';
import { ApiResponse, EarningAccount } from '@/lib/types';
import { providesList } from '@/lib/utils.ts';

const transactionsApi = coreApi.injectEndpoints({
    endpoints: (build) => ({
        getEarningAccountsByMerchant: build.query<EarningAccount[], number>({
            query: (merchantId) => `/earning-accounts/merchant/${merchantId}`,
            transformResponse: (val: ApiResponse<EarningAccount[]>) => val.data,
            providesTags: (res) => providesList(res, 'EarningAccount'),
        }),
    }),
});

export const { useGetEarningAccountsByMerchantQuery } = transactionsApi;
