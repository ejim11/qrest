"use client";
import React, { useEffect } from "react";
import FirstSection from "../FirstSection";
import Image from "next/image";
import jobImg from "../../assets/career/job.png";
import { motion } from "framer-motion";
import BenefitsOfWorkingInOurTeam from "./BenefitsOfWorkingInOurTeam";
import ContactUs from "../home/ContactUs";
import JobsAvailable from "./JobsAvailable";

const CareerComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);
  return (
    <main>
      <FirstSection>
        <div className="flex items-center py-[5rem]">
          <div className="flex-1 mr-[11rem]">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="text-[10rem] font-inter font-semibold leading-[9.8rem] -tracking-[0.5rem] text-white-1 mb-[2.4rem]"
            >
              Join Our Team
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
              className="font-dmsans text-[2.4rem] leading-[3.4rem] text-white-2"
            >
              Join our team at Qrest and become part of a dynamic, innovative
              environment where creativity and technology come together to shape
              the future of digital solutions.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeIn", delay: 0.1 }}
            className="rounded-[1.6rem] overflow-hidden w-[64.8rem] h-[54rem]"
          >
            <Image
              src={jobImg}
              alt="job image"
              priority
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </FirstSection>
      <BenefitsOfWorkingInOurTeam />
      <JobsAvailable />
      <ContactUs />
    </main>
  );
};

export default CareerComp;
