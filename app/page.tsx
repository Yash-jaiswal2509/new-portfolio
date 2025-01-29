import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { ShoppingBag } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DownloadResume from "@/components/home/download-resume";
import { Achievement } from '@prisma/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FrontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

const Home = async () => {

  const fetchAchievements = async () => {
    try {
      const respone = await fetch(`${FrontendUrl}/api/achievement`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
        next: {
          revalidate: 1000 * 24 * 60 * 60,
        },
      });

      const data = await respone.json();
      console.log(data);
      return data.data?.achievements;
    } catch (error) {
      return [];
    }
  }

  const achievements: Achievement[] = await fetchAchievements();

  const words = [
    { text: "Hi, I'm Yash Jaiswal, a aspiring", className: "text-5xl text-white" },
    { text: "Software Engineer.", className: "text-5xl text-blue-500" },
  ];

  return (
    <div className="w-full flex items-center justify-center relative">
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
          <p className="text-white text-2xl text-center font-semibold tracking-wider underline underline-offset-8">Some recent achievements</p>
          <div className="h-full w-full relative p-10">
            <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 relative p-2">
              {achievements.map((achievement: Achievement) => {
                return (
                  <Card key={achievement.id} className="bg-transparent text-white backdrop-blur shadow-custom-light shadow-white">
                    <CardHeader>
                      <CardTitle className="text-center">{achievement.title}</CardTitle>
                      <CardDescription className="text-center">{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={achievement.achievementImageUrl}
                        alt={achievement.title}
                        width={"80"}
                        height={"80"}
                        className="w-full h-full rounded-md border border-white"
                      />
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;