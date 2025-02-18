'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

type AchievementData = {
    id: string;
    title: string;
    description: string;
    achievementImageUrl: string;
    achievedAt: Date;
}

type AchievementCardProps = {
    achievement: AchievementData;
    index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
        >
            <Card className="glow-card bg-transparent text-white backdrop-blur shadow-lg border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-center relative">
                        {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                        {achievement.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <motion.div
                        className="relative aspect-video w-full overflow-hidden rounded-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image
                            src={achievement.achievementImageUrl}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>
                    <p className="text-sm text-gray-400 mt-4">
                        Achieved on: {new Date(achievement.achievedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                        })}
                    </p>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default AchievementCard; 