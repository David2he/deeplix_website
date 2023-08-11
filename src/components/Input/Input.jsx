import style from "./Input.module.scss";

export const Input = ({placeHolder}) => {
  return (
    <>
      <input placeholder={placeHolder} className={style.input}></input>
    </>
  );
};
