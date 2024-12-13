/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import appContext from "@/context/appContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { GoChevronDown } from "react-icons/go";
import { useMediaQuery } from "react-responsive";

const HeaderNav = ({ navLinks }: { navLinks: any }) => {
  const ctx = useContext(appContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  const pathname = usePathname();

  return (
    <nav className="flex items-center mx-auto md:mx-0 md:flex-col md:w-full">
      {navLinks.map((item: any, i: number) => {
        if (item.link) {
          return (
            <Link
              key={i}
              href={item.link}
              className={` ${
                pathname.includes(item.link) ? "text-purple-3" : "text-grey-4 "
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
            } flex items-center mr-[5rem] md:mr-0  cursor-pointer hover:text-purple-3 md:pb-[1.5rem] transition-all duration-150 ease-in md:flex-col md:items-center md:w-full smd:justify-center `}
          >
            <div className="flex  items-center">
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
  );
};

export default HeaderNav;
