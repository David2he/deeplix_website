import Link from "next/link";
import style from "./Header.module.scss";
import Image from "next/image";

export const Header = ({imageSource}) => {
  return (
    <div className={style.headerContainer}>
      <p>Menu</p>
      <Image src={imageSource} alt="Deeplix Logo" width={100} height={100} quality={100}/>
      <p>Théo M.</p>
    </div>
  );
};
