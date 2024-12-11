"use client";
import React, { useEffect } from "react";
import FirstSection from "../FirstSection";
import { motion } from "framer-motion";
import CaseStudies from "./CaseStudies";

const OurWorkComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);
  return (
    <main>
      <FirstSection bg="bg-about-1">
        <div className="py-[15rem] w-[60%] text-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="text-[10rem] font-inter font-semibold leading-[9.8rem] -tracking-[0.5rem] text-white-1 mb-[2.4rem]"
          >
            Our Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
            className="font-dmsans text-[2.4rem] leading-[3.4rem] text-white-2"
          >
            Explore how we’ve helped businesses transform their ideas into
            impactful digital experiences that drive growth and success.
          </motion.p>
        </div>
      </FirstSection>
      <CaseStudies />
    </main>
  );
};

export default OurWorkComp;
