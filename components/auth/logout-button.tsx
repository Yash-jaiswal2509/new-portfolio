"use client";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";

type LogoutButtonProps = {
    children?: React.ReactNode;
    user?: any
}

const LogoutButton = ({ children, user }: LogoutButtonProps) => {
    const onClick = async () => {
        await logout();
        user = null;
    }

    return (
        <Button variant="custom" onClick={onClick} className="cursor-pointer w-full">
            {children}
        </Button>
    );
}

export default LogoutButton;