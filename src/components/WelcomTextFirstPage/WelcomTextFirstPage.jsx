import style from "./WelcomTextFirstPage.module.scss";
import Image from "next/image";
import Link from "next/link";
export const WelcomTextFirstPage = ({ type }) => {
    return (
        <div className={style.WelcomTextContainer}>
            <div className={style.titleImageContainer}>
                <h1>
                    {type === "0"
                        ? "Hello Théo, welcome to"
                        : "Play in your own movie"}
                </h1>
                {type === "0" ? (
                    <div>
                        <Image
                            src={"./DeepflixText.svg"}
                            alt="Deeplix Logo"
                            fill={true}
                            quality={100}
                        />
                    </div>
                ) : null}
            </div>
            <p>
                {type === "0"
                    ? "To generate the movie of your dream, click here"
                    : "The movie you’ve always wanted to play in, generated in seconds."}
            </p>
            <Link href={type === "0" ? "/generatMovie" : "/deepOnePage"}>
                <div className={style.startButton}>
                    <p>{type === "0" ? "START" : "CONNECT DEEP-O1"}</p>
                </div>
            </Link>
        </div>
    );
};
