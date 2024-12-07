"use client";
import React from "react";
import { pastProjectsData } from "@/utils/pastProjectsData";
import { StaticImageData } from "next/image";
import Image from "next/image";

const PastProjectsList = () => {
  return (
    <>
      {pastProjectsData.map(
        (
          project: { image: StaticImageData; title: string; text: string },
          i: number
        ) => (
          <div key={i}>
            <Image
              src={project.image}
              alt={`${project.title} image`}
              priority
              width={1000}
              height={1000}
              className="w-full h-full"
            />
            <p>{project.title}</p>
            <p>{project.text}</p>
          </div>
        )
      )}
    </>
  );
};

export default PastProjectsList;
