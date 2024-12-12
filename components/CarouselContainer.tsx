/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import {
  TbArrowBadgeRightFilled,
  TbArrowBadgeLeftFilled,
} from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { pastProjectsData } from "@/utils/pastProjectsData";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ProjectItem from "./home/ProjectItem";
import ClientFeedbackItem from "./home/ClientFeedbackItem";
import SectionCard from "./SectionCard";

const CarouselContainer = ({
  carouselTitleAndText,
  list,
  styles,
  title,
  slidesToShow,
  responsive,
}: {
  carouselTitleAndText: React.ReactNode;
  list: any[];
  styles?: string;
  title: string;
  slidesToShow?: number;
  responsive: any;
}) => {
  const iconContainer: string =
    "w-[5.6rem] h-[5.6rem] rounded-[0.6rem] bg-purple-1 flex items-center justify-center hover:bg-purple-3 transition-all duration-150 ease-in absolute -top-[12rem] smd:hidden";

  const iconClassName: string = "w-[2.8rem] h-[2.8rem] text-white-1 ";

  function NextArrow(props: any) {
    const { className, style, onClick } = props;

    return (
      <button className={`right-0 ${iconContainer}`} onClick={onClick}>
        <TbArrowBadgeRightFilled className={iconClassName} />
      </button>
    );
  }

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`mr-[1.6rem] right-[6rem]  ${iconContainer}`}
        onClick={onClick}
      >
        <TbArrowBadgeLeftFilled className={`${iconClassName}`} />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    speed: 500,
    slidesToShow: slidesToShow ?? 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: responsive,
    customPaging: function (i: any) {
      return <div className="  "></div>;
    },
  };

  return (
    <SectionCard
      styles={`${styles} pb-[14rem] smd:pb-[8rem] md:pb-[12rem] px-[9rem] `}
    >
      <div className="flex">
        <div className="flex-1">{carouselTitleAndText} </div>
        {/* <div className="flex ml-auto mt-auto">
          <button className={`mr-[1.6rem] ${iconContainer}`}>
            <TbArrowBadgeLeftFilled className={`${iconClassName} `} />
          </button>
          <button className={iconContainer}>
            <TbArrowBadgeRightFilled className={iconClassName} />
          </button>
        </div> */}
      </div>
      <div className="w-full mt-[6.4rem] smd:mt-[5rem]">
        {title === "projects" && (
          <Slider {...settings}>
            {list.map((project: any, i: number) => (
              <ProjectItem project={project} key={i} />
            ))}
          </Slider>
        )}
        {title === "clients" && (
          <Slider {...settings}>
            {list.map((client: any, i: number) => (
              <ClientFeedbackItem
                key={i}
                title={client.title}
                text={client.text}
                clientName={client.clientName}
              />
            ))}
          </Slider>
        )}
      </div>
    </SectionCard>
  );
};

export default CarouselContainer;
