import { useEffect, useState, useRef } from "react";
import style from "../BuyDeepOneSecondPart/BuyDeepOneSecondPart.module.scss";

export const GeneratedText = ({ content, index, setFinisTextGeneration }) => {
    const [generatedNumber, setGeneratedNumber] = useState("");
    const [generatedNumber2, setGeneratedNumber2] = useState("");
    const [generatedNumber3, setGeneratedNumber3] = useState("");
    const [deffinitlyStop, setDeffinitlyStop] = useState(false);

    useEffect(() => {
        let interval;
        let canGenerateTimer;
        let stopGeneratingTimer;
        let fakeLaggingTimer;

        const generateRandomNumber = (isFakeLagging) => {
            setGeneratedNumber(
                (Math.random() * Math.random() * 4).toFixed(Math.random() * 4) +
                    (isFakeLagging ? ".." : "")
            );
            setGeneratedNumber2(
                (Math.random() * Math.random() * 4).toFixed(Math.random() * 4) +
                    (isFakeLagging ? ".." : "")
            );
            setGeneratedNumber3(
                (Math.random() * Math.random() * 4).toFixed(Math.random() * 4) +
                    (isFakeLagging ? ".." : "")
            );
        };

        const timerFluctuation = () => {
            let random = Math.random();

            if (random < 0.1) {
                fakeLaggingTimer = true;
                return Math.floor(Math.random() * 400) + 1500;
            }
            if (random < 0.33) {
                fakeLaggingTimer = false;
                return Math.floor(Math.random() * 200) + 300;
            } else if (random < 0.66) {
                fakeLaggingTimer = false;
                return Math.floor(Math.random() * 200) + 80;
            } else {
                fakeLaggingTimer = false;
                return 80;
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
                resetInterval();
            }, 1800 + index * Math.random() * 40);
        }
        stopGeneratingTimer = setTimeout(() => {
            setDeffinitlyStop(true);

            generateRandomNumber(false);
            clearInterval(interval);
            setFinisTextGeneration(true);
        }, 20000);

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
                <p className={style.numberRatio}>
                    {generatedNumber}{" "}
                    {index === 0 && generatedNumber2 + generatedNumber3}
                </p>
            </li>
        </>
    );
};
