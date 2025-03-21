import Link from "next/link";
import { Button } from "../ui/button";

type BackButtonProps = {
    href: string;
    label: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {

    return (
        <Button variant="link" className="font-normal w-full text-white" size="sm" asChild>
            <Link href={href}>{label}</Link>
        </Button>
    )
}

export default BackButton