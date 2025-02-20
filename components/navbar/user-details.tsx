"use client";

import { useSession, signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { useState } from "react";

const UserDetails = () => {
    const { data: session, status } = useSession();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const onLogout = async () => {
        try {
            setIsLoggingOut(true);
            await signOut({ redirectTo: DEFAULT_LOGIN_REDIRECT });
        } catch (error) {
            console.error("Error during logout:", error);
            setIsLoggingOut(false);
        }
    };

    if (status !== "authenticated" || !session?.user) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="relative rounded-full">
                <Image
                    src={session.user.image || "/user-profile.jpg"}
                    alt={session.user.name || "User profile"}
                    height={160}
                    width={160}
                    className="rounded-full ml-8 md:block hidden" 
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
    );
};

export default UserDetails;