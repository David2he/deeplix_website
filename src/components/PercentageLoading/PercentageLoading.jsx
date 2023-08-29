"use client";
import style from "./PercentageLoading.module.scss";
import { useState, useEffect, useRef } from "react";

export const PercentageLoading = ({ onLoadingComplete }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const timeoutIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const generateIntervalDuration = () => {
      let random = Math.random();
      if (random < 0.1) {
        return Math.floor(Math.random() * 1200) + 40;
      }
      return Math.floor(Math.random() * 500) + 30;
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
