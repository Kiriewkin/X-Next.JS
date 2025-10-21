'use client'
import { usePathname } from "next/navigation";
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu() {
    const pathName = usePathname()
    return (
        <div>
            <nav className="flex flex-col gap-6 text-white/80">
                {MENU.map(menuItem => (
                    <MenuItem
                        key={menuItem.name}
                        menuItem={menuItem}
                        isActive={!!match(menuItem.href)(pathName) || pathName.startsWith(menuItem.href + '/')}
                    />
                ))}
            </nav>
        </div>
    )
}
