"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
       initial={{ opacity: 0 }}
       animate={{
         opacity: 1,
         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
       }}
      >
        <div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten ">
          <Image
            src="/assets/projects/vissu.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full border border-accent/30 "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
