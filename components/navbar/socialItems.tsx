"use client";
import { SocialMediaProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SocalProps = {
    socialItems: SocialMediaProps[];
}


const SocialItems = ({ socialItems }: SocalProps) => {
    const [tootTip, setToolTip] = useState<string | null>(null);

    return (
        <div className="flex items-center gap-8 relative">
            {
                socialItems.map((item, index) => {
                    return (
                        <Link
                            href={item.href}
                            target="_blank"
                            className="cursor-pointer rounded-full transform transition-transform duration-500 ease-in-out hover:rotate-6 relative"
                            key={index}>
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={25}
                                height={25}
                                className="size-full rounded-full"
                                onMouseOver={() => setToolTip(item.name)}
                                onMouseOut={() => setToolTip(null)}
                            />
                            {tootTip === item.name && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 group-hover:flex flex-col items-center ease-in-out duration-700">
                                    <div className="w-3 h-3 bg-gray-800 transform translate-y-2 rotate-45 mx-auto"></div>
                                    <div className="bg-gray-800 text-white text-sm rounded px-2 py-1">
                                        {item.name}
                                    </div>
                                </div>
                            )}
                        </Link>
                    );
                })
            }
        </div>
    )
}

export default SocialItems;