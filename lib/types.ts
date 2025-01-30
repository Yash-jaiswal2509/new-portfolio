export type NavbarItemsProps = {
  name: string;
  href: string;
};

// @typescript-eslint/no-explicit-any
export type SocialMediaProps = {
  name: string;
  href: string;
  icon: any;
};

export type CodeforcesDataProps = {
  contribution: number;
  lastOnlineTimeSeconds: number;
  rating: number;
  friendOfCount: number;
  titlePhoto: string;
  rank: string;
  handle: string;
  maxRating: number;
  avatar: string;
  registrationTimeSeconds: number;
  maxRank: string;
};

// @typescript-eslint/no-explicit-any
export type Submission = {
  id: number;
  contestId: number;
  creationTimeSeconds: number;
  relativeTimeSeconds: number;
  problem: {
    contestId: number;
    index: string;
    [key: string]: any;
  };
  author: { [key: string]: any };
  programmingLanguage: string;
  verdict: string;
  testset: string;
  passedTestCount: number;
  timeConsumedMillis: number;
  memoryConsumedBytes: number;
};

