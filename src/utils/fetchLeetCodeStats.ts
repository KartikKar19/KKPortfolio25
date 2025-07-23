const fetchLeetCodeStats = async (username: string) => {
  const response = await fetch(`https://leetcode-stats-api.vercel.app/${username}`);
  if (!response.ok) throw new Error("Failed to fetch LeetCode stats");

  const data = await response.json();

  return {
    totalSolved: data.totalSolved,
    easy: data.easySolved,
    medium: data.mediumSolved,
    hard: data.hardSolved,
    ranking: data.ranking,
    streak: data.contributionPoints || 0, // no streak field available
  };
};

export default fetchLeetCodeStats;
