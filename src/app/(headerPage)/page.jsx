import style from "./page.module.scss";
import { CarrouselPicturesFirstPage } from "../../components/CarrouselPicturesFirstPage/CarrouselPicturesFirstPage";
import { WelcomTextFirstPage } from "../../components/WelcomTextFirstPage/WelcomTextFirstPage";
export default function Home() {
  return (
    <main className={style.mainContainer}>
      <WelcomTextFirstPage />
      <CarrouselPicturesFirstPage />
    </main>
  );
}
