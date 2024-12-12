"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import adAnnouncementIcon from "../assets/home/ad-announcement-megaphone 1.svg";
import penToolIcon from "../assets/home/pen-tool 1.svg";
import tvIcon from "../assets/home/monitor 1.svg";
import codeIcon from "../assets/home/code 2.svg";
import { useMediaQuery } from "react-responsive";

const SolutionsSubComp = () => {
  const isMobileMenu = useMediaQuery({ query: "(max-width: 850px)" });

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
        y: isMobileMenu ? 0 : -40,
        height: isMobileMenu ? 0 : undefined,
      }}
      animate={{ opacity: 1, y: 0, height: isMobileMenu ? "100%" : undefined }}
      exit={{
        opacity: 0,
        y: isMobileMenu ? 0 : -40,
        height: isMobileMenu ? "0%" : undefined,
        transition: { delay: isMobileMenu ? 0 : 0.15 },
      }}
      className="absolute z-[90] md:relative md:top-0 md:left-0 md:right-0 md:bottom-0 top-[7.2rem] bg-white-1 w-[43.4rem] px-[1rem] py-[1rem]  rounded-[0.6rem]  text-black-1 shadow-2xl md:mt-[1.5rem] md:w-full md:bg-purple-4"
    >
      {solutionsList.map(
        (item: { title: string; text: string; icon: StaticImageData }, i) => (
          <motion.li
            initial={{ opacity: 0, y: 20, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: (i + 1) * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 24,
            }}
            // variants={itemVariants}
            key={i}
            onMouseOver={() => {
              setIsMouseOver(i);
            }}
            onMouseLeave={() => {
              setIsMouseOver(null);
            }}
            className="flex px-[1.4rem] py-[1.5rem] rounded-[0.6rem]   hover:bg-purple-4 "
          >
            <Image
              src={item.icon}
              alt={item.title}
              priority
              width={50}
              height={50}
              className="w-[2.8rem] h-[2.8rem] mr-[2rem] smd:hidden"
            />
            <div className="flex flex-col text-left font-dmsans ">
              <p
                className={`${
                  isMouseOver === i ? " text-purple-2" : "text-black-2 "
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
