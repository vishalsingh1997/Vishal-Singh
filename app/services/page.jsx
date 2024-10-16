"use client";

import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { delay, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in creating high-performance websites using React and Next.js, delivering exceptional user experiences.",
    path: "",
  },
  {
    num: "02",
    title: "WordPress Development",
    description:
      "I create beautiful, customized WordPress sites using Elementor and Divi, enhancing your online presence effortlessly.",
    path: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "I offer comprehensive SEO services, expertly managing both on-page and off-page strategies to boost visibility.",
    path: "",
  },
  {
    num: "04",
    title: "Figma Design/MockUp",
    description:
      "I can design customized logos, mock-ups, and wireframes in Figma, perfectly aligned with your project needs.",
    path: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid  grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((serviceItem, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col gap-6 group justify-center"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="font-extrabold text-5xl text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    {serviceItem.num}
                  </div>
                  <Link
                    href={serviceItem.path}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 group-hover:scale-105"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-3xl font-bold leading-none group-hover:text-accent transition-all duration-500">
                  {serviceItem.title}
                </h2>
                <p className="text-white/60">{serviceItem.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
