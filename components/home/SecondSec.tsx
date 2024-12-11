"use client";
import React from "react";

const SecondSec = () => {
  const textStr = `We blend creativity with purpose, creating visuals that are as
        functional as they are beautiful, ensuring that they contribute to the
        overall success of the brand.`;
  return (
    <section className="bg-black-1 flex items-center justify-center py-[15rem]">
      <p className="w-[70%] text-white-1 text-center font-dmsans text-[6.4rem] leading-[6.8rem] knockout">
        {textStr
          .slice()
          .split("")
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}
      </p>
    </section>
  );
};

export default SecondSec;
