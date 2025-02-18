import CardProfile from "./CardProfile";
import { Chart } from "./chart";
import { getCodeForcesStats, getLeetCodeStats, getCodeChefStats } from "@/services/competitive-programming";
import AnimatedContainer from "@/components/about/animated-container";

export const revalidate = 3600;

export default async function CompetitiveProgramming() {
  const [cfStats, leetcodeProblems, codechefStats] = await Promise.all([
    getCodeForcesStats(),
    getLeetCodeStats(),
    getCodeChefStats(),
  ]);

  const stats = {
    codeforces: {
      problemSolved: cfStats.problemsSolved,
      maxRating: cfStats.user?.maxRating || 0,
      currentRating: cfStats.user?.rating || 0,
    },
    leetcode: {
      problemSolved: leetcodeProblems,
      maxRating: 2040,
      currentRating: 2040,
    },
    codechef: {
      problemSolved: codechefStats.problemsSolved || 68,
      maxRating: codechefStats.highestRating || 0,
      currentRating: codechefStats.currentRating || 0,
    },
    geeksforgeeks: {
      problemSolved: 86,
      maxRating: 0,
      currentRating: 0,
    },
  };

  return (
    <div className="min-h-screen w-full p-2 sm:p-6 md:p-10 text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <AnimatedContainer>
          <h1 className="text-3xl font-bold mb-8 text-center">Competitive Programming Stats</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardProfile
              cardTitleImagePath="/Logos/codeforces.png"
              imageHeight={20}
              imageWidth={200}
              {...stats.codeforces}
            />
            <CardProfile
              cardTitleImagePath="/Logos/leetcode.svg"
              imageHeight={20}
              imageWidth={200}
              {...stats.leetcode}
            />
            <CardProfile
              cardTitleImagePath="/Logos/codechef.png"
              imageHeight={20}
              imageWidth={200}
              {...stats.codechef}
            />
          </div>
        </AnimatedContainer>

        <AnimatedContainer>
          <div className="flex justify-center items-center">
            <Chart
              cfProblemSolved={stats.codeforces.problemSolved}
              leetcodeProblemSolved={stats.leetcode.problemSolved}
              codeChefProblemSolved={stats.codechef.problemSolved}
              geekForGeeksProblemSolved={stats.geeksforgeeks.problemSolved}
            />
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}
