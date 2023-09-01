"use client";
import style from "./BuyDeepOneFirstPart.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
export const BuyDeepOneFirstPart = ({ step, setStep }) => {
  const [fadeOutLoading, setFadeOutLoading] = useState(false);
  const navigateThrougStep = (direction) => {
    if (direction === "back") {
      setStep(step - 1);
    } else {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOutLoading(true);
    }, 4000);
    const appearPictureAfterFakeLoadingTimer = setTimeout(() => {
      setStep(step + 1);
    }, 100);
    return () => clearTimeout(timer, appearPictureAfterFakeLoadingTimer);
  }, []);
  return (
    <div className={style.container}>
      {step === 1 ? <p>Detecting device</p> : <p>Camera connected</p>}

      <div className={style.cameraImgContainer}>
        <div className={` ${style.imgContainerLoader} ${fadeOutLoading ? style.fadeOut : null}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${step > 1 ? style.easyAppear : null} ${style.imgContainerLoaded}`}>
          <Image src="/buyDeepOne/DEEP-01.png" alt="logo" width={115} height={287} />
        </div>
      </div>
      <div className={style.allButtonContainer}>
        <div
          className={`${step === 2 ? style.appear : style.disapear} ${
            style.singleButtonContainer
          } `}
          onClick={() => navigateThrougStep("forwards")}
        >
          <div className={style.redButton}>
            <p>START SCANNING</p>
          </div>
        </div>
        <div className={`${style.doubleButtonContainer} ${step === 3 ? style.appear : null}`}>
          <div className={style.redButton} onClick={() => navigateThrougStep("forwards")}>
            <p>ALLOW</p>
          </div>
          <div className={style.whiteButton} onClick={() => navigateThrougStep("back")}>
            <p>DON'T ALLOW</p>
          </div>
        </div>
      </div>
      {step === 3 ? (
        <div className={`${style.textContainerStep2}  ${step === 3 ? style.appear : null}`}>
          <p>Allow Deepflix to use your camera and microphone</p>
        </div>
      ) : (
        <div className={style.textContainerStep2}></div>
      )}
    </div>
  );
};
