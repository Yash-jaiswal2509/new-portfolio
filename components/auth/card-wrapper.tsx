import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import OAuth from "./OAuth";

type CardWrapperProps = {
    children: React.ReactNode,
    headerLabel: string,
    showSocials: boolean
}

const CardWrapper = ({ children, headerLabel, showSocials }: CardWrapperProps) => {

    return (
        <Card className="w-[400px] relative">
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
        </Card>
    )
}

export default CardWrapper;