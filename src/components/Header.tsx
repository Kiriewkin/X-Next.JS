import Image from "next/image";
import Link from "next/link";
import { Menu } from "./Menu/Menu";

import logo from '../../public/x-logo.svg'

export function Header() {
    return (
        <header className="border-r border-gray-800 px-6 py-4 flex 
             items-center flex-col bg-black">
            <Link
                href="/"
                className="
                        flex items-center gap-3 px-3 py-2
                        rounded-2xl
                        transition-all duration-300 ease-out
                        hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10
                    "
            >
                <Image
                    src={logo}
                    alt="x-logo"
                    width={70}
                    height={50}
                />
            </Link>
            <Menu />
        </header>
    )
}
