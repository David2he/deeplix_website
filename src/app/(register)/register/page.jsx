"use client";

import style from "./page.module.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "./page.scss";
import { FormRegister } from "@/components/FormRegister/FormRegister";
import { useState } from "react";

import { TextLoading } from "@/components/TextLoading/TextLoading";
import { LoaderInRegister } from "@/components/FormRegister/LoaderInRegister";

export default function Register() {
	const [getResponseFromApi, setGetResponseFromApi] = useState(false);
	return (
		<div className={style.registerContainer}>
			<LoaderInRegister getResponseFromApi={getResponseFromApi} />

			<div className={style.imgContainer}>
				<Image
					src={"/register/bg1.png"}
					quality={100}
					fill
					style={{
						objectFit: "cover",
						zIndex: -1,
					}}
				/>
			</div>
			{<FormRegister setGetResponseFromApi={setGetResponseFromApi} />}
		</div>
	);
}
