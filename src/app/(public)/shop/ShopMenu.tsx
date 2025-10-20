'use client'
import { MenuItem } from "@/components/Menu/MenuItem"
import { PAGES , SHOP_PAGES } from "@/config/pages.config"
import { usePathname } from "next/navigation"
import { match } from "path-to-regexp"


export function ShopMenu() {
    const pathname = usePathname()
    return (
        <nav className="flex gap-6 text-white/80">
            <MenuItem
                menuItem={{
                    href: PAGES.SHOP,
                    name: "SSR"
                }}
                isActive={!!match(PAGES.SHOP)(pathname)}
            />
            <MenuItem
                menuItem={{
                    href: SHOP_PAGES.SSG,
                    name: "SSG"
                }}
                isActive={!!match(SHOP_PAGES.SSG)(pathname)}
            />
            <MenuItem
                menuItem={{
                    href: SHOP_PAGES.ISR,
                    name: "ISR"
                }}
                isActive={!!match(SHOP_PAGES.ISR)(pathname)}
            />
        </nav>
    )
}
