"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import scissorsIcon from "../../assets/home/scissors.svg";
import techIcon from "../../assets/home/tech.svg";
import dbIcon from "../../assets/home/db.svg";
import clockIcon from "../../assets/home/clock.svg";
import whyQrestImg from "../../assets/home/whyqrest.png";
import { motion } from "framer-motion";

const WhyChooseQrest = () => {
  const whyChooseQrestTextList: {
    title: string;
    text: string;
    icon: StaticImageData;
  }[] = [
    {
      title: "Tailored Solutions",
      text: `We understand that every business is unique. 
That’s why we offer customized branding, web design, and digital marketing strategies designed to fit your specific goals and audience.`,
      icon: scissorsIcon,
    },
    {
      title: "Cutting-Edge Technology",
      text: `At Qrest, we leverage the latest tools and technologies to create innovative digital experiences that give you a competitive edge in the market.`,
      icon: techIcon,
    },
    {
      title: "Results-Driven",
      text: `We understand that every business is unique. 
  That’s why we offer customized branding, web design, and digital marketing strategies designed to fit your specific goals and audience.`,
      icon: dbIcon,
    },
    {
      title: "Timely Delivery",
      text: `Our efficient processes ensure that we deliver high-quality work on time, keeping your projects on track and your business moving forward.`,
      icon: clockIcon,
    },
  ];

  return (
    <section className="px-[9rem] py-[14rem] bg-white-1">
      <div className="w-[50%]">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="font-inter text-[7.2rem] -tracking-[0.5rem] leading-[7.5rem] font-semibold mb-[2rem] text-black-2"
        >
          Why you should choose Qrest
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          viewport={{ once: true }}
          className="font-dmsans text-[2rem] leading-[2.9rem] text-grey-1 mb-[3.5rem]"
        >
          We combine creativity, technology, and strategic insights to address
          your unique business challenges, ensuring you stay ahead in a
          competitive market. 
        </motion.p>
      </div>

      <div className="flex items-center">
        <div className="flex-1 grid grid-cols-2 mr-[5rem] gap-[5rem]">
          {whyChooseQrestTextList.map(
            (
              item: {
                title: string;
                text: string;
                icon: StaticImageData;
              },
              i
            ) => (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: i * 0.1 }}
                viewport={{ once: true }}
                key={i}
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} image`}
                  width={100}
                  height={100}
                  className="w-[5rem] h-[5rem]"
                  priority
                />
                <p className="mt-[1.6rem] mb-[0.9rem] font-medium font-dmsans text-[2.2rem] text-black-1 -tracking-[0.1rem]">
                  {item.title}
                </p>
                <p className="leading-[2.4rem] text-grey-1">{item.text}</p>
              </motion.div>
            )
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Image
            src={whyQrestImg}
            alt="why qrest iamge"
            priority
            width={1000}
            height={1000}
            className="w-[55.3rem] h-[52rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseQrest;
