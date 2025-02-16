import { FormRegisterRefacto } from "@/components/FormRegister/FormRegisterRefacto";
import style from "./page.module.scss";
import { FormRegister } from "@/components/FormRegister/FormRegister";
import Image from "next/image";
export default function Register() {
	return (
		<div className={style.registerContainer}>
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
			{<FormRegisterRefacto />}
		</div>
	);
}
