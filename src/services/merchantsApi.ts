import { coreApi } from '@/services/coreApi';
import { ApiResponse, Merchant, MpesaStore } from '@/lib/types';

const merchantsApi = coreApi.injectEndpoints({
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
        getMerchantMpesaStores: build.query<MpesaStore[], number>({
            query: (id) => `/merchants/${id}/mpesa-store-accounts`,
            transformResponse: (val: ApiResponse<MpesaStore[]>) => val.data,
        }),
        getMpesaStores: build.query<MpesaStore[], void>({
            query: () => `/mpesa-store-accounts`,
            transformResponse: (val: ApiResponse<MpesaStore[]>) => val.data,
        }),
    }),
});

export const { useGetMerchantsQuery, useGetMerchantByIdQuery, useGetMpesaStoresQuery, useGetMerchantMpesaStoresQuery } =
    merchantsApi;
