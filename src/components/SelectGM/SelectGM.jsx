"use client";
import "@/styles/formHandlerGM.scss";
import Image from "next/image";
import React, { useState } from "react";
export const SelectGM = ({ name, label, data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <label htmlFor={name}>{label}</label>
      <div
        className="selectContainer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <select name={name} id={name}>
          <option value=""></option>
          {data.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <div className={`arrowContainer ${isHovered  ? "open" : "false"}`}>
          <Image src="/arrowLeftDirection.svg" alt="arrow" fill={true} />
        </div>
      </div>
    </div>
  );
};
