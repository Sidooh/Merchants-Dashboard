export const CONFIG = {
    app: {
        name: 'Merchants',
        version: 2.1,
    },
    services: {
        accounts: {
            dashboard: {
                url: import.meta.env.VITE_ACCOUNTS_DASHBOARD_URL,
            },
            api: {
                url: import.meta.env.VITE_ACCOUNTS_API_URL,
            },
        },
        merchants: {
            api: {
                url: import.meta.env.VITE_MERCHANTS_API_URL,
            },
        },
        notify: {
            dashboard: {
                url: import.meta.env.VITE_NOTIFY_DASHBOARD_URL,
            },
        },
        products: {
            dashboard: {
                url: import.meta.env.VITE_PRODUCTS_DASHBOARD_URL,
            },
        },
        payments: {
            dashboard: {
                url: import.meta.env.VITE_PAYMENTS_DASHBOARD_URL,
            },
        },
        savings: {
            dashboard: {
                url: import.meta.env.VITE_SAVINGS_DASHBOARD_URL,
            },
        },
        ussd: {
            dashboard: {
                url: import.meta.env.VITE_USSD_DASHBOARD_URL,
            },
        },
    },
    tagline: 'Sidooh, Makes You Money with Every Purchase!',
};
