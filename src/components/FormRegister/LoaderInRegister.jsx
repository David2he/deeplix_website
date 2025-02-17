import style from "./LoaderInRegister.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { TextLoadingRegister } from "../TextLoading/TextLoadingRegister";
import { useState } from "react";
import Image from "next/image";

export const LoaderInRegister = ({ getResponseFromApi }) => {
	const [getFinalLoading, setGetFinalLoading] = useState(false);

	return (
		<AnimatePresence mode="wait">
			{getResponseFromApi && (
				<motion.div
					key="container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={style.loaderContainer}
				>
					<motion.div
						style={{ borderColor: getFinalLoading ? "black" : "red" }}
						className={style.borderContainer}
					></motion.div>
					<AnimatePresence mode="wait">
						{getFinalLoading ? (
							<motion.div
								key="final"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.8 }}
								className={style.finalContainer}
							>
								<div className={style.iconOnTop}>
									<div className={style.imgPlacer}>
										<Image
											src={"/Logo_00.svg"}
											quality={100}
											fill
											style={{
												objectFit: "contain",
											}}
										/>
									</div>
								</div>
								<div className={style.bgContainer}></div>
								<div className={style.core}>
									<div className={style.subTextContainer}>
										<p>Merci, vous êtes maintenant inscrit</p>
										<p>à l’avant-première de</p>

										<div className={style.lilIconInTextContainer}>
											<Image
												src={"/DeepflixText.svg"}
												quality={100}
												fill
												style={{
													objectFit: "contain",
												}}
											/>
										</div>
									</div>
								</div>
							</motion.div>
						) : (
							<motion.div
								key="loading"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.5 }}
								className={style.loadingContainer}
							>
								<TextLoadingRegister setGetFinalLoading={setGetFinalLoading} />
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
