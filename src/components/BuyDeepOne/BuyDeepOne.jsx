"use client";
import style from "./BuyDeepOne.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BuyDeepOneFirstPart } from "./BuyDeepOneFirstPart/BuyDeepOneFirstPart";
import { BuyDeepOneSecondPart } from "./BuyDeepOneSecondPart/BuyDeepOneSecondPart";
export const BuyDeepOne = () => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log(step);
    }, [step]);
    return (
        <div
            className={`${step >= 4 && style.containerSwapPart} ${
                style.container
            }`}
        >
            <div className={style.closeCross}>
                <div className={style.spanContainer}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {step >= 4 && <p className={style.stepInfo}>{step - 3} / 4</p>}
            <div className={style.logoContainer}>
                <Image
                    src="/buyDeepOne/buyDeepOneLogo.png"
                    alt="logo"
                    fill={true}
                />
            </div>
            {step <= 3 && <BuyDeepOneFirstPart step={step} setStep={setStep} />}
            {step >= 4 && (
                <BuyDeepOneSecondPart step={step} setStep={setStep} />
            )}
            <p className={style.footer}>
                I understand that my information will be used in accordance with
                Deepflix’s <span>Privacy Policy</span>
            </p>
        </div>
    );
};
