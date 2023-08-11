import style from "./FormLogin.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../Input/Input";
export const FormLogin = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.logoContainer}>
        <Image src="/DeepflixText.svg" alt="logo" fill={true} />
      </div>
      <p className={style.textGeneratedMovie}>Generate a movie now?</p>
      <Input placeHolder="Enter your e-mail address" />
      <Link href={"/welcome"}>
        <div className={style.startButton}>
          <p>START</p>
        </div>
      </Link>
      <div className={style.signContainer}>
        <span></span>
        <p>or Sign in with</p>
        <span></span>
      </div>
      <div className={style.signInImageContainer}>
        <Image src="/signIn.png" alt="logo" fill={true} />
      </div>
      <p className={style.lillTextInfo}>
        I understand that my information will be used in accordance with Deepflix’s Privacy Policy
      </p>
    </div>
  );
};
