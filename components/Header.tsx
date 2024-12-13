"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import Link from "next/link";
import appContext from "@/context/appContext";
import SupportSubComp from "./SolutionsSubComp";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import menuIcon from "../assets/menu.svg";
import { IoMdClose } from "react-icons/io";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
  const isMobileView = useMediaQuery({ query: "(max-width: 850px)" });

  const ctx = useContext(appContext);

  const toggleMenuIsVisible = () => {
    setMenuIsVisible((prevState) => !prevState);
  };

  const navLinks = [
    {
      text: "Solutions",
      subComponent: <SupportSubComp onClick={toggleMenuIsVisible} />,
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
      <AnimatePresence>
        {menuIsVisible && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              // height: isMobileView ? 0 : undefined,
            }}
            animate={{
              opacity: 1,
              // height: isMobileView ? "100vh" : undefined,
              transition: { duration: 0.01 },
            }}
            exit={{
              opacity: 0,
              // height: isMobileView ? "0%" : undefined,
            }}
            transition={{ ease: "easeIn", duration: 0.2 }}
            className={`  md:flex hidden  items-center flex-1 md:absolute  md:top-[7rem] md:z-[120] md:bg-[rgba(0,0,0,0.4)]  md:h-screen md:w-screen md:bottom-0 md:left-0 md:right-0 md:items-start md:justify-between md:transition-all md:duration-150 md:ease-in`}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0  backdrop-blur-[0.5rem] z-[50]"></div>
            <div
              className={` flex-1 z-[90] items-center md:flex-col md:bg-black-1  md:items-start md:h-auto md:p-[2rem]`}
            >
              <HeaderNav navLinks={navLinks} onClick={toggleMenuIsVisible} />
              <motion.button
                // initial={{ opacity: isMobileView ? 0 : undefined }}
                // animate={{ opacity: isMobileView ? 1 : undefined }}
                // transition={{ delay: isMobileView ? 0.01 : undefined }}
                className="bg-pink-1 text-white-1 py-[1.8rem] md:mt-[1.5rem] mb-[1.5rem] px-[2.6rem] md:w-full rounded-[0.6rem]"
              >
                Book a service
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={` flex items-center md:hidden flex-1 md:absolute md:top-[7rem] md:z-[120] md:bg-[rgba(0,0,0,0.8)]  md:h-screen md:w-screen md:bottom-0 md:left-0 md:right-0 md:items-start md:justify-between md:transition-all md:duration-150 md:ease-in`}
      >
        <div
          className={` flex-1 flex items-center  md:flex-col md:bg-black-1  md:items-start md:h-auto md:p-[2rem]`}
        >
          <HeaderNav navLinks={navLinks} />
          <button className="bg-pink-1 text-white-1 py-[1.25rem] md:mt-[1.5rem] px-[2.6rem] rounded-[0.6rem]">
            Book a service
          </button>
        </div>
      </div>
      {!menuIsVisible ? (
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
      ) : (
        <IoMdClose
          className="w-[4rem] h-[4rem] text-white-1 hidden md:block ml-auto"
          onClick={toggleMenuIsVisible}
        />
      )}
    </header>
  );
};

export default Header;
