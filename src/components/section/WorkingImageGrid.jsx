"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textAnim = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const WorkingImageGrid = () => {
  return (
    <section className="relative w-full bg-[#181A1C] py-20 px-4 md:px-12 lg:px-20 overflow-hidden">
      
      {/* FULL HEIGHT IMAGE FIXED */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          absolute 
          top-0 
          right-20 
          w-[60%] 
          h-full 
          hidden md:flex
          
        "
      >
        <Image
          src="/Group-image.png"
          alt="Working Podcast"
          fill
          className="object-cover object-center opacity-80"
        />
      </motion.div>

      {/* LEFT CONTENT */}
      <motion.div
        variants={textAnim}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-20 max-w-xl"
      >
        <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
          WHY COMPANIES
          <br />
          LOVE WORKING
          <br />
          WITH US
        </h2>

        <ul className="text-gray-300 text-lg md:text-xl space-y-2">
          <li>✔ Premium studio-quality video</li>
          <li>✔ Zero workload — we handle everything</li>
          <li>✔ Brand leadership positioning</li>
          <li>✔ Consistent content every month</li>
          <li>✔ Massive social media visibility</li>
          <li>✔ Professional, corporate-friendly team</li>
        </ul>
      </motion.div>

      {/* MOBILE IMAGE */}
      <div className="mt-10 md:hidden rounded-xl overflow-hidden">
        <Image
          src="/Group-image.png"
          alt="Working Collage"
          width={1200}
          height={900}
          className="object-cover w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default WorkingImageGrid;
