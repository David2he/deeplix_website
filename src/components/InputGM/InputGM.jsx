import "@/styles/formHandlerGM.scss";

export const InputGM = ({ placeHolder, name, label }) => {
  return (
    <div className="container">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} placeholder={placeHolder}></input>
    </div>
  );
};
