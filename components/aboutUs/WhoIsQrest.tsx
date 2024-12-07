"use client";
import { motion } from "framer-motion";
import React from "react";

const WhoIsQrest = () => {
  return (
    <section className="px-[9rem] py-[14rem] bg-black-1 flex">
      <div className="flex-1 mr-[5rem]">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="text-[8rem] font-inter font-semibold leading-[7.5rem] -tracking-[0.5rem] text-white-1"
        >
          Who is Qrest?
        </motion.h3>
      </div>
      <div className="flex-1 font-dmsans text-[2.4rem] leading-[3.6rem] text-white-3">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeIn" }}
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
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
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
