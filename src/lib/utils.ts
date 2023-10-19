import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import moment from 'moment';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const decodeJWT = (token: string) => {
    if (!token) return null;

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
    );

    return JSON.parse(jsonPayload);
};

export const toast = async (options: SweetAlertOptions = {}) => {
    const defaultOptions: SweetAlertOptions = {
        icon: 'success',
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 7000,
    };

    const mergedOptions: SweetAlertOptions = { ...defaultOptions, ...options };

    await Swal.fire(mergedOptions);
};

export const getItemFromStore = (key: string, defaultValue?: string | boolean, store = localStorage) => {
    try {
        return JSON.parse(String(store.getItem(key))) || defaultValue;
    } catch {
        return store.getItem(key) || defaultValue;
    }
};
export const setItemToStore = (key: string, payload: string, store = localStorage) => store.setItem(key, payload);

export const currencyFormat = (number?: number, currency = 'KES', decimals = 2): string => {
    const n = Number(number);

    if (isNaN(n)) return '0';

    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency,
        maximumFractionDigits: decimals,
    }).format(n);
};

const REFERENCE = moment();
const TODAY = REFERENCE.clone().startOf('day');
const YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
export const getRelativeDateAndTime = (date: string | Date) => {
    let relativeDate: string;
    const time = moment(date).format('hh:mm A');

    if (time === 'Invalid date') console.error(date);

    if (moment(date).isSame(TODAY, 'd')) {
        relativeDate = 'Today';
    } else if (moment(date).isSame(YESTERDAY, 'd')) {
        relativeDate = 'Yesterday';
    } else {
        relativeDate = moment(date).format('D.M.y');
    }

    const toString = () => `${relativeDate} @${time}`;

    return { date: relativeDate, time, toString };
};

export const Str = {
    headline: (str: string) => {
        if (!str) return '';

        str = str.replaceAll('_', ' ').replaceAll('-', ' ');

        return str.replaceAll(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substring(1).toLowerCase());
    },
    ucFirst: (str: string) => {
        str = str.toLowerCase();

        return str.charAt(0).toUpperCase() + str.slice(1);
    },
};
