"use client";
import style from "./PercentageLoading.module.scss";
import { useState, useEffect, useRef } from "react";

export const PercentageLoading = ({ onLoadingComplete }) => {
	const [loadingPercentage, setLoadingPercentage] = useState(0);
	const timeoutIdRef = useRef(null);
	const [isLoaded, setIsLoaded] = useState(false);

	const handleKeyDown = (e) => {
		if (e.code === "Space") {
			setLoadingPercentage(100);
			setIsLoaded(true);
			onLoadingComplete();
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		const generateIntervalDuration = () => {
			let random = Math.random();
			if (random < 0.4) {
				return Math.floor(Math.random() * 400) + 4000;
			}
			return Math.floor(Math.random() * 80) + 3000;
		};

		const updatePercentage = () => {
			setLoadingPercentage((currentPercentage) => {
				if (currentPercentage >= 100) {
					setIsLoaded(true);
					onLoadingComplete();
					if (timeoutIdRef.current) {
						clearTimeout(timeoutIdRef.current);
					}
					return currentPercentage;
				}
				return currentPercentage + 1;
			});

			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current);
			}
			if (loadingPercentage >= 100) {
				return;
			}
			timeoutIdRef.current = setTimeout(updatePercentage, generateIntervalDuration());
		};

		if (!isLoaded) {
			updatePercentage();
		} else {
			return;
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current);
			}
		};
	}, [isLoaded]);

	return (
		<>
			<p className={style.loadingPercentage}>{loadingPercentage} %</p>
		</>
	);
};
