import style from "./LoginGoogle.module.scss";
import Image from "next/image";
import Link from "next/link";
export default function LoginGoogle() {
    return (
        <div className={style.container}>
            <div className={style.googleCardContainer}>
                <div className={style.headerPart}>
                    <div className={style.headerPartImgContainer}>
                        <Image
                            src={"./googleImgs/miniGoogleIcon.svg"}
                            alt="DeepFlix Logo"
                            fill={true}
                            quality={100}
                            className={style.img}
                        />
                    </div>
                    <p>Sign in with Google</p>
                </div>
                <div className={style.mainPart}>
                    <div className={style.headMainPart}>
                        <div className={style.headMainPartImgContainer}>
                            <Image
                                src={"./googleImgs/svgGoogleFormLogo.svg"}
                                alt="Google Logo"
                                fill={true}
                                quality={50}
                                loading="lazy"
                                className={style.img}
                            />
                        </div>
                        <p>Choose an account</p>
                        <p>
                            To continue to <span>Deepflix</span>
                        </p>
                    </div>
                    <div className={style.bodyMainPart}>
                        <Link
                            href={{
                                pathname: "/welcome",
                                query: { type: "0" },
                            }}
                        >
                            <div className={style.displayUser}>
                                <div
                                    className={
                                        style.displayUserPartImgContainer
                                    }
                                >
                                    <Image
                                        src={"/googleImgs/userPics.jpg"}
                                        alt="User Logo"
                                        fill={true}
                                        quality={50}
                                        loading="lazy"
                                        className={style.img}
                                    />
                                </div>
                                <div
                                    className={
                                        style.displayUserPartTextContainer
                                    }
                                >
                                    <p className={style.userName}>
                                        Théo Kralic
                                    </p>
                                    <p className={style.userMail}>
                                        theok@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link
                            href={{
                                pathname: "/welcome",
                                query: { type: "0" },
                            }}
                        >
                            <div className={style.displayUser}>
                                <div
                                    className={
                                        style.displayUserPartImgContainer
                                    }
                                >
                                    <Image
                                        src={"/googleImgs/userIcon.svg"}
                                        alt="User Logo"
                                        fill={true}
                                        quality={100}
                                        className={style.img}
                                    />
                                </div>
                                <div
                                    className={
                                        style.displayUserPartTextContainer
                                    }
                                >
                                    <p className={style.userName}>
                                        Use another Info
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={style.footerMainPart}>
                        <p>
                            To continue , Google will share your name, email
                            address, language preference and profile picture
                            with Deepflix. Before using this app, you can review
                            Deepflix’s
                            <span> privacy policy and Terms of Service</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.underCardInfo}>
                <div>
                    <p>English (United Kingdom)</p>
                </div>
                <div>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    );
}
