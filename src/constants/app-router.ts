export const ROUTES = {
    AUTH: {
        SIGN_UP: 'sign-up',
        SIGN_IN: 'sign-in',
        FORGOT_PASSWORD: 'forgot-password',
    },
    APP: {
        HOME: 'index',
        PROFILE: 'profile',
        SETTINGS: 'settings/index',
    },
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES];