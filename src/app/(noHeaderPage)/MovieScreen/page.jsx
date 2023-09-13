import style from "./Movie.module.scss";

export default function MovieScreen() {
    return (
        <div className={style.container}>
            <div className={style.videoWrapper}>
                <video autoPlay loop className={style.fullscreenVideo}>
                    <source src="/intro.mp4" />
                </video>
            </div>
        </div>
    );
}
