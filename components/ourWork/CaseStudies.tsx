"use client";
import { works } from "@/utils/works";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";

const CaseStudies = () => {
  const [choosenFilters, setChoosenFilters] = useState<string[]>([]);

  const filters = [
    "digital branding",
    "software development",
    "ui/ux design",
    "web design",
    "digital marketing",
    "frontend development",
    "backend development",
    "seo",
    "web development",
    "mobile development",
    "social media management",
    "graphics design",
    "videography",
  ];

  return (
    <section className="px-[9rem] py-[14rem] items-center flex flex-col">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="text-[8rem] leading-[7.5rem] -tracking-[0.5rem] font-inter font-semibold mb-[2rem] text-black-2"
      >
        Our Case Studies
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="text-[2.4rem] leading-[3.6rem] font-dmsans text-grey-2 w-[70%] text-center"
      >
        Each case study illustrates our expertise in branding, custom software
        development, and digital marketing, demonstrating the tangible results
        we&apos;ve achieved together.
      </motion.p>
      <div className="mt-[6.4rem] flex flex-col items-center">
        <p className="text-[2.4rem] text-black-2 font-dmsans font-medium mb-[3.2rem]">
          Filter with Tags:
        </p>
        <div className="flex justify-center w-[80%] flex-wrap items-start ">
          {filters.map((filter: string, i: number) => (
            <motion.button
              onClick={() => {
                if (choosenFilters.includes(filter)) {
                  const filteredList = choosenFilters
                    .slice()
                    .filter((fil: string) => fil !== filter);
                  setChoosenFilters(filteredList);
                  return;
                }
                setChoosenFilters((prevState) => [...prevState, filter]);
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.1 }}
              key={filter}
              className={`px-[2.3rem] py-[1rem]  mr-[2.4rem] mb-[2rem] last:mb-0 last:mr-0 rounded-[2.5rem] capitalize  font-dmsans text-[2rem] hover:bg-purple-3 ease-in transition-all duration-150 hover:text-white-1 ${
                choosenFilters.includes(filter)
                  ? "bg-purple-2 text-white-1"
                  : "bg-[#F7F7F7] text-black-2"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-[12rem] items-center">
        {works
          .filter((work) => {
            if (choosenFilters.length <= 0) {
              return true;
            }
            return work.tags.some((tag) => choosenFilters.includes(tag));
          })
          .map(
            (
              work: {
                title: string;
                text: string;
                link: string;
                image: StaticImageData;
                tags: string[];
                year: string;
                linkText: string;
              },
              i: number
            ) => (
              <div
                key={i}
                className="flex flex-col items-center mb-[12rem] w-[80%] last:mb-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className="flex items-baseline "
                >
                  <h2 className="font-inter font-semibold text-[6.4rem] -tracking-[0.5rem] mr-[1.6rem] text-black-2">
                    {work.title}
                  </h2>
                  <span className="text-grey-1 font-dmsans leading-[2.9rem] text-[2rem]">
                    {work.year}
                  </span>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
                  className="text-center font-dmsans leading-[2.9rem] text-[2rem] text-grey-1 my-[3.2rem]"
                >
                  {work.text}
                </motion.p>
                <div className="flex justify-center  flex-wrap items-start">
                  {work.tags.map((tag, i) => (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        ease: "easeIn",
                        delay: i * 0.15,
                      }}
                      key={tag + i}
                      className="px-[2.3rem] py-[1rem] bg-[#F7F7F7] mr-[2.4rem] mb-[2rem] last:mb-0 last:mr-0 rounded-[2.5rem] capitalize text-black-2 font-dmsans text-[2rem] "
                    >
                      {tag}
                    </motion.p>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  <Link
                    href={work.link}
                    className={` flex items-center text-white-1 font-inter bg-purple-2  rounded-[0.6rem] px-[2.8rem] py-[1.4rem] mb-[3.2rem]`}
                  >
                    <span className="font-medium capitalize font-inter ">
                      {work.linkText}
                    </span>
                    <RiArrowRightUpLine className="text-current w-[2rem] h-[2rem] ml-[2rem]" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className="w-[100rem] h-[64rem]"
                >
                  <Image
                    src={work.image}
                    alt={`${work.title} image`}
                    priority
                    width={1200}
                    height={1000}
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default CaseStudies;
