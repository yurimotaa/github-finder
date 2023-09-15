import { useNavigate } from "react-router-dom";
import css from "./ButtonBack.module.css";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className={css.back_btn} onClick={() => navigate(-1)}>
        Voltar
      </button>
    </>
  );
};

export default ButtonBack;
