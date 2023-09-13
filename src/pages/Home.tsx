import { useState } from "react";
import Search from "../components/Search";
import { TUser } from "../types/userTypes";

const Home = () => {
  const [user, setUser] = useState<TUser | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: TUser = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
    </div>
  );
};

export default Home;
