"use client";
import React from "react";
import master1Img from "../../assets/home/master1.png";
import master2Img from "../../assets/home/master2.png";
import master3Img from "../../assets/home/master3.png";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Image from "next/image";
import { VscArrowSmallRight } from "react-icons/vsc";
import Link from "next/link";

const MasterYourCraft = () => {
  const masterYourCraftData: {
    image: StaticImageData;
    title: string;
    text: string;
    link: string;
    linkText: string;
  }[] = [
    {
      image: master1Img,
      title: "Career",
      text: "Your journey toward a fulfilling and impactful career starts here.",
      link: "",
      linkText: "view jobs",
    },
    {
      image: master2Img,
      title: "About us",
      text: "Dive into our extensive library of articles, guides, and tutorials.",
      link: "",
      linkText: "Read more",
    },
    {
      image: master3Img,
      title: "Digital Marketing",
      text: "get hands-on with our step-by-step tutorials and how-to guides.",
      link: "",
      linkText: "Read more",
    },
  ];

  return (
    <section className="py-[14rem] px-[9rem] bg-black-1 flex flex-col items-center">
      <div className="text-center flex items-center flex-col">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="text-white-1 text-[7.2rem] font-inter font-semibold leading-[7.2rem] -tracking-[0.5rem]"
        >
          Master your craft with Resources
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
          className="text-[2rem] leading-[2.9rem] font-dmsans text-white-2 w-[60%] mt-[2.3rem]"
        >
          Unlock your full potential with resources designed to empower your
          professional journey.
        </motion.p>
      </div>
      <div className="mt-[8rem] grid grid-cols-3 gap-[1.6rem]">
        {masterYourCraftData.map(
          (
            data: {
              image: StaticImageData;
              title: string;
              text: string;
              link: string;
              linkText: string;
            },
            i: number
          ) => (
            <motion.div
              initial={{ opacity: 0, x: i * -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
              viewport={{ once: true }}
              key={i}
              className="w-full h-full  border border-black-4 rounded-[0.6rem] overflow-hidden"
            >
              <motion.div className="w-full h-[52.6rem] mr-[3.2rem] last:mr-0 rounded-[.4rem] overflow-hidden relative">
                <Image
                  src={data.image}
                  alt={`${data.title} image`}
                  priority
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 top-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(255,255,255,0.05)] to-[rgba(0,0,0,0.9)] to-[100%] py-[4.5rem] px-[3.2rem] ">
                  <div className="z-[20] relative font-dmsans flex justify-end h-full  flex-col">
                    <p
                      className={`
                text-white-1 font-medium text-[2rem]   mb-[1.3rem]`}
                    >
                      {data.title}
                    </p>
                    <p className={`font-dmsans text-grey-2 leading-[2.4rem]`}>
                      {data.text}
                    </p>
                    <Link
                      href={data.link}
                      className="flex items-center text-white-1 text-[1.4rem] leading-[2.3rem] font-dmsans font-medium capitalize mt-[1rem] hover:text-purple-4 transition-all duration-150 ease-in"
                    >
                      <span>{data.linkText}</span>
                      <VscArrowSmallRight className="w-[2.4rem] h-[2.4rem] text-current" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default MasterYourCraft;
