"use client";
import { useEffect } from "react";
import style from "./Movie.module.scss";
import "@/styles/bodyColorRed.scss";
export default function MovieScreen() {
    useEffect(() => {
        document.body.classList.remove("whiteBorder");
    }, []);
    return (
        <div className={style.container}>
            <div className={style.videoWrapper}>
                <video autoPlay loop className={style.fullscreenVideo}>
                    <source src="/intro.mp4" />
                </video>
            </div>
        </div>
    );
}
