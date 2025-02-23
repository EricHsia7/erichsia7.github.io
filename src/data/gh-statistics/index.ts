export interface Stats {
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

export interface RepositoryTag {
  name: string;
  zipball_url: string;
  tarball_url: string;
  commit: {
    sha: string;
    url: string;
  };
  node_id: string;
}

export interface RepositoryRecentEvent {
  title: string;
  url: string;
  time: string;
}

export interface RepositoryLanguage {
  lang: string;
  value: number;
  color: string;
}

export interface Repository {
  full_name: string;
  tags: Array<RepositoryTag>;
  description: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  recent_events: Array<RepositoryRecentEvent>;
  open_graph_image: string;
  languages: Array<RepositoryLanguage>;
}

export async function getRepositories(limit: number = 3): Promise<Array<Repository>> {
  const now = new Date().getTime();
  const url = `https://erichsia7.github.io/gh-statistics/repositories.json?t=${now}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.repos.slice(0, limit);
}
