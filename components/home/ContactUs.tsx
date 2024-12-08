"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import contactUsImg from "../../assets/home/contact-us.png";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="bg-black-1 px-[9rem] py-[14rem] flex items-center">
      <div className="flex-1 mr-[8rem]">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="font-inter font-semibold text-[6.8rem] text-white-1 leading-[7.1rem] -tracking-[0.5rem]"
        >
          Got an Idea? Let’s Make It Happen!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="mt-[2rem] text-[2rem] font-dmsans leading-[2.9rem] text-white-3 mb-[3.2rem]"
        >
          We combine creativity, expertise, and a collaborative approach to
          ensure that your project is not only successful but also exceeds your
          expectations. Let’s embark on this journey together and turn your
          dreams into tangible results.{" "}
        </motion.p>
        <Button text={"Contact us"} styles={"py-[1.4rem] px-[2.8rem]"} />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="w-[67.3rem] h-[71.6] flex-1"
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
    </section>
  );
};

export default ContactUs;
