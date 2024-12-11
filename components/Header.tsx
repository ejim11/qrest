"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import appContext from "@/context/appContext";
import SupportSubComp from "./SolutionsSubComp";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const ctx = useContext(appContext);

  const pathname = usePathname();

  const navLinks = [
    {
      text: "Solutions",
      subComponent: <SupportSubComp />,
    },
    {
      link: "/about-us",
      text: "About us",
    },
    {
      link: "/our-work",
      text: "Our work",
    },
    {
      link: "/career",
      text: "Career",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];

  console.log(ctx.isHeaderSticky);

  return (
    <header
      className={` h-[7rem] w-full flex items-center px-[9rem] transition-all ease-in duration-150  ${
        ctx.isHeaderSticky
          ? "fixed top-0 z-40 bg-blue-1 showHeader"
          : "relative bg-black-1"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="qrest logo image"
          priority
          width={100}
          height={100}
          className="w-[4rem] h-[4rem]"
        />
      </Link>

      <div className="flex items-center flex-1 ">
        <nav className="flex items-center mx-auto">
          {navLinks.map((item, i: number) => {
            if (item.link) {
              return (
                <Link
                  key={i}
                  href={item.link}
                  className={` ${
                    pathname.includes(item.link)
                      ? "text-purple-3"
                      : "text-grey-4 "
                  } mr-[5rem] hover:text-white-1 transition-all duration-150 ease-in last:mr-0`}
                >
                  {item.text}
                </Link>
              );
            }

            return (
              <motion.button
                // whileTap={{ scale: 0.97 }}
                onMouseEnter={() => {
                  // if (ctx.solutionsModalIsOpen) {
                  //   ctx.setSolutionsModalIsOpen(false);
                  //   return;
                  // }
                  ctx.setSolutionsModalIsOpen(true);
                }}
                onMouseLeave={() => {
                  ctx.setSolutionsModalIsOpen(false);
                }}
                key={i}
                className={`${
                  ctx.solutionsModalIsOpen ? "text-purple-3" : "text-grey-4"
                } flex items-center mr-[5rem] cursor-pointer hover:text-purple-3 transition-all duration-150 ease-in`}
              >
                <p>{item.text}</p>
                <GoChevronDown
                  className={`text-current ml-[0.5rem] w-[2rem] h-[2rem] transition-all duration-150 ease-in ${
                    ctx.solutionsModalIsOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                <AnimatePresence>
                  {ctx.solutionsModalIsOpen && item.subComponent}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </nav>
        <button className="bg-pink-1 text-white-1 py-[1.25rem] px-[2.6rem] rounded-[0.6rem]">
          Book a service
        </button>
      </div>
    </header>
  );
};

export default Header;
