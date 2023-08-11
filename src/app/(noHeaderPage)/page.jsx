import Link from "next/link";
import style from "./Header.module.scss";
import Image from "next/image";
export default function Home() {
  return (
    <div>
     <Link href="/welcome">Home</Link>
     <p>LoginPage</p>
     <p>2 attempt()</p>
    </div>
  );
}
