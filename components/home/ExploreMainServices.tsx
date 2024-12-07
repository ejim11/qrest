"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import service1Img from "../../assets/home/service1.svg";
import service2Img from "../../assets/home/service2.svg";
import { motion } from "framer-motion";

const ExploreMainServices = () => {
  const mainServicesData: {
    image: StaticImageData;
    title: string;
    text: string;
  }[] = [
    {
      image: service1Img,
      title: "Website and Application design",
      text: "At Qrest, we leverage the latest tools and technologies to create innovative digital experiences that give you a competitive edge in the market.",
    },

    {
      image: service2Img,
      title: `Website and Application development`,
      text: `At Qrest, we leverage the latest tools and technologies to create innovative digital experiences that give you a competitive edge in the market.`,
    },
  ];

  return (
    <section className="flex items-center justify-center flex-col pb-[14rem] bg-white-1">
      <div className="w-[50%] text-center flex items-center justify-center flex-col">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-[7.2rem] font-inter font-semibold leading-[7.2rem] -tracking-[0.5rem] text-black-2 mb-[1.6rem]"
        >
          Explore our main services
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          viewport={{ once: true }}
          className="w-[80%] text-[2rem] leading-[2.9rem] text-grey-1 font-dmsans"
        >
          Bring all your projects together, create a portfolio that dazzles, and
          ensure your brand stays relevant and impressive.
        </motion.p>
      </div>

      <div className="w-full flex mt-[7.4rem] items-center justify-center">
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
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
              viewport={{ once: true }}
              key={i}
              className="w-[58.2rem] h-[81.2rem] mr-[3.2rem] last:mr-0 rounded-[1.6rem] overflow-hidden relative"
            >
              <Image
                src={service.image}
                alt={`${service.title} image`}
                priority
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              <div className="absolute bottom-0 py-[4.5rem] px-[3.2rem] ">
                <div
                  className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b ${
                    i % 2 !== 0
                      ? "from-[rgba(0,0,0,.05)] to-[rgba(0,0,0,1)]"
                      : "from-[rgba(235,235,235,0.3)] to-[rgba(235,235,235,1)] "
                  }  to-[100%] blured-box backdrop-blur-[0.5rem]  z-[10]`}
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
                    } leading-[2.4rem]`}
                  >
                    {service.text}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default ExploreMainServices;
