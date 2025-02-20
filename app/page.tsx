import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { ShoppingBag } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DownloadResume from "@/components/home/download-resume";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { getAchievements } from "@/actions/get-achievements";
import AchievementCard from "@/components/achievement-card";

const Home = async () => {
  const { achievements = [] } = await getAchievements();

  const sortedAchievements = [...achievements].sort((a, b) =>
    new Date(b.achievedAt).getTime() - new Date(a.achievedAt).getTime()
  );

  const words = [
    { text: "Hi, I'm Yash Jaiswal, a aspiring", className: "text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white" },
    { text: "Software Engineer.", className: "text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-500" },
  ];

  return (
    <div className="w-full h-fit flex items-center justify-center relative">
      <Spotlight
        className=""
        fill="grey"
      />

      <div className="mt-16 md:mt-32 flex items-center flex-col">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">A 2026 aspirant currently looking for jobs or internship</p>
        <TypewriterEffectSmooth words={words} />

        <div className="inline-flex space-x-4 mt-4">
          <DownloadResume />
          <Link href={"/projects"}>
            <Button className="home-button" variant={"custom"}>Projects <ShoppingBag className="size-4 md:size-5 lg:size-6 xl:size-7" /></Button>
          </Link>
        </div>

        <div className="mt-10 sm:mt-32 w-full">
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
          <h2 className="text-white text-xl sm:text-2xl mb-5 text-center font-semibold tracking-wider underline underline-offset-8">
            Some recent achievements
          </h2>
          <div className="h-full w-full relative p-2 sm:p-10">
            <div className="h-fit w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 relative">
              {sortedAchievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;