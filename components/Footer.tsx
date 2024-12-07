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
        { link: "", text: "Solutions" },
        { link: "", text: "About us" },
        { link: "", text: "Our work" },
        { link: "", text: "Career" },
        { link: "", text: "Contact us" },
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
        { link: "", text: "+2341-234-5678" },
        { link: "", text: "website@qrest.ng" },
        { link: "", text: "Socials 1" },
        { link: "", text: "Socials 2" },
      ],
    },
  ];
  return (
    <footer className="bg-blue-1 py-[14rem] px-[9rem]">
      <div className="w-full flex">
        <div className="w-[40%]">
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
        <div className="flex flex-1 justify-between ml-[18rem]">
          {footerLinksData.map((link, i) => (
            <div key={i}>
              <p className="text-[2rem] font-dmsans font-medium text-white-1 capitalize mb-[2rem]">
                {link.title}
              </p>
              <ul>
                {link.links.map((linkObj, x) => (
                  <li key={x} className="mb-[1.6rem] last:mb-0">
                    <Link
                      href={linkObj.link}
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
