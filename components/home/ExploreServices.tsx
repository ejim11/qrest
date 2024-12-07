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
    <section className="px-[9rem] bg-black-1 pt-[4rem] pb-[12rem]">
      <div className="w-[50%]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-white-1 font-inter text-[7.2rem] font-semibold leading-[7.5rem]"
        >
          Explore our main services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          viewport={{ once: true }}
          className="font-dmsans text-[2rem]  leading-[2.9rem] text-white-2 mt-[2rem] mb-[8rem]"
        >
          Bring all your projects together, create a portfolio that dazzles, and
          ensure your brand stays relevant and impressive.
        </motion.p>
      </div>
      <div className="grid grid-cols-service-grid gap-[1.8rem] ">
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
              transition={{ duration: 0.6, ease: "easeIn", delay: i * 0.2 }}
              viewport={{ once: true }}
              key={i}
              className="w-full border border-black-4 bg-gradient-to-b from-[#101010] to-black-1 to-55% px-[3.2rem] py-[3.4rem]"
            >
              <Image
                src={service.icon}
                alt={service.title}
                priority
                width={150}
                height={150}
                className="w-[7.8rem] h-[7.8rem] mr-[2rem] mb-[10rem]"
              />
              <div className="font-dmsans">
                <p className="text-white-1 text-[2.6rem] font-medium leading-[3.2rem]">
                  {service.title}
                </p>
                <p className="text-grey-7 leading-[2.3rem mt-[1.2rem]">
                  {service.text}
                </p>
                <Link
                  href={service.link}
                  className="text-purple-3 mt-[2.2rem] flex items-center"
                >
                  <span> Learn more</span>
                  <IoIosArrowRoundForward className="text-current w-[2rem] h-[2rem] ml-[0.5rem]" />
                </Link>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default ExploreServices;
