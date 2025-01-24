"use client";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./card-wrapper";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import FormSuccess from "./form-success";
import FormError from "./form-error";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with another account" : "";
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const onSubmit = (values: zod.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values, callbackUrl)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data?.error);
                    }
                    if (data?.success) {
                        form.reset();
                        setSuccess(data?.success);
                    }
                })
                .catch(() => setError("Something went wrong"));
        })
    }

    return (
        <CardWrapper headerLabel="Welcome Back" showSocials={true} backButtonHref="/auth/register" backButtonLabel = "Don't have an account? Create Now">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <Form {...form}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="xyz@gmail.com" type="email" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...form.register("password")} placeholder="********" type="password" />
                                    </FormControl>
                                </FormItem>
                            )} />
                    </Form>
                </div>
                <FormSuccess />
                <FormError />
                <Button className="w-full" variant={"custom"} type="submit">Submit</Button>
            </form>
        </CardWrapper>
    )
}

export default LoginForm;