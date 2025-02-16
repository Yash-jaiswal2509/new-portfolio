import CardProfile from "./CardProfile";
import { Chart } from "./chart";
import { getCodeForcesStats, getLeetCodeStats, getCodeChefStats } from "@/services/competitive-programming";

export default async function CompetitiveProgramming() {
  // Fetch all data in parallel
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
      problemSolved: 68,
      maxRating: codechefStats.highestRating,
      currentRating: codechefStats.currentRating,
    },
    geeksforgeeks: {
      problemSolved: 84,
    },
  };

  const totalProblems = Object.values(stats).reduce(
    (sum, platform) => sum + (platform.problemSolved || 0),
    0
  );

  return (
    <div className="text-white p-5 gap-4 relative">
      <div className="grid grid-cols-3 gap-4">
        <CardProfile
          cardTitleImagePath="/Logos/cf.png"
          imageHeight={100}
          imageWidth={200}
          {...stats.codeforces}
        />
        <CardProfile
          cardTitleImagePath="/Logos/leetcode.svg"
          imageHeight={50}
          imageWidth={220}
          {...stats.leetcode}
        />
        <CardProfile
          cardTitleImagePath="/Logos/codechef.png"
          imageHeight={20}
          imageWidth={200}
          {...stats.codechef}
        />
      </div>
      <div className="w-full h-full">
        <div className="flex justify-center items-center">
          <Chart
            cfProblemSolved={stats.codeforces.problemSolved}
            leetcodeProblemSolved={stats.leetcode.problemSolved}
            codeChefProblemSolved={stats.codechef.problemSolved}
            geekForGeeksProblemSolved={stats.geeksforgeeks.problemSolved}
          />
        </div>
      </div>
    </div>
  );
}
