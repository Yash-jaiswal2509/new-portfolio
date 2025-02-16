import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { ShoppingBag } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DownloadResume from "@/components/home/download-resume";
import { Achievement } from '@prisma/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { getAchievements } from "@/actions/get-achievements";
import { AchievementCard } from "@/components/achievement-card";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

const Home = async () => {
  const { achievements = [] } = await getAchievements();

  const words = [
    { text: "Hi, I'm Yash Jaiswal, a aspiring", className: "text-5xl text-white" },
    { text: "Software Engineer.", className: "text-5xl text-blue-500" },
  ];

  return (
    <div className="w-full h-fit flex items-center justify-center relative">
      <Spotlight
        className=""
        fill="grey"
      />

      <div className="mt-32 flex items-center flex-col">
        <p className="text-white">A 2026 aspirant currently looking for jobs or internship</p>
        <TypewriterEffectSmooth words={words} />

        <div className="inline-flex space-x-4 mt-4">
          <DownloadResume />
          <Link href={"/projects"}><Button className="home-button" variant={"custom"}>Projects <ShoppingBag /></Button></Link>
        </div>

        <div className="mt-32 relative w-full">
          <h2 className="text-white text-2xl text-center font-semibold tracking-wider underline underline-offset-8">
            Some recent achievements
          </h2>
          <div className="h-full w-full relative p-10">
            <div className="h-fit w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 relative p-2">
              {achievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
            <ShootingStars
              minDelay={1000}
              maxDelay={2000}
              minSpeed={5}
              maxSpeed={10}
              starColor="#325EAA"
              trailColor="#E83D99"
              starHeight={2}
              starWidth={20}
            />
            <StarsBackground starDensity={0.0002} allStarsTwinkle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;