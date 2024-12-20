"use client";
import { works } from "@/utils/works";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import SectionCard from "../SectionCard";

const CaseStudies = () => {
  const [choosenFilters, setChoosenFilters] = useState<string[]>([]);

  const filters = [
    "digital branding",
    "software development",
    "UI/UX design",
    "web design",
    "digital marketing",
    "frontend development",
    "backend development",
    "seo",
    "web development",
    "mobile development",
    "social media management",
    "graphics design",
    "video Editing",
  ];

  return (
    <SectionCard styles=" py-[14rem] smd:py-[8rem] md:py-[12rem] items-center flex flex-col">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="text-[8rem] xlg:text-[6rem] xmd:text-[5rem] smd:text-[4rem] smd:-tracking-[0.1rem] smd:leading-[4rem]  leading-[7.5rem]  -tracking-[0.5rem] font-inter font-semibold mb-[2rem] text-black-2"
      >
        Our Case Studies
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="text-[2.4rem]  sm:text-[1.5rem] sm:leading-[2.2rem] leading-[3.6rem] font-dmsans text-grey-2 w-[70%]  lg:w-[90%] xmd:w-full text-center"
      >
        Each case study illustrates our expertise in branding, custom software
        development, and digital marketing, demonstrating the tangible results
        we&apos;ve achieved together.
      </motion.p>
      <div className="mt-[6.4rem] sm:mt-[3.5rem] flex flex-col items-center">
        <p className="text-[2.4rem] sm:text-[2rem] text-black-2 font-dmsans font-medium mb-[3.2rem]">
          Filter with Tags:
        </p>
        <div className="flex justify-center w-[80%] lg:w-[90%] xmd:w-full flex-wrap items-start ">
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
              className={`px-[2.3rem] py-[1rem] sm:text-[1.5rem] sm:leading-[2.2rem]   mr-[2.4rem] mb-[2rem] last:mb-0 last:mr-0 rounded-[2.5rem] capitalize  font-dmsans text-[2rem] hover:bg-purple-3 ease-in transition-all duration-150 hover:text-white-1 ${
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
      <div className="flex flex-col mt-[12rem] smd:mt-[10rem] sm:mt-[8rem] items-center">
        {works
          .filter((work) => {
            if (choosenFilters.length <= 0) {
              return true;
            }
            console.log(choosenFilters.join(",").includes("UI/UX design"));
            console.log(work.tags);
            console.log(work.tags.some((tag) => choosenFilters.includes(tag)));
            return work.tags.some((tag) =>
              choosenFilters
                .map((filter) => filter.toLowerCase())
                .includes(tag.toLowerCase())
            );
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
                slug: string;
              },
              i: number
            ) => (
              <div
                id={work.slug}
                key={i}
                className="flex flex-col items-center mb-[12rem] smd:mb-[10rem] sm:mb-[8rem] w-[80%] lg:w-[90%] xmd:w-full last:mb-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className="flex items-baseline justify-center"
                >
                  <h2 className="font-inter font-semibold text-[6.4rem] xlg:text-[6rem] xmd:text-[5rem] smd:text-[4rem] smd:-tracking-[0.1rem] smd:leading-[4rem] -tracking-[0.4rem] mr-[1.6rem] text-black-2">
                    {work.title}
                  </h2>
                  <span className="text-grey-1 font-dmsans leading-[2.9rem] sm:text-[1.5rem] sm:leading-[2.2rem] text-[2rem]">
                    {work.year}
                  </span>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
                  className="text-center font-dmsans leading-[2.9rem] text-[2rem] sm:text-[1.5rem] sm:leading-[2.2rem] text-grey-1 my-[3.2rem] sm:mt-[1.7rem] sm:mb-[2.7rem]"
                >
                  {work.text}
                </motion.p>
                <div className="flex justify-center  flex-wrap items-start ">
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
                      className="px-[2.3rem] py-[1rem] bg-[#F7F7F7] mr-[2.4rem] mb-[2rem] last:mr-0 rounded-[2.5rem] capitalize text-black-2 font-dmsans text-[2rem] sm:text-[1.5rem] sm:leading-[2.2rem] "
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
                  className="sm:mt-[0.5rem] smd:w-full mb-[3.2rem] sm:mb-[2.2rem]"
                >
                  <Link
                    href={work.link}
                    target="blank"
                    className={` smd:justify-between flex items-center text-white-1 font-inter bg-purple-2  rounded-[0.6rem] px-[2.8rem] py-[1.4rem] hover:bg-purple-1 transition-all duration-150 ease-in `}
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
                  className="w-[100rem] lg:w-full h-[64rem] sm:h-auto"
                >
                  <Image
                    src={work.image}
                    alt={`${work.title} image`}
                    priority
                    width={1200}
                    height={1000}
                    className="w-full h-full sm:object-contain"
                  />
                </motion.div>
              </div>
            )
          )}
      </div>
    </SectionCard>
  );
};

export default CaseStudies;
