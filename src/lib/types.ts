import { IconType } from 'react-icons';
import { To } from 'react-router-dom';
import { ComponentType } from 'react';

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

export type Transaction = {
    id: 26;
    amount: 10;
    status: 10;
    description: string;
    destination: string;
    merchant: 3;
    product: string;
    created_at: Date | string;
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
