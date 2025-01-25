import CardWrapper from "./card-wrapper"
import { BsExclamationTriangleFill } from "react-icons/bs"

export const ErrorCard = () => {
    return (
        <CardWrapper headerLabel="Error!, Something went wrong" showSocials={false} backButtonHref="/auth/login" backButtonLabel="Back to login">
            <div className="flex w-full items-center justify-center">
                <BsExclamationTriangleFill className="text-destructive" />
            </div>
        </CardWrapper>
    )
}