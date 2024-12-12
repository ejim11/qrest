"use client";
import React from "react";

const SectionCard: React.FC<{ children: React.ReactNode; styles: string }> = ({
  children,
  styles,
}) => {
  return (
    <section
      className={`${styles} px-[9rem] 2xl:px-[5rem] xlg:px-[3rem] smd:px-[2rem]`}
    >
      {children}
    </section>
  );
};

export default SectionCard;
