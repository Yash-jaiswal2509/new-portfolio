"use client"
import CardWrapper from "@/components/auth/card-wrapper"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { register } from "@/actions/register"
import FormSuccess from "./form-success"
import FormError from "./form-error"
import { Button } from "../ui/button"

const RegisterForm = () => {

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();

    const onSubmit = (values: Zod.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            register(values)
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
        });
    }

    return (
        <CardWrapper
            headerLabel="Create an Account"
            showSocials={true}
            backButtonHref="/auth/login"
            backButtonLabel="Already have an account? Sign In"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormItem>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                    {...form.register("name")}
                                />
                            </FormControl>
                        </FormItem>
                        <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    {...form.register("email")}
                                />
                            </FormControl>
                        </FormItem>
                        <FormItem>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    {...form.register("password")}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                    <FormSuccess message={success} />
                    <FormError message={error} />
                    <Button
                        className="w-full"
                        variant={"custom"}
                        type="submit"
                        disabled={isPending}
                    >
                        Create an account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm;