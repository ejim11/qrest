"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import adAnnouncementIcon from "../../assets/home/ad-announcement-megaphone 2.svg";
import penToolIcon from "../../assets/home/pen-tool 2.svg";
import tvIcon from "../../assets/home/monitor 2.svg";
import codeIcon from "../../assets/home/code 3.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import SectionCard from "../SectionCard";
import HeaderText from "../HeaderText";

const ExploreServices = () => {
  const servicesList: {
    title: string;
    text: string;
    icon: StaticImageData;
    link: string;
  }[] = [
    {
      title: "Branding & Design",
      text: "Crafting unique and memorable brand identities that resonate with your target audience.",
      icon: penToolIcon,
      link: "",
    },
    {
      title: "UIUX Design",
      text: "Creating seamless user experiences that improve engagement and satisfaction across digital platforms.",
      icon: tvIcon,
      link: "",
    },
    {
      title: "Software Development",
      text: "Developing tailored mobile apps and websites that meet your specific business needs.",
      icon: codeIcon,
      link: "",
    },
    {
      title: "Digital Marketing",
      text: "Implementing strategic marketing solutions to enhance your online presence and drive growth.",
      icon: adAnnouncementIcon,
      link: "",
    },
  ];

  return (
    <SectionCard styles="bg-black-1 pt-[4rem] pb-[12rem] smd:pb-[8rem]">
      <div className="w-[50%] xlg:w-[75%] md:w-[90%] xlg:mx-auto xlg:text-center smd:text-left smd:w-full">
        <HeaderText
          text=" Explore our main services"
          styles="text-white-1 font-inter "
          paragraph="Bring all your business ideas, products, projects, Let’s create digital masterpieces that dazzle, and ensure your brand stays relevant and impressive."
          paragraphStyle="text-white-2  mb-[8rem] smd:mb-[4rem] "
        />
      </div>
      <div className="grid grid-cols-4 gap-[1.8rem] xlg:grid-cols-2 smd:grid-cols-1 ">
        {servicesList.map(
          (
            service: {
              title: string;
              text: string;
              icon: StaticImageData;
              link: string;
            },
            i: number
          ) => (
            <motion.div
              initial={{ opacity: 0, y: 40, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.2 }}
              viewport={{ once: true }}
              key={i}
              className="w-full border border-black-4 bg-gradient-to-b from-[#101010] to-black-1 to-55% xlg:p-[2rem] px-[3.2rem] py-[3.4rem] flex flex-col"
            >
              <Image
                src={service.icon}
                alt={service.title}
                priority
                width={150}
                height={150}
                className="w-[7.8rem] h-[7.8rem] mr-[2rem] mb-[10rem]"
              />
              <div className="font-dmsans flex-1  flex flex-col justify-end">
                <p className="text-white-1 text-[2.6rem] font-medium leading-[3.2rem]">
                  {service.title}
                </p>
                <p className="text-grey-7 leading-[2.3rem] sm:text-[1.5rem] mt-[1.2rem] mb-[2.2rem]">
                  {service.text}
                </p>
                <div className="mt-auto ">
                  <Link
                    href={service.link}
                    className="text-purple-3   sm:text-[1.5rem] flex items-center "
                  >
                    <span> Learn more</span>
                    <IoIosArrowRoundForward className="text-current w-[2rem] h-[2rem] ml-[0.5rem]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </SectionCard>
  );
};

export default ExploreServices;
