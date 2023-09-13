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
