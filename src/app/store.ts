import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import themeReducer from '@/features/theme/themeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { coreApi } from '@/services/coreApi.ts';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        [coreApi.reducerPath]: coreApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coreApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
