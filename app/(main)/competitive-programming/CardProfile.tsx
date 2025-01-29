import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";

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
        <Card className="bg-transparent text-white">
            <CardHeader>
                <div className="flex mx-auto bg-white overflow-hidden rounded-md p-1">
                    <Image src={cardTitleImagePath} alt="Codeforces" width={imageWidth} height={imageHeight} className="h-12 object-cover" />
                </div>
            </CardHeader>
            <CardFooter>
                <div className="grid grid-rows-2 grid-cols-3 gap-4 text-center text-nowrap font-bold mt-5">
                    <CardTitle>Max Rating</CardTitle>
                    <CardTitle>Rating</CardTitle>
                    <CardTitle>Problems Solved</CardTitle>
                    <CardDescription>{maxRating}</CardDescription>
                    <CardDescription>{currentRating}</CardDescription>
                    <CardDescription>{problemSolved}</CardDescription>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CardProfile