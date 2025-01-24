import CardWrapper from "@/components/auth/card-wrapper"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"

const Register = () => {
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    return (
        <CardWrapper
            headerLabel="Create an Account"
            showSocials={true}
            backButtonHref="/auth/login"
            backButtonLabel="Already have an account? Sign In"
        >
            <Form {...form}>
                <form>

                </form>
            </Form>
        </CardWrapper>
    )
}

export default Register