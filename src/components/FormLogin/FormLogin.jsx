"use client";
import style from "./FormLogin.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../Input/Input";
import { useState } from "react";
export const FormLogin = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className={style.formContainer}>
          {openModal && (
            <div className={style.modal}>
              
            </div>
          )}
            <div className={style.logoContainer}>
                <Image src="/DeepflixText.svg" alt="logo" fill={true} />
            </div>
            <p className={style.textGeneratedMovie}>Generate a movie now?</p>
            <Input placeHolder="Enter your e-mail address" />
            <Link
                href={{
                    pathname: "/welcome",
                    query: { type: "0" },
                }}
            >
                <div className={style.startButton}>
                    <p>CONTINUE</p>
                </div>
            </Link>
            <div className={style.signContainer}>
                <span></span>
                <p>or Sign in with</p>
                <span></span>
            </div>
            <div className={style.signInImageContainer}>
                <button type="button" className={style.loginButtonGoogle} onClick={() => setOpenModal(true)}>
                    Sign in with Google
                </button>
            </div>
            <p className={style.lillTextInfo}>
                I understand that my information will be used in accordance with Deepflix’s{" "}
                <span className={style.lillTextInfoUnderline}>Privacy Policy</span>
            </p>
        </div>
    );
};
