import style from "./Login.module.scss";
import { FormLogin } from "@/components/FormLogin/FormLogin";
export default function Home() {
    return (
        <div className={style.LoginPageContainer}>
            <FormLogin />
        </div>
    );
}
