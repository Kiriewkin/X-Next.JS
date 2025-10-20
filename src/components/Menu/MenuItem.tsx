import Link from "next/link"
import type { IMenuItem } from "./menu.data"
import styles from './MenuItem.module.scss'

interface Props {
    menuItem: IMenuItem
    isActive: boolean
}

export function MenuItem({ menuItem, isActive }: Props) {
    return (
        <Link
            href={menuItem.href}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
        >
            {menuItem.name}
        </Link>
    )
}
