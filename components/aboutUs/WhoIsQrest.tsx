"use client";
import { motion } from "framer-motion";
import React from "react";

const WhoIsQrest = () => {
  return (
    <section className="px-[9rem] py-[14rem]  md:pt-[0rem] 2xl:px-[5rem] xlg:px-[3rem] smd:px-[2rem] smd:py-[8rem] bg-black-1 flex lg:flex-col">
      <div className="flex-1 mr-[5rem] lg:mr-0 lg:mb-[2rem] sm:mb-[1.8rem]">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="text-[8rem]  xlg:text-[6rem] xmd:text-[5rem] smd:text-[4rem] smd:-tracking-[0.1rem] smd:leading-[4rem] -tracking-[0.5rem] xmd:-tracking-[0.3rem]  font-inter font-semibold leading-[7.5rem]  text-white-1"
        >
          Who is Qrest?
        </motion.h3>
      </div>
      <div className="flex-1 font-dmsans text-[2.4rem] leading-[3.6rem] sm:text-[1.5rem]  sm:leading-[2.2rem]  text-white-3">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="mb-[1.5rem]"
        >
          Qrest is a leading provider of user-centric business solutions,
          specializing in delivering fast and efficient services to drive
          business growth.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
        >
          With expertise in branding, custom software development (including
          mobile apps and websites), and digital marketing strategies, Qrest
          helps businesses achieve their objectives while enhancing their
          digital presence.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoIsQrest;
