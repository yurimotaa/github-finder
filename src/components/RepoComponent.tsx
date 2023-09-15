import { TRepo } from "../types/allTypes";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import css from "./RepoComponent.module.css";

const RepoComponent = ({
  name,
  forks_count,
  html_url,
  language,
  stargazers_count,
}: TRepo) => {
  console.log(stargazers_count);
  return (
    <div className={css.repo}>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div className={css.stats}>
        <div>
          <AiOutlineStar />
          {stargazers_count}
        </div>
        <div>
          <AiOutlineFork />
          {forks_count}
        </div>
      </div>
      <a className={css.repo_btn} href={html_url} target="blank">
        <span>Ver o código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default RepoComponent;
