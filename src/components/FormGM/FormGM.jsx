import style from "./FormGM.module.scss";
import { InputGM } from "../InputGM/InputGM";
import { TextAreaGM } from "../TextAreaGM/TextAreaGM";
import { SelectGM } from "../SelectGM/SelectGM";
import Image from "next/image";
import data from "@/utils/data.json";
const { genres, firstRole, secondRole, director, language } = data;
export const FormGM = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.leftPannel}>
        <InputGM placeHolder="Enter movie title" label="Enter movie title" name="titleMovie" />
        <TextAreaGM
          placeHolder="Enter a short resume of your story "
          label="Enter a little story "
          name="lilStory"
        />
      </div>
      <div className={style.rightPannel}>
        <div className={style.rPannelFormContent}>
          <div className={style.rPannelFormContentRight}>
            <SelectGM label="Choose genre" name="genre" data={genres} />
            <p>Choose the actors</p>
            <SelectGM label="1st role" name="firstRole" data={firstRole} />
            <SelectGM label="2nd role" name="secondRole" data={secondRole} />
          </div>
          <div className={style.rPannelFormContentLeft}>
            <InputGM placeHolder="1 h 30" label="setDuration" name="titleMovie" />
            <SelectGM label="Movie director " name="director" data={director} />
            <SelectGM label="Language" name="language" data={language} />
          </div>
        </div>
        <div className={style.startContainer}>
          <div className={style.startButton}>
            <p>Generate your movie </p>
            <div className={style.imgContainer}>
              <Image src="/DeepflixText.svg" alt="logo" fill={true} />
            </div>
          </div>
          <div className={style.advancedFilterContainer}>
            <div className={style.crossImgContainer}>
              <Image src="/cross.svg" alt="cross" fill={true} />
            </div>
            <p>Advanced filters</p>
          </div>
        </div>
      </div>
    </div>
  );
};