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
    <section className="px-[9rem] pt-[14rem]">
      {missionAndPurposeData.map((data, i: number) => (
        <div className="flex items-center mb-[15rem] last:mb-0" key={i}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className={`w-[70rem] h-[66] ${
              i % 2 === 0 ? "order-1 mr-[5rem]" : "order-2"
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
            className={`flex-1 flex flex-col ${
              i % 2 === 0 ? "order-2" : "order-1 mr-[5rem]"
            }`}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className="text-[7.5rem] font-inter font-semibold leading-[7.8rem] -tracking-[0.5rem] text-black-2"
            >
              {data.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
              className="text-[2rem] leading-[3rem] mt-[2rem] text-grey-1"
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
