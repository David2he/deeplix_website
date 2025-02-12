"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useCallApi } from "../useCallApi/useCallApi";
import style from "./FormRegister.module.scss";
import { Toast } from "./Toast";

export const FormRegister = () => {
	const { postData, responseApi } = useCallApi();

	const prependZero = (number) => {
		if (number < 9) return "0" + number;
		else return number;
	};
	const date = new Date();
	const month = prependZero(date.getUTCMonth() + 1);
	const day = date.getUTCDate();
	const year = date.getUTCFullYear();

	const finalDate = `${year}-${month}-${day}`;
	console.log(finalDate);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const fName = formData.get("fName");
		const name = formData.get("name");
		const validationDate = finalDate;
		const userMailAdress = formData.get("userMailAdress");
		if (!fName || !name || !userMailAdress) {
			alert("Veuillez remplir tous les champs");
			return;
		}
		postData({ fName, name, userMailAdress, validationDate });
	};

	return (
		<div className={style.formRegisterContainer}>
			<div className={style.logoContainer}>
				<Image src="/DeepflixText.svg" alt="logo" fill={true} />
			</div>
			<p className={style.textInFormContainer}>S’inscrire à l’avant-première du 14/03 au Nouvel Odéon</p>

			<form className={style.formContainer} onSubmit={handleSubmit}>
				<input name="fName" placeholder="Entrer votre nom" className={style.input}></input>
				<input name="name" placeholder="Entrer votre prénom" className={style.input}></input>
				<input name="userMailAdress" placeholder="Entrer votre adresse e-mail" className={style.input}></input>

				<div className={style.buttonContainer}>
					<AnimatePresence>
						{!responseApi && (
							<motion.div
								className={style.startButton}
								exit={{ opacity: 0, translateY: 100 }}
								transition={{ type: "spring", stiffness: 215, damping: 43 }}
							>
								<button type="submit">CONFIRMER</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</form>
			<div className={style.toastPlacer}>{responseApi && <Toast message={responseApi} />}</div>

			<p className={style.lillTextInfo}>
				I understand that my information will be used in accordance with Deepflix’s{" "}
				<span className={style.lillTextInfoUnderline}>Privacy Policy</span>
			</p>
		</div>
	);
};
