"use client";
import style from "./FormGM.module.scss";
import { InputGM } from "../InputGM/InputGM";
import { TextAreaGM } from "../TextAreaGM/TextAreaGM";
import { SelectGM } from "../SelectGM/SelectGM";
import Image from "next/image";
import Link from "next/link";
import data from "@/utils/generateMovieInput.json";
import React, { useState } from 'react';
const { genres, firstRole, secondRole, director, language } = data;
export const FormGM = () => {
  const [activeElement, setActiveElement] = useState(null);
  const handleClick  = (index) => {
    setActiveElement(index);
  };
  return (
    <div className={style.formContainer}>
      <div className={style.leftPannel}>
        <div className={style.animated}>
          <InputGM placeHolder="Enter movie title" label="Enter movie title" name="titleMovie" />
        </div>
        <div className={style.animated}>
          <TextAreaGM
            placeHolder="Enter a short resume of your story "
            label="Enter a little story "
            name="lilStory"
          />
        </div>
      </div>
      <div className={style.rightPannel}>
        <div className={style.rPannelFormContent}>
          <div className={style.rPannelFormContentRight}>
          <div 
              className={`${style.animated} ${activeElement === 11 ? style.test : ''}`} 
              onClick={() => handleClick(11)}
            >
              <SelectGM label="Choose genre" name="genre" data={genres} />
            </div>
            <div className={style.animated}>
              <p>Choose the actors</p>
            </div>
            <div 
              className={`${style.animated} ${activeElement === 10 ? style.test : ''}`} 
              onClick={() => handleClick(10)}
            >
              <SelectGM label="1st role" name="firstRole" data={firstRole} />
            </div>
            <div 
              className={`${style.animated} ${activeElement === 9 ? style.test : ''}`} 
              onClick={() => handleClick(9)}
            >
              <SelectGM label="2nd role" name="secondRole" data={secondRole} />
            </div>
          </div>
          <div className={style.rPannelFormContentLeft}>
            <div className={style.animated}>
              <InputGM placeHolder="1 h 30" label="setDuration" name="titleMovie" />
            </div>
            <div 
              className={`${style.animated} ${activeElement === 8 ? style.test : ''}`} 
              onClick={() => handleClick(8)}
            >
              <SelectGM label="Movie director " name="director" data={director} />
            </div>
            <div className={style.animated}>
              <SelectGM label="Language" name="language" data={language} />
            </div>
          </div>
        </div>
        <div className={style.startContainer}>
          <Link href={'./loadingProject'}><div className={style.startButton}>
            <p>Generate your movie </p>
            <div className={style.imgContainer}>
              <Image src="/DeepflixText.svg" alt="logo" fill={true} />
            </div>
          </div>
          </Link>
          <div className={style.advancedFilterContainer}>
            <div className={style.crossImgContainer}>
              <Image src="/cross.svg" alt="cross" fill={true} />
            </div>
            <p>Advanced filters</p>
          </div>
        </div>
      </div>
    </div>
  );
};
