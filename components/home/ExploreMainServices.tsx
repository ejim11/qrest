"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import service1Img from "../../assets/home/service1.svg";
import service2Img from "../../assets/home/service2.svg";
import { motion } from "framer-motion";
import SectionCard from "../SectionCard";
import HeaderText from "../HeaderText";

const ExploreMainServices = () => {
  const mainServicesData: {
    image: StaticImageData;
    title: string;
    text: string;
  }[] = [
    {
      image: service1Img,
      title: "Website and Application design",
      text: "At Qrest, we specialize in creating stunning websites and applications that not only look great but also provide exceptional user experiences. Our design process is all about understanding your needs and your audience, ensuring that every element serves a purpose.",
    },

    {
      image: service2Img,
      title: `Website and Application development`,
      text: `At Qrest, we take pride in our website and application development services that are tailored to meet your unique needs. Our skilled developers use the latest technologies and best practices to build robust, scalable, and high-performing digital solutions.`,
    },
  ];

  return (
    <SectionCard styles="flex items-center justify-center flex-col pb-[14rem] smd:pb-[8rem] bg-white-1">
      <div className="w-[55%] xlg:w-[75%] md:w-[90%] smd:w-full  text-center flex items-center justify-center flex-col">
        <HeaderText
          text="Explore our main services"
          styles="text-black-2 font-inter "
          paragraph="Bring all your business ideas, products, projects, Let’s create digital masterpieces that dazzle, and ensure your brand stays relevant and impressive."
          paragraphStyle="text-grey-1"
        />
      </div>

      <div className="w-full flex mt-[7.4rem] smd:mt-[4rem] items-center justify-center xlg:justify-between md:flex-wrap overflow-x-hidden">
        {mainServicesData.map(
          (
            service: {
              image: StaticImageData;
              title: string;
              text: string;
            },
            i: number
          ) => (
            <motion.div
              initial={{ opacity: 0, y: 40, x: i % 2 !== 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
              viewport={{ once: true }}
              key={i}
              className="w-[58.2rem] h-[81.2rem]   xlg:w-[48%] md:w-full xlg:mr-0  mr-[3.2rem] last:mr-0 rounded-[1.6rem] overflow-hidden relative md:mb-[3rem] md:last:mb-0 md:h-[41rem]"
            >
              <Image
                src={service.image}
                alt={`${service.title} image`}
                priority
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 py-[4.5rem] px-[3.2rem] ">
                <div
                  className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b ${
                    i % 2 !== 0
                      ? "from-[rgba(0,0,0,.05)] to-[rgba(0,0,0,1)]"
                      : "from-[rgba(235,235,235,0.3)] to-[rgba(235,235,235,1)] "
                  }  to-[100%] backdrop-blur-[0.5rem]  z-[10]`}
                ></div>
                <div className="z-[20] relative font-dmsans">
                  <p
                    className={`${
                      i % 2 !== 0 ? "text-white-1" : "text-black-1"
                    } font-medium text-[2.4rem] leading-[3rem] -tracking-[0.1rem] mb-[1.2rem]`}
                  >
                    {service.title}
                  </p>
                  <p
                    className={`${
                      i % 2 !== 0 ? "text-[#BDBBBE]" : "text-grey-1"
                    } leading-[2.4rem] sm:text-[1.5rem]`}
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </SectionCard>
  );
};

export default ExploreMainServices;
