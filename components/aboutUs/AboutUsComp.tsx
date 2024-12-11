"use client";
import React, { useEffect } from "react";
import FirstSection from "../FirstSection";
import { motion } from "framer-motion";
import WhoIsQrest from "./WhoIsQrest";
import WhyChooseQrest from "../home/WhyChooseQrest";
import ContactUs from "../home/ContactUs";
import CoreValues from "./CoreValues";
import MissionAndPurpose from "./MissionAndPurpose";

const AboutUsComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);
  return (
    <main>
      <FirstSection bg="bg-about-1">
        <div className="pt-[10rem] pb-[15rem] w-[60%] text-center ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="text-[10rem] font-inter font-semibold leading-[9.8rem] -tracking-[0.5rem] text-white-1 mb-[2.4rem]"
          >
            Building Smarter Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
            className="font-dmsans text-[2.4rem] leading-[3.4rem] text-white-2"
          >
            Our goal is to empower businesses to work more efficiently, stay
            competitive, and achieve long-term success in an ever-evolving
            landscape.
          </motion.p>
        </div>
      </FirstSection>
      <WhoIsQrest />
      <CoreValues />
      <MissionAndPurpose />
      <WhyChooseQrest />
      <ContactUs />
    </main>
  );
};

export default AboutUsComp;
