"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import contactUsImg from "../../assets/home/contact-us.png";
import { motion } from "framer-motion";
import SectionCard from "../SectionCard";
import HeaderText from "../HeaderText";

const ContactUs = () => {
  return (
    <SectionCard styles="bg-black-1  py-[14rem] smd:py-[8rem] md:py-[12rem]  flex items-center md:flex-col">
      <div className="flex-1 mr-[8rem] md:mr-0 md:flex md:flex-col md:items-center md:mb-[4rem]">
        <HeaderText
          text="Got an Idea? Let’s Make It Happen!"
          styles="text-white-1 font-inter md:text-center"
          paragraph="We combine creativity, expertise, and a collaborative approach to
          ensure that your project is not only successful but also exceeds your
          expectations. Let’s embark on this journey together and turn your
          dreams into tangible results."
          paragraphStyle=" text-white-3 mb-[3.2rem] md:text-center"
        />

        <Button
          text={"Contact us"}
          styles={"py-[1.4rem] px-[2.8rem] smd:w-full smd:justify-between"}
        />
      </div>
      <motion.div
        // initial={{ opacity: 0, x: 40 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        // transition={{ duration: 0.3, ease: "easeIn" }}
        className="w-[67.3rem] smd:w-full h-[71.6] flex-1"
      >
        <Image
          src={contactUsImg}
          alt="contact us image"
          priority
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </motion.div>
    </SectionCard>
  );
};

export default ContactUs;
