"use client";
import React, { useEffect } from "react";
import FirstSection from "../FirstSection";
import SecondSec from "./SecondSec";
import { motion } from "framer-motion";
import ExploreServices from "./ExploreServices";
import WhyChooseQrest from "./WhyChooseQrest";
import ExploreMainServices from "./ExploreMainServices";
import CarouselContainer from "../CarouselContainer";
import Button from "../Button";
import { hearFromClients, pastProjectsData } from "@/utils/pastProjectsData";
import MasterYourCraft from "./MasterYourCraft";
import ContactUs from "./ContactUs";
import Video from "../Video";
import HeaderText from "../HeaderText";

const HomeComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);

  const projectsSlideResponsive = [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 4000,
      },
    },
  ];

  const clientsSlideResponsive = [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 4000,
      },
    },
  ];

  return (
    <main>
      <FirstSection bg="bg-home-1 sm:bg-home-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="text-white-1 text-[10rem] xlg:text-[8rem] md:text-[6rem] md:leading-[6rem] smd:leading-[4.6rem] smd:-tracking-[0.1rem] smd:text-[5rem] text-center font-inter font-semibold -tracking-[0.5rem] leading-[10rem]  w-[85%] lg:w-[90%] xmd:w-full "
        >
          Empowering brand with custom{" "}
          <span className="text-purple-2">solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.3 }}
          className="mt-[2.4rem] text-[2.4rem] smd:text-[1.78rem] text-white-2 w-[55%] xlg:w-[70%] lg:w-[90%] xmd:w-full font-dmsans leading-[3.4rem] text-center mb-[3.6rem] sm:leading-[2.6rem]"
        >
          Bring all your projects together, create a portfolio that dazzles, and
          ensure your brand stays relevant and impressive.
        </motion.p>
        <Button
          text="Book a free call"
          styles="mb-[10rem] py-[1.6rem] px-[2rem] smd:text-[1.78rem] smd:mb-[4.5rem] smd:w-full smd:justify-between"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.7 }}
          className="w-[75%] xlg:w-[85%]  lg:w-[90%] xmd:w-full bg-transparent flex items-start rounded-[1.2rem] overflow-hidden"
        >
          <Video />
        </motion.div>
      </FirstSection>
      <SecondSec />
      <ExploreServices />
      <WhyChooseQrest />
      <ExploreMainServices />
      <CarouselContainer
        list={pastProjectsData}
        title="projects"
        carouselTitleAndText={
          <div className="w-[50%] xmd:w-[60%] md:w-[75%] smd:w-full">
            <HeaderText
              text=" Our Past Projects"
              styles="text-black-2 font-inter "
              paragraphStyle="text-grey-1  mb-[3.2rem] smd:mb-[2rem] "
              paragraph="From innovative designs to impactful projects, our gallery
              highlights the diverse and impressive work created using
              WorkGallery"
            />
            <Button
              text={"View all"}
              styles="px-[4rem] py-[1.4rem] smd:text-[2rem] smd:w-full smd:justify-between "
            />
          </div>
        }
        responsive={projectsSlideResponsive}
      />
      <MasterYourCraft />
      <CarouselContainer
        list={hearFromClients}
        styles="pt-[14rem] smd:pt-[8rem] md:pt-[12rem] bg-[#F9FAFB]"
        slidesToShow={3}
        title="clients"
        carouselTitleAndText={
          <div className="w-[55%] xmd:w-[60%] md:w-[75%] smd:w-full">
            <HeaderText
              text="Hear from our clients"
              styles="text-black-2 font-inter "
              paragraphStyle="text-grey-1  mb-[3.2rem] smd:mb-[2rem] "
              paragraph=" FLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolo."
            />
          </div>
        }
        responsive={clientsSlideResponsive}
      />
      <ContactUs />
    </main>
  );
};

export default HomeComp;
