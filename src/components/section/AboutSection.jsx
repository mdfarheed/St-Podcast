"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#1C1F21] py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-sm uppercase tracking-wide mb-2">
            About Us
          </p>

          <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-4">
            Who We Are
          </h2>

          <p className="text-gray-300 text-lg md:text-[22px] leading-relaxed max-w-[460px]">
            We are a full-service Corporate Video Podcast Agency Providing Podcast as a Service (PAAS), helping brands
            share their expertise through high-quality storytelling. Our team
            handles end-to-end production and execution so your leadership team gets premium,
            broadcast-grade content without any effort.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/aboutSection/Podcas.png"
              alt="Podcast Studio"
              width={650}
              height={500}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-16">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden flex justify-center"
        >
          <Image
            src="/aboutSection/Element.png"
            alt="Girl Podcast"
            width={650}
            height={500}
            className="rounded-3xl object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-4">
            Our Mission
          </h2>

          <p className="text-gray-300 text-lg md:text-[22px] leading-relaxed max-w-[430px]">
            To turn every brand into a trusted voice through engaging and
            professional video podcasts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;