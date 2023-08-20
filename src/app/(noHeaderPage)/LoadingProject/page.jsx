"use client";
import { useState } from "react";
import { TextLoading } from "@/components/TextLoading/TextLoading";
import style from "./LoadingProject.module.scss";

export default function LoadingProject() {
  const [eraseLoading, setEraseLoading] = useState(false);
  const endLoading = () => {
    setTimeout(() => {
      setEraseLoading(true);
    }, 2000);
  };
  return (
    <div className={style.container}>
      <div
        className={`${style.loadingContainer} ${eraseLoading ? style.eraseLoadingContainer : ""}`}
      >
        <TextLoading endLoading={endLoading} />
      </div>
      <div
        className={`${style.moviePreviewContainer} ${
          eraseLoading ? style.displayMovieContainer : ""
        }`}
      >
        <p className={eraseLoading ? style.animElement : ""}>Your movie is ready to watch !</p>
        <p className={`${style.titleMovie} ${eraseLoading ? style.animElement : ""}`}>AGENTI BOTANICI</p>
        <div className={style.startButton}>
          <p>Play</p>
        </div>
      </div>
    </div>
  );
}
