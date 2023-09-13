import { BsSearch } from "react-icons/bs";
import { TSearch } from "../types/userTypes";
import { useState } from "react";
import css from "./Search.module.css";

const Search = ({ loadUser }: TSearch) => {
  const [userName, setUserName] = useState("");
  return (
    <div className={css.search}>
      <h2>Busque pelo nome do usuário:</h2>
      <p>Melhores repositórios</p>
      <div className={css.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
