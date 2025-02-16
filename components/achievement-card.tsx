import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type AchievementData = {
    id: string;
    title: string;
    description: string;
    achievementImageUrl: string;
}

type AchievementCardProps = {
    achievement: AchievementData;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
    return (
        <Card className="bg-transparent text-white backdrop-blur shadow-custom-light shadow-white">
            <CardHeader>
                <CardTitle className="text-center">{achievement.title}</CardTitle>
                <CardDescription className="text-center">{achievement.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src={achievement.achievementImageUrl}
                    alt={achievement.title}
                    width={80}
                    height={80}
                    className="w-full h-full rounded-md border border-white"
                />
            </CardContent>
        </Card>
    );
} 