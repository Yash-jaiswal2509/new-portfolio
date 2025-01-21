import { navbarItems, socialMedia } from "@/lib/utils"
import Image from "next/image";



const Navbar = () => {

    return (
        <div className="w-full h-16 border rounded-full">
            <div className="flex items-center justify-between h-full px-10">
                <div className="flex items-center justify-between gap-8 tracking-wider">
                    {navbarItems.map((item, index) => {
                        return (
                            <span key={index} className="text-white cursor-pointer hover:border-b border-white" >
                                {item.name}
                            </span>
                        );
                    })}
                </div>
                <span></span>
                <div className="flex items-center gap-8">
                    {
                        socialMedia.map((item, index) => {
                            return (
                                <Image
                                    key={index}
                                    src={item.icon}
                                    alt={item.name}
                                    width={25}
                                    height={25}
                                    className="cursor-pointer rounded-2xl size-full"
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar