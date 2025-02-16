"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import { motion } from "framer-motion";

type CardProfileProps = {
    cardTitleImagePath: string;
    imageHeight: number;
    imageWidth: number;
    problemSolved: number;
    currentRating: number;
    maxRating: number;
}

const CardProfile = ({ cardTitleImagePath, imageHeight, imageWidth, problemSolved, currentRating, maxRating }: CardProfileProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Card className="bg-transparent text-white hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <CardHeader>
                    <div className="flex mx-auto bg-white overflow-hidden rounded-md p-1">
                        <Image src={cardTitleImagePath} alt="Platform Logo" width={imageWidth} height={imageHeight} className="h-12 object-cover" />
                    </div>
                </CardHeader>
                <CardFooter>
                    <div className="grid grid-rows-2 grid-cols-3 gap-2 text-center font-bold mt-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <CardTitle>Max Rating</CardTitle>
                            <CardDescription>{maxRating}</CardDescription>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <CardTitle>Rating</CardTitle>
                            <CardDescription>{currentRating}</CardDescription>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <CardTitle>Problems Solved</CardTitle>
                            <CardDescription>{problemSolved}</CardDescription>
                        </motion.div>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default CardProfile