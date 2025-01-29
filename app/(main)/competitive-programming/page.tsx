import { count_submissions } from "@/lib/utils";
import CardProfile from "./CardProfile";
import { LeetCode } from "leetcode-query";
import { Chart } from "./chart";

const fetchAPI = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      next: { revalidate: 1000 * 24 * 60 * 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return null;
  }
};

const getCodeForcesData = async () => {
  const [data1, data2] = await Promise.all([
    fetchAPI("https://codeforces.com/api/user.info?handles=yashjaiswal2509"),
    fetchAPI("https://codeforces.com/api/user.status?handle=yashjaiswal2509"),
  ]);

  if (!data1 || !data2) return null;

  const problemSolved = count_submissions(data2.result);
  return { data1: data1.result[0], problemSolved };
};

const getLeetCodeData = async () => {
  const leetcode = new LeetCode();
  let leetcodeProblemSolved = 0;
  try {
    const user = await leetcode.user("yashjaiswal2509");
    leetcodeProblemSolved = user.matchedUser?.submitStats.acSubmissionNum[0].count || 0;
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
  }

  return leetcodeProblemSolved;
}

const getCodeChefData = async () => {
  const data = await fetchAPI("https://codechef-api.vercel.app/handle/yashjaiswal25");
  if (!data) return null;
  return data;
}

const CompetitiveProgramming = async () => {

  const cfData = await getCodeForcesData();
  const codeforcesData = cfData?.data1 || {};
  const cfProblemSolved = cfData?.problemSolved || 0;

  let leetcodeProblemSolved = await getLeetCodeData();

  const codechefData = await getCodeChefData();
  const codeChefProblemSolved = 65;
  const geekForGeeksProblemSolved = 84;

  const totalProblemSolved = cfProblemSolved + leetcodeProblemSolved + codeChefProblemSolved + geekForGeeksProblemSolved;

  return (
    <div className="text-white p-5 gap-4 relative">
      <div className="grid grid-cols-3 gap-4">
        {/* Codeforces Card */}
        <CardProfile
          cardTitleImagePath="/Logos/cf.png"
          imageHeight={100}
          imageWidth={200}
          problemSolved={cfProblemSolved}
          maxRating={codeforcesData?.maxRating || 0}
          currentRating={codeforcesData?.rating || 0}
        />

        {/* LeetCode Card */}
        <CardProfile
          cardTitleImagePath="/Logos/leetcode.svg"
          imageHeight={50}
          imageWidth={220}
          problemSolved={leetcodeProblemSolved}
          maxRating={2040}
          currentRating={2040}
        />

        {/* Codechef */}
        <CardProfile
          cardTitleImagePath="/Logos/codechef.png"
          imageHeight={20}
          imageWidth={200}
          problemSolved={codeChefProblemSolved}
          maxRating={codechefData.highestRating || 0}
          currentRating={codechefData.currentRating || 0}
        />
      </div>
      <div className="w-full h-full">
        <div className="flex justify-center items-center">
          <Chart
            cfProblemSolved={cfProblemSolved}
            leetcodeProblemSolved={leetcodeProblemSolved}
            codeChefProblemSolved={codeChefProblemSolved}
            geekForGeeksProblemSolved={geekForGeeksProblemSolved}
          />
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
