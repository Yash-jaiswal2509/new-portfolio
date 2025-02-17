"use client";

import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const { data: session, status } = useSession();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (isLoggingOut && status !== "authenticated") {
            window.location.href = "/";
        }
    }, [isLoggingOut, status, session]);

    const onLogout = async () => {
        try {
            setIsLoggingOut(true);
            await logout();
            setShowDropdown(false);
        } catch (error) {
            console.error("Error during logout:", error);
            setIsLoggingOut(false);
        }
    };

    if (status !== "authenticated" || !session?.user) {
        return null;
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="relative rounded-full overflow-hidden">
                    <Image
                        src={session.user.image || "/user-profile.jpg"}
                        alt={session.user.name || "User profile"}
                        height={40}
                        width={40}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col w-full bg-black/80 backdrop-blur-sm text-white px-4 mt-2 border border-white/10">
                    <DropdownMenuLabel>
                        User Profile
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuShortcut>
                        Name: {session.user.name}
                    </DropdownMenuShortcut>
                    <DropdownMenuShortcut>
                        Email: {session.user.email}
                    </DropdownMenuShortcut>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem
                        onClick={onLogout}
                        disabled={isLoggingOut}
                        className="cursor-pointer my-2 hover:bg-white/10"
                    >
                        {isLoggingOut ? "Logging out..." : "Logout"}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default UserDetails;