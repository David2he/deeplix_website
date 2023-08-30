"use client";

import { useSearchParams } from "next/navigation";
import style from "./page.module.scss";
import { CarrouselPicturesFirstPage } from "../../../components/CarrouselPicturesFirstPage/CarrouselPicturesFirstPage";
import { WelcomTextFirstPage } from "../../../components/WelcomTextFirstPage/WelcomTextFirstPage";
export default function Home() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <main className={style.mainContainer}>
      <WelcomTextFirstPage type={type} />
      <CarrouselPicturesFirstPage />
    </main>
  );
}
