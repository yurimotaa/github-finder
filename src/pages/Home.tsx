import { useState } from "react";
import Search from "../components/Search";
import { TUser } from "../types/userTypes";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setUser(null);
    setError(false);

    const response = await fetch(`https://api.github.com/users/${userName}`);

    setIsLoading(false);

    if (response.status === 404) {
      setError(true);
      return;
    }

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
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
