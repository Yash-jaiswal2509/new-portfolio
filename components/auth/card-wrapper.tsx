import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import OAuth from "./OAuth";

type CardWrapperProps = {
    children: React.ReactNode,
    headerLabel: string,
    showSocials: boolean,
    backButtonHref: string,
    backButtonLabel: string
}

const CardWrapper = ({ children, headerLabel, showSocials, backButtonHref, backButtonLabel }: CardWrapperProps) => {

    return (
        <Card className="w-[400px] relative bg-transparent text-white">
            <CardHeader>
                <Header headerLabel={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocials && (
                <CardFooter>
                    <OAuth />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper;