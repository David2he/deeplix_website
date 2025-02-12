import style from "./Toast.module.scss";
import { easeIn, motion } from "framer-motion";
export const Toast = ({ message }) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 20 }}
			animate={{ opacity: 1, translateY: -150 }}
			transition={{ type: "spring", stiffness: 215, damping: 43 }}
			className={style.toastContainer}
		>
			<p>{message}.</p>
		</motion.div>
	);
};
