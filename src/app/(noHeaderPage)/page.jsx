"use client";
import { useState } from "react";
import style from "./Login.module.scss";
import { FormLogin } from "@/components/FormLogin/FormLogin";
import "@/styles/bodyColorBlack.scss";

export default function Home() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <div className={style.container}>
            {videoEnded ? (
                <div
                    className={`${style.LoginPageContainer} ${
                        videoEnded && style.canAppear
                    }`}
                >
                    <FormLogin />
                </div>
            ) : (
                <div className={style.videoIntroContainer}>
                    <video
                        className={style.fullscreenVideo}
                        onEnded={() => setVideoEnded(true)}
                        muted
                        autoPlay
                    >
                        <source src="/INTRO_WEBSITE_V2.mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}
