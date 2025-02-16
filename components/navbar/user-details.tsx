"use client";

import { useCurrentUser } from "@/hooks/use-current-user"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";
import LogoutButton from "../auth/logout-button";
import { useSession } from "next-auth/react";

const UserDetails = () => {
    const { data: session, status } = useSession();

    if (status !== "authenticated") {
        return null;
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="relative rounded-full overflow-hidden">
                    <Image
                        src={session.user?.image || "/user-profile.jpg"}
                        alt={session.user?.name || "User profile"}
                        height={40}
                        width={40}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col w-full bg-black text-white px-4 bg-transparent mt-2">
                    <DropdownMenuLabel>
                        User profile
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuShortcut>
                        Name: {session.user?.name}
                    </DropdownMenuShortcut>
                    <DropdownMenuShortcut>
                        Email: {session.user?.email}
                    </DropdownMenuShortcut>
                    <DropdownMenuSeparator />
                    <DropdownMenuShortcut className="cursor-pointer my-5">
                        <LogoutButton>
                            Logout
                        </LogoutButton>
                    </DropdownMenuShortcut>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserDetails;