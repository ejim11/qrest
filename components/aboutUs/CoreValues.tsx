"use client";
import React from "react";
import Image from "next/image";
import coreValImg from "../../assets/about-us/core-val.png";
import { motion } from "framer-motion";
import SectionCard from "../SectionCard";

const CoreValues = () => {
  const coreValuesData = [
    {
      title: "Innovation",
      text: "We embrace creativity and technology to develop cutting-edge solutions that address the evolving needs of our clients and the market.",
    },
    {
      title: "Excellence",
      text: "We are committed to delivering the highest quality in every project, continuously striving for improvement and exceeding expectations.",
    },
    {
      title: "Customer-Centricity",
      text: "We prioritize the needs and success of our clients, ensuring that our solutions are tailored to meet their unique challenges and goals.",
    },
  ];

  return (
    <SectionCard styles="px-[9rem] smd:pt-[8rem] md:pt-[10rem] pt-[14rem] bg-white-1">
      <div className="flex items-center smd:flex-col smd:text-center">
        <div className="flex-1 mr-[5rem] lg:mr-[3rem] smd:mr-0">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="font-inter font-semibold text-[7.5rem]  xlg:text-[6rem] xmd:text-[5rem] smd:text-[4rem] smd:-tracking-[0.1rem] smd:leading-[4rem] leading-[7.5rem] -tracking-[0.5rem] text-black-2 mb-[2rem] sm:mb-[1.7rem]"
          >
            Our Core Values
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
            className="font-dmsans text-[2rem] leading-[3rem] text-grey-1 sm:text-[1.5rem]   sm:leading-[2.2rem] "
          >
            Our core values are the foundation of everything we do at Qrest.
            They guide our approach to delivering top-notch solutions and shape
            how we interact with our clients, partners, and team members.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="rounded-[1.2rem] overflow-hidden w-[70.9rem] smd:w-[90%] sm:w-full smd:mt-[3rem] xlg:w-[50%] xlg:h-[50rem] xlg:object-cover h-[66.3rem] sm:h-[33rem]"
        >
          <Image
            src={coreValImg}
            alt="core val image"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </motion.div>
      </div>
      <div className="mt-[6.4rem] grid grid-cols-service-grid gap-[2rem] md:flex md:flex-wrap md:justify-center">
        {coreValuesData.map((val, i: number) => (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.1 }}
            key={i}
            className="flex flex-col items-center text-center"
          >
            <p className="text-[2rem] font-inter -tracking-[0.1rem] font-medium mb-[1.6rem] sm:mb-[0.9rem] text-black-2">
              {val.title}
            </p>
            <p className="text-[1.8rem]  font-dmsans leading-[2.6rem] sm:text-[1.5rem] sm:leading-[2.2rem] text-grey-1">
              {val.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
};

export default CoreValues;
