"use client";
import React from "react";
import Image from "next/image";
import logo2 from "../assets/logo2.svg";
import Link from "next/link";

const Footer = () => {
  const footerLinksData = [
    {
      title: "explore",
      links: [
        { link: "/", text: "Solutions" },
        { link: "/about-us", text: "About us" },
        { link: "/our-work", text: "Our work" },
        { link: "/career", text: "Career" },
        { link: "/contact", text: "Contact us" },
      ],
    },
    {
      title: "features",
      links: [
        { link: "", text: "Digital Branding" },
        { link: "", text: "UI/UX Design" },
        { link: "", text: "Software development" },
        { link: "", text: "Digital Marketing" },
      ],
    },
    {
      title: "contact",
      links: [
        { link: "", text: "+2348107171280" },
        {
          link: "mailto:Qrestcompany@gmail.com",
          text: "Qrestcompany@gmail.com",
        },
        {
          link: "https://www.linkedin.com/company/qrest-software-development-company/posts/?feedView=all",
          text: "Linkedin",
        },
        {
          link: "https://www.instagram.com/qrest_software_development?igsh=MTZxZjBtNjgxamh3dg==",
          text: "Instagram",
        },
        { link: "", text: "Facebook" },
      ],
    },
  ];
  return (
    <footer className="bg-blue-1 py-[14rem] smd:py-[8rem] md:py-[12rem] px-[9rem] 2xl:px-[5rem] xlg:px-[3rem] smd:px-[2rem]">
      <div className="w-full flex md:flex-wrap">
        <div className="w-[40%] md:w-full smd:flex smd:flex-col smd:items-center smd:text-center">
          <Image
            src={logo2}
            alt="logo icon"
            priority
            width={150}
            height={150}
            className="w-[6rem] h-[9rem] mb-[3.4rem]"
          />
          <p className="font-dmsans leading-[2.6rem] text-white-3">
            Qrest is dedicated to delivering powerful growth solutions that
            empower businesses to not only thrive but also excel in an
            increasingly competitive landscape, where adaptability and
            innovation are essential for success
          </p>
        </div>
        <div className="flex flex-1 smd:flex-col smd:items-center smd:justify-start justify-between ml-[18rem] lg:ml-[9rem] xmd:ml-[5rem] md:ml-0 md:mt-[5rem]">
          {footerLinksData.map((link, i) => (
            <div key={i} className="smd:mb-[5rem] smd:text-center">
              <p className="text-[2rem] font-dmsans font-medium text-white-1 capitalize mb-[2rem]">
                {link.title}
              </p>
              <ul>
                {link.links.map((linkObj, x) => (
                  <li key={x} className="mb-[1.6rem] last:mb-0">
                    <Link
                      href={linkObj.link}
                      target="blank"
                      className="text-grey-2 leading-[2.4rem] hover:text-purple-4 transition-all ease-in duration-150"
                    >
                      {linkObj.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
