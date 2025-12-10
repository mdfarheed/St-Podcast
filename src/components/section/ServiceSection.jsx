"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Show Strategy & Concept Development",
    points: [
      "Topic research",
      "Target audience mapping",
      "Show name & format",
      "Script assistance",
      "Episode planning",
    ],
    bg: "bg-[#FFE9B5]",
    img: "/service/Group1.png",
  },
  {
    title: "Video Podcast Recording",
    points: [
      "In-studio or on-location",
      "Multi-camera setup",
      "Professional lighting",
      "Podcast set design",
      "High-quality microphones",
      "Host + guest support",
    ],
    bg: "bg-[#FFD4D4]",
    img: "/service/Group2.png",
  },
  {
    title: "Editing & Post-Production",
    points: [
      "Multi-cam editing",
      "Color grading",
      "Noise reduction",
      "Graphics & lower-third titles",
      "Branded intro/outro",
      "Thumbnail design",
    ],
    bg: "bg-[#DFFFF4]",
    img: "/service/Group3.png",
  },
  {
    title: "Social Media Reels & Content",
    points: [
      "Short videos (10–30 sec)",
      "Quote posts",
      "Carousels",
      "Captions for all platforms",
      "YouTube Shorts",
      "LinkedIn articles",
    ],
    bg: "bg-[#FFE2C6]",
    img: "/service/Group4.png",
  },
  {
    title: "Publishing & Distribution",
    points: [
      "We publish your podcast everywhere",
      "YouTube | Spotify | LinkedIn | Instagram",
      "Company pages",
    ],
    bg: "bg-[#D8E7FF]",
    img: "/service/Group5.png",
  },
  {
    title: "Analytics & Growth Support",
    points: [
      "Engagement reports",
      "Episode performance insights",
      "Guest recommendations",
      "Audience growth strategy",
    ],
    bg: "bg-[#FFF2C6]",
    img: "/service/Group6.png",
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ServiceSection = () => {

  
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold text-[#1C1F21] mb-14"
      >
        Our Services
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            variants={cardAnimation}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`${service.bg} relative p-6 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}
          >
            {/* TEXT ABOVE THE IMAGE ALWAYS */}
            <h3 className="text-[#1C1F21] font-bold text-xl md:text-2xl mb-3 relative z-20">
              {service.title}
            </h3>

            <ul className="text-[#1C1F21] text-[15px] md:text-[17px] space-y-1 relative z-20">
              {service.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  • {point}
                </li>
              ))}
            </ul>

            {/* IMAGE AT BOTTOM RIGHT ALWAYS */}
            <div className="absolute bottom-0 right-0 opacity-90 pointer-events-none">
              <Image
                src={service.img}
                alt={service.title}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
