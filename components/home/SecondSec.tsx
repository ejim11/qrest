"use client";
import React from "react";
import SectionCard from "../SectionCard";

const SecondSec = () => {
  const textStr = `We blend creativity with purpose, creating visuals that are as
        functional as they are beautiful, ensuring that they contribute to the
        overall success of the brand.`;
  return (
    <SectionCard styles="bg-black-1 flex items-center justify-center py-[15rem] md:py-[12rem] smd:py-[8rem]">
      <p className="w-[90%] lg:w-full text-white-1 text-center font-dmsans text-[6.4rem] xlg:text-[6rem] xmd:text-[4.5rem] smd:text-[3rem] sm:text-[2.7rem] smd:leading-[3rem] leading-[6.8rem] knockout">
        {textStr
          .slice()
          .split("")
          .map((text, i) => (
            <span key={i}>{text}</span>
          ))}
      </p>
    </SectionCard>
  );
};

export default SecondSec;
