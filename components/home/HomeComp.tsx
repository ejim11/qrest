"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import home1Img from "../../assets/home/home-1.png";
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

const HomeComp = () => {
  useEffect(() => {
    window.scrollTo({ top: -90, behavior: "smooth" });
  }, []);
  return (
    <main>
      <FirstSection>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="text-white-1 text-[10rem] text-center font-inter font-semibold -tracking-[0.5rem] leading-[10rem]  w-[85%]"
        >
          Empowering brand with custom{" "}
          <span className="text-purple-2">solutions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          className="mt-[2.4rem] text-[2.4rem] text-white-2 w-[55%] font-dmsans leading-[3.4rem] text-center mb-[3.6rem]"
        >
          Bring all your projects together, create a portfolio that dazzles, and
          ensure your brand stays relevant and impressive.
        </motion.p>
        <Button
          text="Book a free call"
          styles="mb-[10rem] py-[1.6rem] px-[2rem]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
          className="w-[75%] h-[74rem]"
        >
          <Image
            src={home1Img}
            alt="first home image"
            priority
            width={1000}
            height={700}
            className="w-full h-full"
          />
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
          <div className="w-[50%]">
            <h2 className="text-[7.2rem] font-inter leading-[7.2rem] -tracking-[0.5rem] font-semibold text-black-2 mb-[2rem]">
              Our Past Projects
            </h2>
            <p className="text-[2rem] text-grey-1 font-dmsans mb-[2rem]">
              From innovative designs to impactful projects, our gallery
              highlights the diverse and impressive work created using
              WorkGallery
            </p>
            <Button text={"View all"} styles="px-[4rem] py-[1.4rem] " />
          </div>
        }
      />
      <MasterYourCraft />
      <CarouselContainer
        list={hearFromClients}
        styles="pt-[14rem] bg-[#F9FAFB]"
        slidesToShow={3}
        title="clients"
        carouselTitleAndText={
          <div className="w-[55%]">
            <h2 className="text-[7.2rem] font-inter leading-[7.2rem] -tracking-[0.5rem] font-semibold text-black-2 mb-[2rem]">
              Hear from our clients
            </h2>
            <p className="text-[2rem] text-grey-1 font-dmsans mb-[2rem]">
              FLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolo.
            </p>
          </div>
        }
      />
      <ContactUs />
    </main>
  );
};

export default HomeComp;
