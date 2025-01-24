import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";


type HeaderProps = {
    headerLabel: string
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["800"],
});

const Header = ({ headerLabel }: HeaderProps) => {

    return (
        <div className="flex flex-col justify-center items-center tracking-wide">
            <h1 className={cn("text-2xl", poppins.className)}>🔐 Authentication</h1>
            <p className="font-semibold text-muted-foreground">{headerLabel}</p>
        </div>
    )
}

export default Header