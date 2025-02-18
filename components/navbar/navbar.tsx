import { navbarItems, socialMedia } from "@/lib/utils"
import NavbarItems from "./navbarItems";
import SocialItems from "./socialItems";
import UserDetails from "./user-details";


const Navbar = () => {

    return (
        <div className="w-full h-0 md:h-16 md:p-4">
            <div className="flex items-center justify-between h-full md:px-4 lg:px-10 xl:px-20 pt-2 lg:pt-6">
                <NavbarItems navbarItems={navbarItems} />
                <span className="w-full"></span>
                <div className="md:flex hidden h-full w-full">
                    <SocialItems socialItems={socialMedia} />
                </div>
                <UserDetails />
            </div>
        </div>
    )
}

export default Navbar;