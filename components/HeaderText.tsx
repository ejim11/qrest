"use client";
import { motion } from "framer-motion";
import React from "react";

const HeaderText = ({ text, styles }: { text: string; styles: string }) => {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{ once: true }}
      className={`${styles}  text-[7.2rem] xlg:text-[6rem] xmd:text-[5rem] smd:text-[4rem] smd:-tracking-[0.1rem] smd:leading-[4rem] -tracking-[0.5rem] xmd:-tracking-[0.3rem] leading-[7.5rem] font-semibold mb-[2rem] sm:mb-[1.8rem]`}
    >
      {text}
    </motion.h3>
  );
};

export default HeaderText;