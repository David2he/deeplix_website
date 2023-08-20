"use client";
import { useState, useEffect, useRef } from "react";
import style from "./TextLoading.module.scss";
import data from "@/utils/textGeneratedData.json";
import { PercentageLoading } from "../PercentageLoading/PercentageLoading";
import Image from "next/image";
export const TextLoading = ({endLoading}) => {
  const { action, subject, tools, parameters } = data;
  const timeoutIdRef = useRef(null);
  const [generatedText, setGeneratedText] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);
  const [removeTitle, setRemoveTitle] = useState(false);

  const handleLoadingComplete = () => {
    console.log("Chargement terminé ! VS");
    setTimeout(() => {
      setIsLoaded(false);
      endLoading();
    }, 400);
    setTimeout(() => {
      setRemoveTitle(true);
    }, 200);
  };

  useEffect(() => {
    const generateRandomText = () => {
      const randomAction = action[Math.floor(Math.random() * action.length)];
      const randomAction1 = action[Math.floor(Math.random() * action.length)];
      const randomAction2 = action[Math.floor(Math.random() * action.length)];
      const randomSubject = subject[Math.floor(Math.random() * subject.length)];
      const randomSubject1 = subject[Math.floor(Math.random() * subject.length)];
      const randomSubject2 = subject[Math.floor(Math.random() * subject.length)];
      const randomTools = tools[Math.floor(Math.random() * tools.length)];
      const randomTools1 = tools[Math.floor(Math.random() * tools.length)];
      const randomParameters = parameters[Math.floor(Math.random() * parameters.length)];
      const randomParameters1 = parameters[Math.floor(Math.random() * parameters.length)];

      return `${randomAction}/${randomSubject}/${randomTools}/${randomParameters}/${randomAction} _ ${randomSubject2}/${randomParameters1} ..${randomAction2}/${randomParameters}/${randomAction1}/${randomSubject1}/${randomTools1} &//:: ${randomAction2} : ${randomSubject2}`;
    };

    const generateIntervalDuration = () => {
      let random = Math.random();
      if (random < 0.2) {
        return Math.floor(Math.random() * 600) + 50;
      }
      return Math.floor(Math.random() * 80) + 30;
    };

    const updateText = () => {
      setGeneratedText(generateRandomText());
      timeoutIdRef.current = setTimeout(updateText, generateIntervalDuration());
    };

    if (isLoaded) {
      timeoutIdRef.current = setTimeout(updateText, generateIntervalDuration());
    }

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current); // Utilisez timeoutIdRef.current pour annuler le timeout
      }
    };
  }, [action, subject, tools, parameters, isLoaded]);

  return (
    <div className={style.container}>
      <div className={`${style.imgContainer} ${isLoaded ? "" : style.finisLoaded}`}>
        <Image src={"./Logo_00.svg"} fill={true}></Image>
      </div>
      <div className={`${style.loadingPercentageContainer} ${isLoaded ? "" : style.finisLoaded}`}>
        <PercentageLoading onLoadingComplete={handleLoadingComplete} />
      </div>
  
      <div className={`${style.loadingTitleContainer} ${isLoaded ? "" : style.finisLoaded}`}>
        <div className={`${style.inGenerationTitle} ${!removeTitle ? "" : style.finisLoaded}`}>
          <p className={style.titleText}>Generating Movie</p>
          <div className={style.spanContainer}>
            <span className={isLoaded ? style.loadedSPan : style.finisLoadedSpan}></span>
            <span className={isLoaded ? style.loadedSPan : style.finisLoadedSpan}></span>
            <span className={isLoaded ? style.loadedSPan : style.finisLoadedSpan}></span>
          </div>
        </div>

        <div
          className={`${style.filmGenerationDoneTitle} ${
            removeTitle ? style.appearDoneTitle : style.hiddenDoneTitle
          }`}
        >
          <p className={style.titleText}>Movie generation is done</p>{" "}
        </div>
      </div>

      <div>
        <p
          className={`${style.loadingGeneratedTextContainer} ${isLoaded ? "" : style.finisLoaded}`}
        >
          {generatedText}
        </p>
      </div>
    </div>
  );
};
