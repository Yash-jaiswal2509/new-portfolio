"use client";
import { NavbarItemsProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
    navbarItems: NavbarItemsProps[];
}

const NavbarItems = ({ navbarItems }: NavbarProps) => {
    const params = usePathname();

    return (
        <div className="flex items-center justify-between gap-10 text-lg tracking-widest">
            {navbarItems.map((item, index) => {
                const isActive = params === item.href;
                return (
                    <Link
                        href={item.href}
                        key={index}
                        className={cn("text-white cursor-pointer relative group", isActive && 'text-blue-500')}
                    >
                        {item.name}
                        <span className={cn("absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300", isActive ? 'w-full bg-blue-500' : 'w-0 group-hover:w-full')} />
                    </Link>
                );
            })}
        </div>
    )
}

export default NavbarItems