"use client";
import { useState, useEffect } from "react";
import { TextLoading } from "@/components/TextLoading/TextLoading";
import style from "./LoadingProject.module.scss";
import Link from "next/link";
import "@/styles/bodyColorRed.scss";
import Image from "next/image";

export default function LoadingProject() {
    const [eraseLoading, setEraseLoading] = useState(false);
    const endLoading = () => {
        setTimeout(() => {
            setEraseLoading(true);
        }, 2000);
    };
    useEffect(() => {
        if (eraseLoading) {
            document.body.classList.remove("redBorder");
            document.body.classList.add("whiteBorder");
        } else {
            document.body.classList.add("redBorder");
            document.body.classList.remove("whiteBorder");
        }
    }, [eraseLoading]);
    return (
        <div className={style.container}>
            <div
                className={`${style.loadingContainer} ${
                    eraseLoading ? style.eraseLoadingContainer : ""
                }`}
            >
                <TextLoading endLoading={endLoading} />
            </div>
            <div
                className={`${style.moviePreviewContainer} ${
                    eraseLoading && style.displayMovieContainer
                }`}
            >
                <div className={style.textAfterLoadingContainer}>
                    <p className={eraseLoading ? style.animElement : ""}>
                        Your
                    </p>
                    <div
                        className={`${style.imgContainer} ${
                            eraseLoading ? style.animElement : ""
                        }`}
                    >
                        <Image
                            src={"/DeepflixText.svg"}
                            alt="User Logo"
                            fill={true}
                            quality={100}
                            className={style.img}
                        />
                    </div>

                    <p className={eraseLoading ? style.animElement : ""}>
                        movie is ready to watch !
                    </p>
                </div>

                <Link href={"./MovieScreen"}>
                    <div className={style.startButton}>
                        <p>PLAY</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
