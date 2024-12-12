/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";

const ProjectItem = ({ project }: { project: any }) => {
  return (
    <div className="px-[1rem] smd:px-0">
      <Image
        src={project.image}
        alt={`${project.title} image`}
        priority
        width={1000}
        height={1000}
        className="w-full h-[43.2rem]"
      />
      <p className="font-geist uppercase text-black-2 font-medium mb-[1.2rem] mt-[2.4rem]">
        {project.title}
      </p>
      <p className="text-grey-1 font-dmsans text-[2rem] sm:text-[1.5rem]">
        {project.text}
      </p>
    </div>
  );
};

export default ProjectItem;
