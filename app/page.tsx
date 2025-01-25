import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { DownloadIcon, ShoppingBag } from "lucide-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import DownloadResume from "@/components/home/download-resume";

const Home = () => {
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

        <div className="mt-32">
          <p className="text-white text-xl">Some recent achievements</p>
          {/* Add recent achivements */}
        </div>
      </div>
    </div>
  );
}

export default Home;