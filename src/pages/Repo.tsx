import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TRepo } from "../types/allTypes";
import ButtonBack from "../components/ButtonBack";
import Loader from "../components/Loader";
import RepoComponent from "../components/RepoComponent";
import css from "./Repo.module.css";

const Repo = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<TRepo[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadRepos = async (username: string) => {
    setIsLoading(true);

    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    const data: TRepo[] | [] = await response.json();

    setIsLoading(false);

    let orderedRepos = data.sort(
      (a: TRepo, b: TRepo) => b.stargazers_count - a.stargazers_count
    );

    console.log(orderedRepos);

    setRepos(orderedRepos);
  };

  useEffect(() => {
    if (username) {
      loadRepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className={css.repos}>
      <ButtonBack />
      <h2>Repositórios de {username}</h2>
      {repos && repos.length === 0 && <p>Não existem repositórios</p>}
      {repos && repos.length > 0 && (
        <div className={css.repos_container}>
          {repos.map((repo) => (
            <RepoComponent key={crypto.randomUUID()} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repo;
