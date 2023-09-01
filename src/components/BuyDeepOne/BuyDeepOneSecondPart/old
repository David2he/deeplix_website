"use client";
import style from "./BuyDeepOneSecondPart.module.scss";
import { useState, useEffect } from "react";
export const BuyDeepOneSecondPart = ({ step, setStep }) => {
  const [canAppear, setCanAppear] = useState(false);
  const [canGenerateText, setCanGenerateText] = useState(false);
  const [randomNumberContent, setRandomNumberContent] = useState([
    ["InnerBrownRaise", ""],
    ["LipPress", ""],
    ["LipPucker", ""],
    ["Attention", ""],
    ["Fear", ""],
    ["Surprise", ""],
    ["Valences", ""],
    ["Engagement", ""],
  ]);
  const generateRandomNumbers = () => {
    return randomNumberContent.map((content) => {
      return [content[0], Math.random().toFixed(8).toString()];
    });
  };

  const navigateThrougStep = (direction) => {
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

    if (canGenerateText) {
      
      const generateIntervalDuration = () => {
        let random = Math.random();
        console.log(random);
        if (random < 0.2) {
          return Math.floor(Math.random() * 600) + 50;
        }
        return Math.floor(Math.random() * 80) + 30;
      };
      const generateTextInterval = setInterval(() => {
        setRandomNumberContent(generateRandomNumbers());
      },15);
      const timeDuringGeneratedTextInterval = setTimeout(() => {
        clearInterval(generateTextInterval);
        navigateThrougStep("forward");
      }, 10000);
      return () => clearTimeout(timeDuringGeneratedTextInterval);
    }

    if (step === 4 && canAppear) {
      const timerAppearGeneratingText = setTimeout(() => {
        console.log("in");
        setCanGenerateText(true);
      }, 4500);
      return () => clearTimeout(timerAppearGeneratingText);
    }
  }, [canAppear, canGenerateText]);

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
              <li>Measurements</li>
              <li>Expressions</li>
              <li>Ethnicity : European</li>
              {randomNumberContent.map((content, index) => {
                return (
                  <li key={index}>
                    {content[0]} : {content[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
