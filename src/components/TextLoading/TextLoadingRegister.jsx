"use client";
import { useState, useEffect, useRef } from "react";
import style from "./TextLoadingRegister.module.scss";
import data from "@/utils/textGeneratedData.json";
import { PercentageLoading } from "../PercentageLoading/PercentageLoading";

export const TextLoadingRegister = ({ setGetFinalLoading }) => {
	const { action, subject, tools, parameters } = data;
	const timeoutIdRef = useRef(null);
	const [generatedText, setGeneratedText] = useState("");
	const [isLoaded, setIsLoaded] = useState(true);
	const [removeTitle, setRemoveTitle] = useState(false);

	const handleLoadingComplete = () => {
		setTimeout(() => {
			setIsLoaded(false);
			setRemoveTitle(true);
		}, 400);

		setTimeout(() => {
			setGetFinalLoading(true);
		}, 3800);
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
				return Math.floor(Math.random() * 100) + 50;
			}
			return Math.floor(Math.random() * 35) + 10;
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
				<video autoPlay loop muted playsInline controls={false} className={style.iconLoader}>
					<source src="/loaderV1.mp4" />
				</video>
			</div>
			<div className={`${style.loadingPercentageContainer} ${isLoaded ? "" : style.finisLoaded}`}>
				<PercentageLoading onLoadingComplete={handleLoadingComplete} />
			</div>

			<div className={`${style.loadingTitleContainer} ${isLoaded ? "" : style.finisLoaded}`}>
				<div className={`${style.inGenerationTitle} `}>
					<p className={style.titleText}>Génération de votre réservation</p>
					<div className={style.spanContainer}>
						<span className={isLoaded ? style.loadedSPan : style.finisLoadedSpan}></span>
						<span className={isLoaded ? style.loadedSPan : style.finisLoadedSpan}></span>
						<span className={isLoaded ? style.loadedSPan : style.finisLoadedSpan}></span>
					</div>
				</div>
			</div>

			<div>
				<p className={`${style.loadingGeneratedTextContainer} ${isLoaded ? "" : style.finisLoaded}`}>
					{generatedText}
				</p>
			</div>
		</div>
	);
};
