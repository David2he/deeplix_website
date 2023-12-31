"use client";
import React, { useEffect, useRef } from "react";
import style from "./CarrouselPicturesFirstPage.module.scss";

export const CarrouselPicturesFirstPage = () => {
    const imagesLength = 12;
    const carrouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carrouselRef.current) {
                carrouselRef.current.scrollLeft += 1;
                if (
                    carrouselRef.current.scrollLeft >=
                    carrouselRef.current.scrollWidth / 2
                ) {
                    carrouselRef.current.scrollLeft = 0;
                }
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.container}>
            <p>Already generated</p>
            <div className={style.carrouselContainer} ref={carrouselRef}>
                {Array.from({ length: imagesLength * 2 }, (_, index) => (
                    <img
                        key={index}
                        src={`/previewPicMovies/${String(
                            (index % imagesLength) + 1
                        ).padStart(2, "0")}.png`}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
