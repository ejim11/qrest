"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionCard from "../SectionCard";

const ContactList = () => {
  const data = [
    {
      title: "Contact",
      text: "+2341-234-5678",
      text2: "website@qrest.ng",
    },
    {
      title: "Socials",
      links: [
        {
          link: "https://www.instagram.com/qrest_software_development?igsh=MTZxZjBtNjgxamh3dg==",
          linkText: "instagram",
        },
        {
          link: "https://www.linkedin.com/company/qrest-software-development-company/posts/?feedView=all",
          linkText: "linkedin",
        },
      ],
    },
  ];

  return (
    <SectionCard styles=" pt-[5rem] pb-[14rem]  smd:pb-[8rem] md:pb-[12rem]  bg-black-1">
      <div className="grid grid-cols-service-grid gap-[7rem] xmd:gap-[5rem] md:gap-[3rem]">
        {data.map((contact, i) => (
          <motion.div
            initial={{ opacity: 0, y: 40, x: i % 2 !== 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
            viewport={{ once: true }}
            key={i}
            className="bg-[#0E0A1D] border border-[#1D2134] rounded-[1.6rem] py-[3rem] flex flex-col items-center text-center"
          >
            <p className="text-[2.4rem] mb-[2.4rem] font-dmsans font-medium text-white-1">
              {contact.title}
            </p>
            {contact.text && (
              <div className="font-dmsans sm:text-[1.5rem] sm:leading-[2.2rem]  text-grey-2">
                <p className="mb-[1.2rem]">{contact.text}</p>
                <p>{contact.text2}</p>
              </div>
            )}
            <div className="text-grey-2 flex flex-col items-center capitalize">
              {contact.links &&
                contact.links.length > 0 &&
                contact.links.map((link, i) => (
                  <a
                    target="blank"
                    key={i}
                    href={link.link}
                    className="block mb-[1.2rem] sm:text-[1.5rem] sm:leading-[2.2rem] last:mb-0 hover:text-purple-3 ease-in transition-all duration-150"
                  >
                    {link.linkText}
                  </a>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
};

export default ContactList;
