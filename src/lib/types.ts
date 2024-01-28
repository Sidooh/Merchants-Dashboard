import { IconType } from 'react-icons';
import { To } from 'react-router-dom';
import { ComponentType } from 'react';
import { EarningAccountType, Status } from '@/lib/enums.ts';

export type RouteChildType = {
    name: string;
    active?: boolean;
    icon: IconType;
    to: To;
    disabled?: boolean;
};

export type RouteType = {
    label: string;
    children: RouteChildType[];
};

export interface ApiResponse<T> {
    result: 1 | 0;
    status: string;
    data: T;
    errors: object[];
}

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = { access_token: string };

export type Model = {
    id: number;
    created_at: Date | string;
    updated_at: Date | string;
};

export type EarningAccount = Model & {
    account_id: number;
    type: EarningAccountType;
    amount: number;
};

export type Merchant = Model & {
    account_id: number;
    float_account_id: number;
    location_id: number;

    first_name: string;
    last_name: string;
    id_number: string;
    phone: string;

    business_name: string;
    code: number;
    land_mark: string;
};

export type MpesaStore = Model & {
    merchant_id: number;

    agent: string;
    store: string;
    name: string;
};

export type Transaction = Model & {
    amount: number;
    status: Status;
    description: string;
    destination: string;
    merchant: number | Merchant;
    product: string;
};

export type FacetedFilterType = {
    column_id: string;
    title: string;
    options: {
        label: string;
        value: string;
        icon?: ComponentType<{ className?: string }>;
    }[];
};
