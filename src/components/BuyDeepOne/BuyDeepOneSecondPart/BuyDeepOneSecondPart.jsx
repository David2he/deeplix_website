"use client";
import style from "./BuyDeepOneSecondPart.module.scss";
import { GeneratedText } from "../GeneratedText/GeneratedText";
import { useState, useEffect } from "react";
export const BuyDeepOneSecondPart = ({ step, setStep }) => {
    const [canAppear, setCanAppear] = useState(false);
    const [finisTextGeneration, setFinisTextGeneration] = useState(false);
    const [inBetweenFinishTextGeneration, setInBetweenFinishTextGeneration] =
        useState(true);
    const [appearBlock6to7, setAppearBlock6to7] = useState(false);
    const [appearBlock7to8, setAppearBlock7to8] = useState(false);
    const [appearBlock8to9, setAppearBlock8to9] = useState(false);
    const [appearContinueButton, setAppearContinueButton] = useState(false);

    const [testSkip, setTestSkip] = useState(false);

    const randomNumberContent = [
        "Smile",
        "Browraise",
        "InnerBrownRaise",
        "LipPress",
        "LipPucker",
        "Attention",
        "Eye Closure",
        "Joy",
        "Fear",
        "Sadness",
        "Disgust",
        "Surprise",
        "Valence",
        "Engagement",
    ];

    const handleKeyDown = (event) => {
        if (event.code === "Space") {
            setTestSkip(true);
        }
    };

    const renderBetween4And5 = () => {
        return (
            <div className={style.container4And5}>
                <p>
                    Place yourself in front of the camera and we'll proceed to
                    scan your facial expressions.
                </p>
                <div
                    className={style.redButton}
                    onClick={() => navigateThrougStep("forward")}
                >
                    <p>CONTINUE</p>
                </div>
            </div>
        );
    };
    const renderBetween5And6 = () => {
        return (
            <div className={style.container5And6}>
                <div className={style.scanningPContainer}>
                    <p
                        className={
                            inBetweenFinishTextGeneration
                                ? null
                                : style.finishScanning
                        }
                    >
                        {" "}
                        Scanning
                    </p>
                    <div
                        className={
                            inBetweenFinishTextGeneration
                                ? style.isScanningDOT
                                : style.finishScanningDOT
                        }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul
                    className={` ${style.ulContainer}
                        ${
                            inBetweenFinishTextGeneration
                                ? style.appearLi
                                : style.disappearLi
                        }`}
                >
                    <li>Expressions :</li>

                    {randomNumberContent.map((content, index) => {
                        return (
                            <GeneratedText
                                key={content}
                                content={content}
                                index={index}
                                setFinisTextGeneration={setFinisTextGeneration}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    };

    const renderBetween6And7 = () => {
        return (
            <div
                className={` ${style.container6And7} ${
                    appearBlock7to8 && style.disappearcontainer6And7
                }`}
            >
                <div
                    className={`${style.titleText} ${
                        appearBlock6to7 ? null : style.block67CanAppear
                    }`}
                >
                    <p>
                        Please read this excerpt from Fight Club®, 1999, David
                        Fincher out loud, articulating :
                    </p>
                </div>
                <div
                    className={`${style.italicTextContainer} ${
                        appearBlock6to7 ? null : style.block67CanAppear
                    }`}
                >
                    <p id="italicText" className={style.italicText}>
                        Avertissement: Si vous lisez ceci, alors cet
                        avertissement est pour vous. Chaque mot que vous lisez
                        de ce texte inutile est une autre seconde perdue dans
                        votre vie. N'avez-vous rien d'autre à faire ? Votre vie
                        est-elle si vide que, honnêtement, vous ne puissiez
                        penser à une meilleure manière de passer ces moments ?
                        Ou êtes-vous si impressionné par l'autorité que vous
                        donnez votre respect et vouez votre foi à tous ceux qui
                        s'en réclament ? Lisez-vous tout ce que vous êtes
                        supposés lire ? Pensez-vous tout ce que vous êtes
                        supposés penser ? Achetez-vous ce que l'on vous dit
                        d'acheter ? Sortez de votre appartement. Allez à la
                        rencontre du sexe opposé. Arrêtez le shopping excessif
                        et la masturbation. Quittez votre travail. Commencez à
                        vous battre. Prouvez que vous êtes en vie. Si vous ne
                        revendiquez pas votre humanité, vous deviendrez une
                        statistique. Vous êtes prévenu...
                    </p>
                </div>
            </div>
        );
    };

    const renderBetween7And8 = () => {
        return (
            <>
                <div
                    className={`${style.container7and8} ${
                        appearBlock7to8 && style.appearBlock7to8
                    }`}
                >
                    <p>
                        Now step back a few meters and blink when you're in
                        position to calibrate your movements.
                    </p>
                    <div
                        className={style.redButton}
                        onClick={() => navigateThrougStep("forward")}
                    >
                        <p>CONTINUE</p>
                    </div>
                </div>
            </>
        );
    };
    const renderBetween8And9 = () => {
        console.log(step);
        return (
            <>
                <div
                    className={`${style.container8and9} ${
                        appearBlock8to9 && style.appearBlock7to8
                    }`}
                >
                    <p
                        className={`${style.scanningIsDoneText} ${
                            appearContinueButton && style.appearBlock7to8
                        }`}
                    >
                        Scanning is done!
                    </p>
                    <div
                        className={`${style.videoWrapper} ${
                            appearContinueButton &&
                            style.disappearVideoContainer
                        }`}
                    >
                        <video autoPlay muted className={style.fullscreenVideo}>
                            <source src="/SCANMOTIONCAPTURE.MP4" />
                        </video>
                    </div>
                    <div
                        className={`${style.hiddenRedButton} ${
                            appearContinueButton && style.appearBlock7to8
                        }`}
                        onClick={() => navigateThrougStep("forward")}
                    >
                        Continue
                    </div>
                </div>
            </>
        );
    };

    const navigateThrougStep = (direction) => {
        if (direction === "back") {
            setStep(step - 1);
        } else {
            setStep(step + 1);
        }
    };

    useEffect(() => {
        let timerForStep4,
            timerForStep5_1,
            timerForStep5_2,
            timerForStep5_3,
            timerForStep6_1,
            timerForStep7_1,
            timerForStep7_2,
            timerForStep8_1;

        window.addEventListener("keydown", handleKeyDown);

        if (step === 4 && canAppear === false) {
            timerForStep4 = setTimeout(() => {
                setCanAppear(true);
            }, 1000);
        }

        if (finisTextGeneration && step === 5) {
            setFinisTextGeneration(false);
            timerForStep5_1 = setTimeout(() => {
                setInBetweenFinishTextGeneration(false);
            }, 1000);
            timerForStep5_2 = setTimeout(() => {}, 2000);
            timerForStep5_3 = setTimeout(() => {
                navigateThrougStep("forwards");
            }, 3000);
        }

        if (step === 6) {
            timerForStep6_1 = setTimeout(() => {
                setAppearBlock6to7(true);
            }, 1500);
            if (testSkip) {
                timerForStep7_1 = setTimeout(() => {
                    setAppearBlock7to8(true);
                    timerForStep7_2 = setTimeout(() => {
                        navigateThrougStep("forwards");
                    }, 1000);
                }, 1200);
            }
        }
        if (step === 7) {
            setAppearBlock8to9(true);
        }
        if (step === 8) {
            timerForStep8_1 = setTimeout(() => {
                setAppearContinueButton(true);
            }, 14000); // en seconde ca donne 15
        }
        return () => {
            clearTimeout(timerForStep4);
            clearTimeout(timerForStep5_1);
            clearTimeout(timerForStep5_2);
            clearTimeout(timerForStep5_3);
            clearTimeout(timerForStep6_1);
            clearTimeout(timerForStep7_1);
            clearTimeout(timerForStep7_2);
            clearTimeout(timerForStep8_1);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [canAppear, step, finisTextGeneration, testSkip]);

    return (
        <div className={style.container}>
            <div
                className={`${canAppear ? style.canAppear : style.stayHidden}`}
            >
                {step === 4
                    ? renderBetween4And5()
                    : step === 5
                    ? renderBetween5And6()
                    : step === 6
                    ? renderBetween6And7()
                    : step === 7
                    ? renderBetween7And8()
                    : step === 8
                    ? renderBetween8And9()
                    : null}
            </div>
        </div>
    );
};
