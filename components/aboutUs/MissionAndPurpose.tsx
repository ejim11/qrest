"use client";
import React from "react";
import Image from "next/image";
import missionImg from "../../assets/about-us/mission.png";
import purposeImg from "../../assets/about-us/purpose.png";
import { motion } from "framer-motion";

const MissionAndPurpose = () => {
  const missionAndPurposeData = [
    {
      image: missionImg,
      title: "Our Mission",
      text: "We are dedicated to helping our clients navigate the complexities of the digital landscape through expert branding, custom software development, and strategic digital marketing. ",
    },
    {
      image: purposeImg,
      title: "Our Purpose",
      text: "We aim to bridge the gap between creativity and technology, providing solutions that not only meet our clients' needs but also enhance their overall efficiency and effectiveness. ",
    },
  ];
  return (
    <section className="px-[9rem] pt-[14rem] 2xl:px-[5rem] xlg:px-[3rem] smd:px-[2rem] smd:pt-[8rem]">
      {missionAndPurposeData.map((data, i: number) => (
        <div
          className="flex items-center smd:flex-col smd:text-center mb-[15rem] smd:mb-[7rem] last:mb-0"
          key={i}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className={`w-[70rem] 2xl:w-[45%] h-[66] smd:order-2 smd:mt-[3rem] smd:w-[90%] sm:w-full ${
              i % 2 === 0 ? "order-1 mr-[5rem] smd:mr-0" : "order-2"
            }`}
          >
            <Image
              src={data.image}
              alt={`${data.title} image`}
              priority
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </motion.div>
          <div
            className={`flex-1 flex flex-col smd:order-1 ${
              i % 2 === 0 ? "order-2 " : "order-1 mr-[5rem] smd:mr-0"
            }`}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="text-[7.5rem]  xlg:text-[6rem] xmd:text-[5rem] smd:text-[4rem] smd:-tracking-[0.1rem] smd:leading-[4rem] font-inter font-semibold leading-[7.8rem]  xmd:-tracking-[0.3rem] -tracking-[0.5rem] text-black-2"
            >
              {data.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
              className="text-[2rem] leading-[3rem] sm:text-[1.5rem] sm:leading-[2.2rem] mt-[2rem] text-grey-1"
            >
              {data.text}
            </motion.p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MissionAndPurpose;
