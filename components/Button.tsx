"use client";
import { motion } from "framer-motion";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text, styles }: { text: string; styles: string }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
      className={`${styles} flex sm:text-[1.5rem] items-center text-white-1 font-inter bg-purple-2  rounded-[0.6rem] `}
    >
      <span>{text}</span>
      <RiArrowRightUpLine className="text-current w-[2rem] h-[2rem] ml-[2rem]" />
    </motion.button>
  );
};

export default Button;
