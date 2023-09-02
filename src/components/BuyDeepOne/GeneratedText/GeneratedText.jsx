import { useEffect, useState, useRef } from "react";
import style from "../BuyDeepOneSecondPart/BuyDeepOneSecondPart.module.scss";

export const GeneratedText = ({ content, index, setFinisTextGeneration }) => {
  const [canGenerate, setCanGenerate] = useState(false);
  const [generatedNumber, setGeneratedNumber] = useState("");
  const [deffinitlyStop, setDeffinitlyStop] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval;
    let canGenerateTimer;
    let stopGeneratingTimer;
    let fakeLaggingTimer;

    const generateRandomNumber = (isFakeLagging) => {
      setGeneratedNumber(
        (Math.random() * 2).toFixed(Math.random() * 8) + (isFakeLagging ? "..." : "")
      );
    };

    const timerFluctuation = () => {
      let random = Math.random();
      if (random < 0.1) {
        fakeLaggingTimer = true;
        return Math.floor(Math.random() * 200) + 40;
      } else {
        fakeLaggingTimer = false;
        return 10;
      }
    };

    const resetInterval = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        generateRandomNumber(fakeLaggingTimer);
        resetInterval();
      }, timerFluctuation());
    };

    if (!deffinitlyStop) {
      canGenerateTimer = setTimeout(() => {
        setCanGenerate(true);
        resetInterval();
      }, 1800 + index * Math.random() * 40);
    }
    stopGeneratingTimer = setTimeout(() => {
      setDeffinitlyStop(true);
      setCanGenerate(false);
      generateRandomNumber(false);
      clearInterval(interval);
      setFinisTextGeneration(true);
    }, 6000);

    return () => {
      clearTimeout(canGenerateTimer);
      clearTimeout(stopGeneratingTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <li>
        <p>{content} :</p>
        <p className={style.numberRatio}>{generatedNumber}</p>
      </li>
    </>
  );
};
