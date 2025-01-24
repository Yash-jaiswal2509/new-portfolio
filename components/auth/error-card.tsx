import CardWrapper from "./card-wrapper"

export const ErrorCard = () =>{
    return(
        <CardWrapper headerLabel="Error!, Something went wrong" showSocials={false} backButtonhref="/auth/login">
            
        </CardWrapper>
    )
}