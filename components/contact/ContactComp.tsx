"use client";
import React, { useEffect } from "react";
import FirstSection from "../FirstSection";
import ContactUsForm from "./ContactUsForm";
import { motion } from "framer-motion";
import ContactList from "./ContactList";

const ContactComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);
  return (
    <main>
      <FirstSection bg="bg-contact-1 sm:bg-contact-2 sm:pb-[8rem]">
        <div className="w-full flex items-center lg:flex-col ">
          <div className="flex-1 mr-[5rem] xlg:mr-[2rem] lg:mr-0 ">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="text-[10rem] xlg:text-[8rem] md:text-[6rem] md:leading-[6rem] smd:leading-[4.6rem] smd:-tracking-[0.1rem] smd:text-[5rem] font-inter lg:text-center font-semibold leading-[9.8rem] -tracking-[0.5rem] text-white-1 mb-[2.4rem]"
            >
              Talk To Our Expert
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
              className="font-dmsans lg:text-center text-[2.4rem] sm:text-[1.8rem] sm:leading-[2.6rem]  leading-[3.4rem] text-white-2"
            >
              Have questions? Contact us today to evaluate and discuss your
              business needs.
            </motion.p>
          </div>
          <ContactUsForm />
        </div>
      </FirstSection>
      <ContactList />
    </main>
  );
};

export default ContactComp;
