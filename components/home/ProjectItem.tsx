"use client";
import React from "react";
import Image from "next/image";

const ProjectItem = ({ project }: { project: any }) => {
  return (
    <div className="px-[1rem]">
      <Image
        src={project.image}
        alt={`${project.title} image`}
        priority
        width={1000}
        height={1000}
        className="w-[33.4rem] h-[43.2rem]"
      />
      <p className="font-geist uppercase text-black-2 font-medium mb-[1.2rem] mt-[2.4rem]">
        {project.title}
      </p>
      <p className="text-grey-1 font-dmsans text-[2rem]">{project.text}</p>
    </div>
  );
};

export default ProjectItem;
