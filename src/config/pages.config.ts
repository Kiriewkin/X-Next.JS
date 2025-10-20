export const PAGES = {
    HOME: '/',
    EXPLORE: '/explore',
    PROFILE_FAKE: '/profile-fake',
    PROFILE: (username: string) => `/user/${username}`,
    SHOP: '/shop',
};

export const SHOP_PAGES = {
    SSG: `${PAGES.SHOP}/ssg`,
    SSR: `${PAGES.SHOP}/ssr`,
    ISR: `${PAGES.SHOP}/isr`,
};
