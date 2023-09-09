import style from "./welcome.module.scss";
import { CarrouselPicturesFirstPage } from "../../components/CarrouselPicturesFirstPage/CarrouselPicturesFirstPage";
import { WelcomTextFirstPage } from "../../components/WelcomTextFirstPage/WelcomTextFirstPage";
export default function Welcome() {
    return (
        <main className={style.mainContainer}>
            <WelcomTextFirstPage />
            <CarrouselPicturesFirstPage />
        </main>
    );
}
