"use client";
import Image from "next/image";
import Menu from "../../public/menu.svg";
import Logo from "../../public/logo.svg";



export default function Navbar() {
    return (
        <header className="w-full py-3 px-4">
            <nav className="flex items-center justify-between">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={".5rem"}
                    height={".5rem"}
                    className="object-contain cursor-pointer"
                />
                <Image
                    src={Menu}
                    alt="Menu"
                    width={24}
                    height={24}
                    className="object-contain cursor-pointer"
                />
            </nav>

        </header>
    );
}