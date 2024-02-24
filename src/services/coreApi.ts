import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONFIG } from '@/config';
import { RootState } from '@/app/store';

export const coreApi = createApi({
    reducerPath: 'coreApi',
    tagTypes: ['EarningAccount', 'Merchant', 'Transaction'],
    keepUnusedDataFor: 60 * 7, //  Seven Minutes
    baseQuery: fetchBaseQuery({
        baseUrl: CONFIG.services.merchants.api.url,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth?.token;

            if (token) headers.set('Authorization', `Bearer ${token}`);

            return headers;
        },
    }),
    endpoints: () => ({}),
});
