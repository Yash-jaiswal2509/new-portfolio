"use client";
import { useCurrentUser } from "@/hooks/use-current-user"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";
import LogoutButton from "../auth/logout-button";
import { useEffect, useState } from "react";

const UserDetails = () => {
    const user = useCurrentUser();

    return (
        <div>
            {
                user && (
                    <>
                        <span></span>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="relative rounded-full overflow-hidden">
                                <Image
                                    src={user?.image || "/user-profile.jpg"}
                                    alt={user?.name || "User profile"}
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
                                    Name: {user?.name}
                                </DropdownMenuShortcut>
                                <DropdownMenuShortcut>
                                    Email: {user?.email}
                                </DropdownMenuShortcut>
                                <DropdownMenuSeparator />
                                <DropdownMenuShortcut className="cursor-pointer my-5">
                                    <LogoutButton>
                                        Logout
                                    </LogoutButton>
                                </DropdownMenuShortcut>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )
            }
        </div>
    )
}

export default UserDetails