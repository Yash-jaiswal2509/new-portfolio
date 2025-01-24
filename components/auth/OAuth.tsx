import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

const OAuth = () => {

    return (
        <div className="flex justify-center items-center w-full gap-x-2">
            <Button className="w-full font-semibold" size="lg" variant="outline"><FcGoogle className="h-5 w-5" /> Google</Button>
            <Button className="w-full font-semibold" size="lg" variant="outline"><FaGithub className="h-5 w-5" /> Github</Button>
        </div>
    )
}

export default OAuth;