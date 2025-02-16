"use client";
import { useCallApi } from "../useCallApi/useCallApi";
import style from "./FormRegisterRefacto.module.scss";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
export const FormRegisterRefacto = () => {
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
			<div className={style.subLogoTextContainer}>
				<p>S’inscrire à l’avant-première du 14/03 au Nouvel Odéon</p>
			</div>
			<form className={style.formContainer} onSubmit={handleSubmit}>
				<input name="fName" placeholder="Entrer votre nom" className={style.input}></input>
				<input name="name" placeholder="Entrer votre prénom" className={style.input}></input>
				<input name="userMailAdress" placeholder="Entrer votre adresse e-mail" className={style.input}></input>

				<div className={style.buttonContainer}>
					<motion.div className={style.startButton}>
						<button type="submit">CONFIRMER</button>
					</motion.div>
				</div>
				<p className={style.lillTextInfo}>
					I understand that my information will be used in accordance with Deepflix’s{" "}
					<span className={style.lillTextInfoUnderline}>Privacy Policy</span>
				</p>
			</form>
		</div>
	);
};
