"use client";
import style from "./BuyDeepOneSecondPart.module.scss";
import { GeneratedText } from "../GeneratedText/GeneratedText";
import { useState, useEffect } from "react";
export const BuyDeepOneSecondPart = ({ step, setStep }) => {
  const [canAppear, setCanAppear] = useState(false);
  const [canGenerateText, setCanGenerateText] = useState(false);


  const navigateThrougStep = (direction) => {
    console.log(step + "was a previous step");
    if (direction === "back") {
      setStep(step - 1);
    } else {
      setStep(step + 1);
    }
  };





  useEffect(() => {

    
    if (step === 4 && canAppear === false) {
      const timerAppearFirstBlock = setTimeout(() => {
        setCanAppear(true);
      }, 1000);
      return () => clearTimeout(timerAppearFirstBlock);
    }


  }, [canAppear, canGenerateText, step]);

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
            <GeneratedText />
          </div>
        )}
      </div>
    </div>
  );
};
