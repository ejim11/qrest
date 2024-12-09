"use client";
import { motion } from "framer-motion";
import React from "react";

const JobsAvailable = () => {
  const data = [
    {
      title: "No Job Available",
      text: "At this time, we do not have any job openings available at Qrest. However, we encourage you to check back regularly as our team continues to grow and evolve. We are always on the lookout for talented individuals who are passionate about digital solutions and innovation.",
    },
    {
      title: "Senior Videographer",
      text: "Join our innovative and fast-growing team as a Creative Videographer! We are seeking a skilled professional with 4+ years of experience in videography, video editing, and storytelling to help bring our creative visions to life. ",
      link: "mailto:website@qrest.ng",
      linkText: "email us",
    },
    {
      title: "Junior UIUX Designer",
      text: "We are looking for a talented designer with at least 1 year of experience in creating intuitive, user-centered digital experiences across web and mobile platforms. ",
      link: "mailto:website@qrest.ng",
      linkText: "email us",
    },
  ];

  return (
    <section className="px-[9rem] py-[14rem] bg-[#0E0A1D]">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="font-inter font-semibold text-[7.2rem] leading-[7.5rem] -tracking-[0.5rem] text-white-1 mb-[2rem]"
      >
        Jobs Available
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
        className="font-dmsans text-[2rem] leading-[3rem] text-white-2"
      >
        Check out our current openings and take the next step in your career
        with Qrest. We’re always looking for talented, passionate individuals to
        join our team and contribute to our mission of delivering innovative
        digital solutions.
      </motion.p>
      <div className="mt-[8rem] grid grid-cols-service-grid gap-[5rem]">
        {data.map((data, i) => (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.1 }}
            key={data.title}
            className="bg-blue-1 border border-[#1D2134] rounded-[1.6rem] px-[2.4rem] py-[2.8rem] flex flex-col"
          >
            <p className="text-[3.2rem] font-inter font-medium -tracking-[0.2rem] text-[#BCABFF] mb-[2.8rem]">
              {data.title}
            </p>
            <p className="text-white-2 font-dmsans leading-[2.5rem] mb-[2.4rem]">
              {data.text}
            </p>
            {data.linkText && (
              <a
                href={data.link}
                className="block mt-auto text-white-1 font-dmsans leading-[2.5rem] capitalize underline hover:text-purple-4 transition-all ease-in duration-150 cursor-pointer"
              >
                {data.linkText}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobsAvailable;
