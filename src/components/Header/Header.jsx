import Link from "next/link";
import style from "./Header.module.scss";
import Image from "next/image";

export const Header = ({ imageSource }) => {
    return (
        <div className={style.headerContainer}>
            <Link href={"./welcome"}>
                <p>Menu</p>
            </Link>
            <Image src={imageSource} alt="DeepFlix Logo" width={100} height={100} quality={100} />
            <div className={style.userNameContainer}>
                <div className={style.imgContainer}>
                    <Image src={"./arrowIcon.svg"} fill={true} />
                </div>
                <p>Théo M.</p>
            </div>
        </div>
    );
};
