"use client";
import style from "./BuyDeepOne.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BuyDeepOneFirstPart } from "./BuyDeepOneFirstPart/BuyDeepOneFirstPart";
import { BuyDeepOneSecondPart } from "./BuyDeepOneSecondPart/BuyDeepOneSecondPart";
export const BuyDeepOne = () => {
    const [step, setStep] = useState(1);
    let stepToDisplay = 1;
    switch (step) {
        case 4:
            stepToDisplay = 1;
            break;
        case 5:
            stepToDisplay = 1;
            break;
        case 6:
            stepToDisplay = 2;
            break;
        case 7:
            stepToDisplay = 3;
            break;
        case 8:
            stepToDisplay = 3;
            break;
    }

    const renderFinal = () => {
        return (
            <div className={style.containerFinal}>
                <div className={style.videoWrapper}>
                    <video autoPlay muted className={style.fullscreenVideo}>
                        <source src="/intro.MP4" />
                    </video>
                </div>
            </div>
        );
    };
    useEffect(() => {
        console.log(step);
    }, [step]);
    return (
        <>
            {step === 9 ? (
                renderFinal()
            ) : (
                <div className={`${step >= 4 && style.containerSwapPart} ${style.container}`}>
                    <div className={style.closeCross}>
                        <div className={style.spanContainer}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {step >= 4 && <p className={style.stepInfo}>{stepToDisplay} / 4</p>}
                    <div className={style.logoContainer}>
                        <Image src="/buyDeepOne/buyDeepOneLogo.png" alt="logo" fill={true} />
                    </div>
                    {step <= 3 && <BuyDeepOneFirstPart step={step} setStep={setStep} />}
                    {step >= 4 && <BuyDeepOneSecondPart step={step} setStep={setStep} />}
                    <p className={style.footer}>
                        I understand that my information will be used in accordance with Deepflix’s <span>Privacy Policy</span>
                    </p>
                </div>
            )}
        </>
    );
};
