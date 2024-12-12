"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import appContext from "@/context/appContext";
import SupportSubComp from "./SolutionsSubComp";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import menuIcon from "../assets/menu.svg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);

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

  const toggleMenuIsVisible = () => {
    setMenuIsVisible((prevState) => !prevState);
  };

  return (
    <header
      className={` h-[7rem] w-full flex items-center px-[9rem] 2xl:px-[5rem] xlg:px-[3rem] smd:px-[2rem] transition-all ease-in duration-150  ${
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

      <div
        className={` ${
          menuIsVisible
            ? "md:translate-x-0 md:opacity-100 md:visible"
            : "md:-translate-x-[100%] md:opacity-0 md:invisible"
        }  flex items-center flex-1 md:fixed md:top-0 md:z-[120] md:bg-[rgba(0,0,0,0.8)]  md:h-screen md:w-screen md:bottom-0 md:left-0 md:right-0 md:items-start md:justify-between md:transition-all md:duration-150 md:ease-in`}
      >
        <div
          className={` flex-1 flex items-center md:flex-col md:bg-blue-1  md:items-start md:h-full md:flex-[0.6] smd:flex-[0.75] sm:flex-[0.9] md:p-[2rem]`}
        >
          <nav className="flex items-center mx-auto md:mx-0 md:flex-col md:items-start">
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
                    } mr-[5rem] hover:text-white-1 transition-all duration-150 ease-in last:mr-0 md:mr-0 md:py-[1.5rem]`}
                  >
                    {item.text}
                  </Link>
                );
              }

              return (
                <motion.button
                  onMouseOver={() => {
                    if (isTabletOrMobile) {
                      return;
                    }
                    ctx.setSolutionsModalIsOpen(true);
                  }}
                  onClick={() => {
                    if (!isTabletOrMobile) {
                      return;
                    }
                    if (ctx.solutionsModalIsOpen) {
                      ctx.setSolutionsModalIsOpen(false);
                      return;
                    }
                    ctx.setSolutionsModalIsOpen(true);
                  }}
                  onMouseOut={() => {
                    if (isTabletOrMobile) {
                      return;
                    }
                    ctx.setSolutionsModalIsOpen(false);
                  }}
                  key={i}
                  className={`${
                    ctx.solutionsModalIsOpen ? "text-purple-3" : "text-grey-4"
                  } flex items-center mr-[5rem] cursor-pointer hover:text-purple-3 md:pb-[1.5rem] transition-all duration-150 ease-in md:flex-col md:items-start md:w-full `}
                >
                  <div className="flex items-center">
                    <p>{item.text}</p>
                    <GoChevronDown
                      className={`text-current ml-[0.5rem] w-[2rem] h-[2rem] transition-all duration-150 ease-in ${
                        ctx.solutionsModalIsOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {ctx.solutionsModalIsOpen && item.subComponent}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </nav>
          <button className="bg-pink-1 text-white-1 py-[1.25rem] md:mt-[1.5rem] px-[2.6rem] rounded-[0.6rem]">
            Book a service
          </button>
        </div>
        <IoMdClose
          className="w-[4rem] h-[4rem] text-white-1 hidden md:block mr-[3rem] mt-[2rem]"
          onClick={toggleMenuIsVisible}
        />
      </div>
      {!menuIsVisible && (
        <div
          className="w-[5rem] h-[5rem] ml-auto hidden md:block"
          onClick={toggleMenuIsVisible}
        >
          <Image
            src={menuIcon}
            alt="menu icon image"
            priority
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
      )}
    </header>
  );
};

export default Header;
