export type TUser = {
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
};

export type TSearch = {
  loadUser: (userName: string) => Promise<void>;
};

export type TRepo = {
  name: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
};
