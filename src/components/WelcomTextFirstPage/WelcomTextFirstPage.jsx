import style from "./WelcomTextFirstPage.module.scss";
import Image from "next/image";
import Link from "next/link";
export const WelcomTextFirstPage = () => {
  return (
    <div className={style.WelcomTextContainer}>
      <div className={style.titleImageContainer}>
        <h1>Hello Théo, welcome to</h1>
        <div>
          <Image src={"./DeepflixText.svg"} alt="Deeplix Logo" fill={true} quality={100} />
        </div>
      </div>
      <p>To generate the movie of your dream, click here</p>
      <div className={style.startButton}>
        <Link href={"/generatMovie"}>
          <p>START</p>
        </Link>
      </div>
    </div>
  );
};
