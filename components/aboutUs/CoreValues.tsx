"use client";
import React from "react";
import Image from "next/image";
import coreValImg from "../../assets/about-us/core-val.png";
import { motion } from "framer-motion";

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
    <section className="px-[9rem] pt-[14rem] bg-white-1">
      <div className="flex items-center">
        <div className="flex-1 mr-[5rem]">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="font-inter font-semibold text-[7.5rem] leading-[7.5rem] -tracking-[0.5rem] text-black-2 mb-[2rem]"
          >
            Our Core Values
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
            className="font-dmsans text-[2rem] leading-[3rem] text-grey-1"
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
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="rounded-[1.2rem] overflow-hidden w-[70.9rem] h-[66.3rem]"
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
      <div className="mt-[6.4rem] grid grid-cols-service-grid gap-[2rem]">
        {coreValuesData.map((val, i: number) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn", delay: i * 0.1 }}
            key={i}
            className="flex flex-col items-center text-center"
          >
            <p className="text-[2rem] font-inter -tracking-[0.1rem] font-medium mb-[1.6rem] text-black-2">
              {val.title}
            </p>
            <p className="text-[1.8rem] font-dmsans leading-[2.6rem] text-grey-1">
              {val.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
