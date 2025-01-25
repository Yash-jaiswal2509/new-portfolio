"use client";
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { useSearchParams } from "next/navigation"
import { useState } from "react";

const OAuth = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const [isPending, setIsPending] = useState<string | null>(null);

    const onClick = async (provider: "github" | "google") => {
        setIsPending(provider);
        try {
            await signIn(provider, {
                callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
            })
        } catch (error) {
            console.error(error);
        } finally {
            setIsPending(null);
        }
    }

    return (
        <div className="flex justify-center items-center w-full gap-x-2">
            <Button
                className="w-full font-semibold bg-transparent cursor-pointer disabled:brightness-50"
                size="lg"
                variant="outline"
                onClick={() => onClick("google")}
                disabled={isPending != null}>

                <FcGoogle className="h-5 w-5" /> Google
            </Button>
            <Button
                className="w-full font-semibold bg-transparent cursor-pointer disabled:brightness-50"
                size="lg"
                variant="outline"
                onClick={() => onClick("github")}
                disabled={isPending != null}><FaGithub className="h-5 w-5" /> Github</Button>
        </div>
    )
}

export default OAuth;