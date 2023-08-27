import { FormGM } from "@/components/FormGM/FormGM";
import style from "./generatedMovie.module.scss";
export default function GeneratedMovie() {
  return (
    <div className={style.container}>
      <FormGM />
      <div className={style.textFooterContainer}>
        <p>
          I understand that all movie data generation will be used in accordance with Deepflix’s 
          <span> Privacy Policy</span>
        </p>
        <p>DEEPFLIX © AI 2023, All rights reserved</p>
      </div>
    </div>
  );
}
