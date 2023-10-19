import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import themeReducer from '@/features/theme/themeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { coreApi } from '@/services/coreApi.ts';

// Create the root reducer separately, so we can extract the RootState type
const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    [coreApi.reducerPath]: coreApi.reducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) =>
    configureStore({
        preloadedState,
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coreApi.middleware),
    });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
