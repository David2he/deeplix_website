

import "@/styles/formHandlerGM.scss";

export const TextAreaGM = ({placeHolder, name, label}) => {
 

    
  return (
    <div className="container">
      <label htmlFor={name}>{label}</label>
      <textarea  name={name} id={name} placeholder={placeHolder} rows="9" cols="70"></textarea>
    </div>
  );
};
