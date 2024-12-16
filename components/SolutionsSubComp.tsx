/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import adAnnouncementIcon from "../assets/home/ad-announcement-megaphone 1.svg";
import penToolIcon from "../assets/home/pen-tool 1.svg";
import tvIcon from "../assets/home/monitor 1.svg";
import codeIcon from "../assets/home/code 2.svg";
import { useMediaQuery } from "react-responsive";

const SolutionsSubComp = ({ onClick }: { onClick: any }) => {
  const isMobileView = useMediaQuery({ query: "(max-width: 850px)" });

  const [isMouseOver, setIsMouseOver] = useState<number | null>(null);

  const solutionsList: {
    title: string;
    text: string;
    icon: StaticImageData;
  }[] = [
    {
      title: "Branding & Design",
      text: "Crafting unique and memorable brand identities that resonate with your target audience.",
      icon: penToolIcon,
    },
    {
      title: "UIUX Design",
      text: "Creating seamless user experiences that improve engagement and satisfaction across digital platforms.",
      icon: tvIcon,
    },
    {
      title: "Software Development",
      text: "Developing tailored mobile apps and websites that meet your specific business needs.",
      icon: codeIcon,
    },
    {
      title: "Digital Marketing",
      text: "Implementing strategic marketing solutions to enhance your online presence and drive growth.",
      icon: adAnnouncementIcon,
    },
  ];

  return (
    <motion.ul
      layout
      initial={{
        opacity: 0,
        y: isMobileView ? undefined : -40,
        height: isMobileView ? 0 : undefined,
      }}
      animate={{
        opacity: 1,
        y: isMobileView ? undefined : 0,
        height: isMobileView ? "auto" : undefined,
      }}
      exit={{
        opacity: 0,
        y: isMobileView ? undefined : -40,
        height: isMobileView ? 0 : undefined,
        transition: {
          delay: isMobileView ? undefined : 0.15,
          ease: "easeIn",
        },
      }}
      className="absolute z-[90] md:relative md:top-0 md:left-0 md:right-0 md:bottom-0 top-[7.2rem] bg-white-1 w-[43.4rem] px-[1rem] py-[1rem]  rounded-[0.6rem] md:bg-black-1  text-black-1 shadow-2xl md:mt-[1.5rem] md:w-full "
    >
      {solutionsList.map(
        (item: { title: string; text: string; icon: StaticImageData }, i) => (
          <motion.li
            onClick={onClick}
            initial={isMobileView ? undefined : { opacity: 0, y: 20, x: 20 }}
            whileInView={isMobileView ? undefined : { opacity: 1, y: 0, x: 0 }}
            viewport={isMobileView ? undefined : { once: true }}
            transition={
              isMobileView
                ? undefined
                : {
                    delay: (i + 1) * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                  }
            }
            // variants={itemVariants}
            key={i}
            onMouseOver={() => {
              setIsMouseOver(i);
            }}
            onMouseLeave={() => {
              setIsMouseOver(null);
            }}
            className="flex px-[1.4rem]   py-[1.5rem] rounded-[0.6rem]   hover:bg-purple-4 "
          >
            <Image
              src={item.icon}
              alt={item.title}
              priority
              width={50}
              height={50}
              className="w-[2.8rem] h-[2.8rem] mr-[2rem] md:hidden"
            />
            <div className="flex flex-col md:items-center md:text-center md:w-full  text-left font-dmsans ">
              <p
                className={`${
                  isMouseOver === i
                    ? " text-purple-2"
                    : "text-black-2 md:text-white-1"
                } text-[1.8rem] font-medium`}
              >
                {item.title}
              </p>
              <p
                className={`${
                  isMouseOver === i ? " text-purple-2" : "text-grey-1 "
                } text-[1.4rem] leading-[2rem]`}
              >
                {item.text}
              </p>
            </div>
          </motion.li>
        )
      )}
    </motion.ul>
  );
};

export default SolutionsSubComp;
