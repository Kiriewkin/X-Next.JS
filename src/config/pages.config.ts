export const PAGES = {
    HOME: '/',
    EXPLORE: '/explore',
    PROFILE_FAKE: '/profile-fake',
    PROFILE: (nickname: string) => `/user/${nickname}`,
    PROFILE_POST: (nickname: string, id: string) => `/user/${nickname}/${id}`,
    SHOP: '/shop',
};

export const SHOP_PAGES = {
    SSG: `${PAGES.SHOP}/ssg`,
    SSR: `${PAGES.SHOP}/ssr`,
    ISR: `${PAGES.SHOP}/isr`,
};
