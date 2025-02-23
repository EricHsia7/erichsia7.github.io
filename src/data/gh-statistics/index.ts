interface Stats {
  commit: number;
  pull: number;
  issues: number;
  update_time: string;
}

export async function getStats(): Promise<Stats> {
  const now = new Date().getTime();
  const url = `https://erichsia7.github.io/gh-statistics/stats.json?t=${now}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export function getContributionGraph(scale: 15 | 12 | 6 | 3): string {
  return `https://erichsia7.github.io/gh-statistics/images/contribution_graph@${scale}x.png`;
}
