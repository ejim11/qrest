"use client";
import React from "react";
import Image from "next/image";
import quoteImg from "../../assets/home/quote-right-svgrepo-com 1.svg";

const ClientFeedbackItem = ({
  title,
  text,
  clientName,
}: {
  title: string;
  text: string;
  clientName: string;
}) => {
  return (
    <div className="pr-[2.8rem] smd:pr-0">
      <div className="bg-white-1 shadow-[0_0_43.8px_0px_rgba(0,0,0,0.05)] px-[2.6rem] py-[2.9rem]  rounded-[1.6rem] ">
        <Image
          src={quoteImg}
          alt="quote icon"
          priority
          width={50}
          height={50}
          className="w-[3.2rem] h-[3.2rem]"
        />
        <p className="text-[1.8rem] mt-[1.5rem] font-dmsans font-medium mb-[3rem] text-black-1">
          {title}
        </p>
        <p className="leading-[2.4rem] sm:text-[1.5rem] font-dmsans text-grey-3">
          {text}
        </p>
      </div>
      <div className="flex items-center mt-[1rem]">
        <div className="w-[4.2rem] h-[4.2rem] rounded-full bg-grey-4 mr-[1rem]"></div>
        <div className="font-dmsans">
          <p className="text-[1.8rem] font-medium text-black-1">{clientName}</p>
          <p className="uppercase text-[1.2rem] mt-[0.4rem] font-bold text-grey-3">
            position in the company
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedbackItem;
