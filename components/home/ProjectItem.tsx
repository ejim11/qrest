/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project }: { project: any }) => {
  return (
    <Link
      href={`our-work/#${project.slug}`}
      className="px-[1rem] block smd:px-0 ring-0 focus:ring-0 outline-none active:ring-0 active:outline-none focus:outline-none"
    >
      <div className="w-full h-[43rem] overflow-hidden bg-purple-1">
        <Image
          src={project.image}
          alt={`${project.title} image`}
          priority
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-geist uppercase text-black-2 font-medium mb-[1.2rem] mt-[2.4rem]">
        {project.title}
      </p>
      <p className="text-grey-1 font-dmsans text-[2rem] sm:text-[1.5rem]">
        {project.text}
      </p>
    </Link>
  );
};

export default ProjectItem;
