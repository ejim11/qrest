"use client";
import React from "react";
import benefitImg1 from "../../assets/career/benefit1.svg";
import benefitImg2 from "../../assets/career/benefit2.svg";
import benefitImg3 from "../../assets/career/benefit3.svg";
import benefitImg4 from "../../assets/career/benefit4.svg";
import benefitImg5 from "../../assets/career/benefit5.svg";
import benefitImg6 from "../../assets/career/benefit6.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const BenefitsOfWorkingInOurTeam = () => {
  const data = [
    {
      image: benefitImg1,
      title: "Collaborative Environment",
      text: "Work alongside a passionate, innovative team where your ideas, input, and creativity are not only welcomed but actively encouraged.",
    },
    {
      image: benefitImg2,
      title: "Professional Growth",
      text: "We offer opportunities for continuous learning and development, helping you advance your career and sharpen your skills.",
    },
    {
      image: benefitImg3,
      title: "Exciting Projects",
      text: "Be part of groundbreaking projects across various industries, giving you exposure to diverse challenges and creative solutions.",
    },
    {
      image: benefitImg4,
      title: "Work-Life Balance",
      text: "We prioritize a healthy work-life balance, offering flexible working conditions to help you stay productive and energized.",
    },
    {
      image: benefitImg5,
      title: "Supportive Culture",
      text: "Our inclusive and positive company culture ensures that every team member feels supported, respected, and empowered to succeed.",
    },
    {
      image: benefitImg6,
      title: "Innovative Work Environment",
      text: "We encourage our team members to push the boundaries of creativity and think outside the box.",
    },
  ];

  return (
    <section className="py-[14rem] px-[9rem] bg-white-1 flex flex-col items-center">
      <div className="w-[60%] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="font-inter font-semibold text-[7.2rem] leading-[7.2rem] -tracking-[0.5rem] text-black-2 mb-[2rem]"
        >
          Benefits of Working in Our Team
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
          className="font-dmsans text-[2rem] leading-[3rem] text-grey-1"
        >
          Working at Qrest offers more than just a job, it’s an opportunity to
          grow and thrive in a collaborative, innovative environment. 
        </motion.p>
      </div>
      <div className="grid grid-cols-service-grid w-full gap-[5rem] mt-[8rem]">
        {data.map((benefit, i) => (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn", delay: i * 0.1 }}
            key={benefit.title}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={benefit.image}
              alt="benefit images"
              priority
              width={100}
              height={100}
              className="w-[5rem] h-[5rem]"
            />
            <p className="mt-[1.6rem] mb-[1rem] text-[2.2rem] font-medium -tracking-[0.1rem] text-black-1 font-dmsans">
              {benefit.title}
            </p>
            <p className="text-grey-1 font-dmsans leading-[2.4rem] -tracking-[0.1rem]">
              {benefit.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsOfWorkingInOurTeam;
