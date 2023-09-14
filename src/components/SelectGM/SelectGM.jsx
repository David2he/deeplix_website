"use client";
import "@/styles/formHandlerGM.scss";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
export const SelectGM = ({ name, label, data }) => {
    const [selectedGenre, setSelectedGenre] = useState(name);
    const [openMenue, setOpenMenu] = useState(false);
    const containerRef = useRef();
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const openMenuOnClick = (option) => {
        if (option) {
            setSelectedGenre(option);
            setOpenMenu((prevOpen) => !prevOpen);
        } else {
            setOpenMenu((prevOpen) => !prevOpen);
        }
    };

    return (
        <div className="container testContainer" ref={containerRef}>
            <label htmlFor={name}>{label}</label>
            <ul
                name={name}
                id={name}
                className="containerUL"
                onClick={() => openMenuOnClick()}
            >
                <li>{selectedGenre}</li>
                <div
                    className={`arrowContainer ${openMenue ? "open" : "close"}`}
                >
                    <Image
                        src="/arrowLeftDirection.svg"
                        alt="arrow"
                        fill={true}
                    />
                </div>
            </ul>
            <ul
                name={name}
                id={name}
                className={`containerULABS ${
                    openMenue ? "openMenue" : "closeMenue"
                }`}
            >
                {data.map((option) => (
                    <li
                        value={option}
                        key={option}
                        className="listData"
                        onClick={() => openMenuOnClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};
