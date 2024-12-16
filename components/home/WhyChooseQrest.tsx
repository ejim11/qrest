"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import scissorsIcon from "../../assets/home/scissors.svg";
import techIcon from "../../assets/home/tech.svg";
import dbIcon from "../../assets/home/db.svg";
import clockIcon from "../../assets/home/clock.svg";
import whyQrestImg from "../../assets/home/whyqrest.png";
import { motion } from "framer-motion";
import SectionCard from "../SectionCard";
import HeaderText from "../HeaderText";

const WhyChooseQrest = () => {
  const whyChooseQrestTextList: {
    title: string;
    text: string;
    icon: StaticImageData;
  }[] = [
    {
      title: "Tailored Solutions",
      text: `Precision-crafted digital solutions that capture your brand's essence and connect meaningfully with your target audience.`,
      icon: scissorsIcon,
    },
    {
      title: "Cutting-Edge Technology",
      text: `At Qrest, we leverage the latest tools and technologies to create innovative digital experiences that give you a competitive edge in the market.`,
      icon: techIcon,
    },
    {
      title: "Results-Driven",
      text: `We believe in results that speak for themselves. Our dedicated team is laser-focused on delivering measurable outcomes for your brand.`,
      icon: dbIcon,
    },
    {
      title: "Timely Delivery",
      text: `Our efficient processes ensure that we deliver high-quality work on time, keeping your projects on track and your business moving forward.`,
      icon: clockIcon,
    },
  ];

  return (
    <SectionCard styles=" py-[14rem] smd:py-[8rem] md:py-[12rem] bg-white-1">
      <div className="w-[50%] xlg:w-[75%] md:w-[90%] smd:w-full xlg:mx-auto xlg:text-center">
        <HeaderText
          text=" Why you should choose Qrest"
          styles="font-inter text-black-2"
          paragraphStyle="text-grey-1"
          paragraph="We combine creativity, technology, and strategic insights to address
          your unique business challenges, ensuring you stay ahead in a
          competitive market. "
        />
      </div>

      <div className="flex items-center mt-[6rem] smd:mt-[3rem] xlg:flex-col">
        <div className="flex-1 grid grid-cols-2 smd:grid-cols-1 mr-[5rem] xlg:mr-0 gap-[5rem] 2xl:gap-[3rem] xlg:order-2 xlg:mt-[8rem] smd:mt-[5rem]">
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
                transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.1 }}
                viewport={{ once: true }}
                key={i}
                className="flex flex-col xlg:items-center xlg:text-center"
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
                <p className="leading-[2.4rem]  sm:text-[1.5rem] text-grey-1">
                  {item.text}
                </p>
              </motion.div>
            )
          )}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
          viewport={{ once: true }}
          className="w-[55.3rem] h-[52rem] smd:h-[33rem]  xlg:w-[80%] smd:w-[90%] sm:w-full "
        >
          <Image
            src={whyQrestImg}
            alt="why qrest iamge"
            priority
            width={1000}
            height={1000}
            className="w-full h-full "
          />
        </motion.div>
      </div>
    </SectionCard>
  );
};

export default WhyChooseQrest;
