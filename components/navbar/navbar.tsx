import { navbarItems, socialMedia } from "@/lib/utils"
import NavbarItems from "./navbarItems";
import SocialItems from "./socialItems";
import UserDetails from "./user-details";


const Navbar = () => {

    return (
        <div className="w-full h-16 p-4">
            <div className="flex items-center justify-between h-full px-20 pt-6">
                <NavbarItems navbarItems={navbarItems} />
                <span></span>
                <SocialItems socialItems={socialMedia} />
                <UserDetails />
            </div>
        </div>
    )
}

export default Navbar;