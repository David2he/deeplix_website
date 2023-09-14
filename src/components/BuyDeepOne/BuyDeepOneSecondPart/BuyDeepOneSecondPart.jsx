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

    const [testSkip, setTestSkip] = useState(false);

    const randomNumberContent = [
        "InnerBrownRaise",
        "LipPress",
        "LipPucker",
        "Attention",
        "Fear",
        "Surprise",
        "Valences",
        "Engagement",
        "Joy",
        "Disgust",
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
                    className={
                        inBetweenFinishTextGeneration
                            ? style.appearLi
                            : style.disappearLi
                    }
                >
                    <li>Measurements</li>
                    <li>Expressions</li>
                    <li>Ethnicity European</li>
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
                        Warning: If you are reading this then thiswarning is for
                        you. Every word you read of this useless fine print is
                        another second of your life. Don't you have other things
                        to do? Is your life so empty that you honestly can't
                        think etter way to spend these moments? Or are you so
                        impressed with authority that you give respect and
                        credence to all that claim it? Do you read everything
                        you're supposed to read? Do you think every thing you're
                        supposed to think? Buy what you're told to want? Get out
                        of your apartment. Meet a member of the opposite sex.
                        Stop the excessive shopping and masturbation. Quit your
                        job. Start a fight. Prove you're alive. If you don't
                        claim your humanity you will become a statistic.
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
        return (
            <>
                <div
                    className={`${style.container8and9} ${
                        appearBlock8to9 && style.appearBlock7to8
                    }`}
                >
                    <div className={style.videoWrapper}>
                        <video
                            controls
                            autoPlay
                            className={style.fullscreenVideo}
                        >
                            <source src="/tracking.mp4" />
                        </video>
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
            timerForStep7_2;

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

            if (step === 7) {
                setAppearBlock8to9(true);
            }
        }

        return () => {
            clearTimeout(timerForStep4);
            clearTimeout(timerForStep5_1, timerForStep5_2, timerForStep5_3);
            clearTimeout(timerForStep6_1);
            clearTimeout(timerForStep7_1);
            clearTimeout(timerForStep7_2);
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
                    : renderBetween8And9()}
            </div>
        </div>
    );
};
