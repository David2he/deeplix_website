import { FormLogin } from "@/components/FormLogin/FormLogin";
import style from "./page.module.scss";
import { FormRegister } from "@/components/FormRegister/FormRegister";
export default function Register() {
	return (
		<div className={style.registerContainer}>
			<FormRegister />
		</div>
	);
}
