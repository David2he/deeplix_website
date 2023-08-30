"use client";
import style from "./BuyDeepOneSecondPart.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
export const BuyDeepOneSecondPart = ({ step, setStep }) => {
  const [canAppear, setCanAppear] = useState(false);

  const navigateThrougStep = (direction) => {
    if (direction === "back") {
      setStep(step - 1);
    } else {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setCanAppear(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [canAppear]);

  return (
    <div className={style.container}>
      <div className={`${canAppear ? style.canAppear : style.stayHidden}`}>
        {step === 4 ? (
          <>
            <p>
              Place yourself in front of the camera and we'll proceed to scan your facial
              expressions.
            </p>
            <div className={style.redButton} onClick={() => navigateThrougStep("forward")}>
              <p>CONTINUE</p>
            </div>
          </>
        ) : (
          <div className={style.textLoaderContainer}>
            <p>Scanning...</p>
            <ul>
              <li>Measurements : </li>
              <li>Expressions : </li>
              <li>Ethnicity : </li>
              <li>InnerBrownRaise : </li>
              <li>LipPress : </li>
              <li>LipPucker : </li>
              <li>Attention : </li>
              <li>Fear : </li>
              <li>Surprise : </li>
              <li>Valences : </li>
              <li>Engagement : </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
