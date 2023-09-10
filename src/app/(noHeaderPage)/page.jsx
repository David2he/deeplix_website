"use client";
import { useState } from "react";
import style from "./Login.module.scss";
import { FormLogin } from "@/components/FormLogin/FormLogin";

export default function Home() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.videoIntroContainer}>
                <video autoPlay className={style.fullscreenVideo} onEnded={() => setVideoEnded(true)}>
                    <source src="./DEEPFLIX_INTROWEBSITE.mp4" />
                </video>
            </div>
            {videoEnded && (
                <div className={style.LoginPageContainer}>
                    <FormLogin />
                </div>
            )}
        </div>
    );
}
