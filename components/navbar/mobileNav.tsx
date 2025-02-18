"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

import { Home, User, Projector, Code, Book, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
    label: string;
    href: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const navItems: NavItem[] = [
    { label: "Home", href: "/", Icon: Home },
    { label: "Projects", href: "/projects", Icon: Projector },
    { label: "CP", href: "/competitive-programming", Icon: Code },
    { label: "Blog", href: "/blog", Icon: Book },
    { label: "About", href: "/about", Icon: User },
    { label: "Contact", href: "/contact", Icon: Mail },
];

export default function MobileNavbar() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
                "bg-transparent border border-white/10 backdrop-blur text-white rounded-full",
                "w-[95%] max-w-lg h-fit px-4 sm:px-8 pb-2",
                "overflow-visible",
                "flex justify-around items-center",
                "transition-transform duration-300",
                "md:hidden",
                isHidden ? "translate-y-96" : "-translate-y-5"
            )}
        >
            {navItems.map(({ label, href, Icon }) => {
                const isActive = pathname === href;
                return (
                    <Link
                        key={label}
                        href={href}
                        className={cn(
                            "flex flex-col items-center justify-center relative group",
                            isActive ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
                        )}
                    >
                        <div
                            className={cn(
                                "flex items-center justify-center p-3 rounded-full",
                                "transition-all duration-300 ease-in-out",
                                isActive
                                    ? "bg-blue-600 scale-125 sm:scale-150 translate-y-[-20px]"
                                    : "bg-transparent translate-y-0"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300",
                                    isActive
                                        ? "text-white"
                                        : "text-gray-400 group-hover:text-gray-200"
                                )}
                            />
                        </div>
                        <span
                            className={cn(
                                "text-xs sm:text-sm -mt-1",
                                isActive
                                    ? "text-blue-400 font-bold"
                                    : "text-gray-400 group-hover:text-gray-200"
                            )}
                        >
                            {label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}