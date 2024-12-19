"use client";
import React from "react";
import Image from "next/image";
import contactUsImg from "../../assets/home/contact-us.png";
import { motion } from "framer-motion";
import SectionCard from "../SectionCard";
import HeaderText from "../HeaderText";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

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

        <Link
          href={"/contact"}
          className="flex sm:text-[1.5rem] items-center text-white-1 font-inter bg-purple-2  rounded-[0.6rem]  mb-[10rem] py-[1.6rem] px-[2rem] smd:text-[1.78rem] smd:mb-[4.5rem] smd:w-full smd:justify-between w-max"
        >
          <span>Contact us</span>
          <RiArrowRightUpLine className="text-current w-[2rem] h-[2rem] ml-[2rem]" />
        </Link>
      </div>
      <motion.div className="w-[67.3rem] smd:w-full h-[71.6] flex-1">
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
