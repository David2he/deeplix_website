import Link from "next/link";
import style from "./Header.module.scss";
import Image from "next/image";
export default function Login() {
  return (
    <div>
      <p>Login</p>
      <div className={style.headerContainer}>
        <p>Menu</p>
        <Image src={'Logo_00.svg'} alt="Deeplix Logo" width={100} height={100} quality={100} />
        <p>Théo M.</p>
      </div>
    </div>
  );
}
