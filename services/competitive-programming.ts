import { LeetCode } from 'leetcode-query';
import { count_submissions } from '@/lib/utils';
import { unstable_cache } from 'next/cache';

async function fetchWithCache(url: string) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    return null;
  }
}

export const getCodeForcesStats = unstable_cache(
  async () => {
    try {
      const [userInfo, submissions] = await Promise.all([
        fetchWithCache(
          'https://codeforces.com/api/user.info?handles=yashjaiswal2509',
        ),
        fetchWithCache(
          'https://codeforces.com/api/user.status?handle=yashjaiswal2509',
        ),
      ]);

      if (!userInfo?.result?.[0] || !submissions?.result) {
        throw new Error('Invalid Codeforces data');
      }

      return {
        user: userInfo.result[0],
        problemsSolved: count_submissions(submissions.result),
      };
    } catch (error) {
      console.error('Codeforces API error:', error);
      return { user: {}, problemsSolved: 0 };
    }
  },
  ['codeforces-stats'],
  {
    revalidate: 3600, // 1 hour
    tags: ['codeforces'],
  },
);

export async function getLeetCodeStats() {
  try {
    const leetcode = new LeetCode();
    const user = await leetcode.user('yashjaiswal2509');
    return user.matchedUser?.submitStats.acSubmissionNum[0].count || 0;
  } catch (error) {
    console.error('LeetCode API error:', error);
    return 0;
  }
}

export async function getCodeChefStats() {
  try {
    const data = await fetchWithCache(
      'https://codechef-api.vercel.app/handle/yashjaiswal25',
    );
    return data || { currentRating: 0, highestRating: 0 };
  } catch (error) {
    console.error('CodeChef API error:', error);
    return { currentRating: 0, highestRating: 0 };
  }
}
