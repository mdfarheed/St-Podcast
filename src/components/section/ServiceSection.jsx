"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Show Strategy & Concept",
    points: [
      "Topic research",
      "Audience mapping",
      "Show name & format",
      "Script assistance",
      "Episode planning",
    ],
    bg: "from-amber-50 to-orange-100",
    border: "border-orange-200",
    accent: "bg-orange-500",
    img: "/service/Group1.png",
  },
  {
    title: "Video Podcast Recording",
    points: [
      "In-studio recording",
      "Multi-camera setup",
      "Professional lighting",
      "Podcast set design",
      "High-quality mics",
    ],
    bg: "from-rose-50 to-red-100",
    border: "border-red-200",
    accent: "bg-red-500",
    img: "/service/Group2.png",
  },
  {
    title: "Editing & Post-Production",
    points: [
      "Multi-cam editing",
      "Color grading",
      "Noise reduction",
      "Graphics & titles",
      "Branded intro/outro",
    ],
    bg: "from-emerald-50 to-teal-100",
    border: "border-teal-200",
    accent: "bg-teal-500",
    img: "/service/Group3.png",
  },
  {
    title: "Social Media Reels",
    points: [
      "Short videos (10–30s)",
      "Quote posts",
      "Carousels",
      "Captions",
      "YouTube Shorts",
    ],
    bg: "from-orange-50 to-yellow-100",
    border: "border-yellow-200",
    accent: "bg-yellow-600",
    img: "/service/Group4.png",
  },
  {
    title: "Publishing & Distribution",
    points: [
      "Everywhere publishing",
      "YouTube & Spotify",
      "LinkedIn & Instagram",
      "Company pages",
    ],
    bg: "from-blue-50 to-indigo-100",
    border: "border-indigo-200",
    accent: "bg-indigo-500",
    img: "/service/Group5.png",
  },
  {
    title: "Analytics & Growth",
    points: [
      "Engagement reports",
      "Performance insights",
      "Guest recommendations",
      "Growth strategy",
    ],
    bg: "from-purple-50 to-fuchsia-100",
    border: "border-fuchsia-200",
    accent: "bg-fuchsia-500",
    img: "/service/Group6.png",
  },
];

const ServiceSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-bold tracking-widest uppercase text-sm"
          >
            Premium Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 mt-4"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Services
            </span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotateZ: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-4xl border ${service.border} bg-linear-to-br ${service.bg} shadow-xl shadow-slate-200/50 flex flex-col h-full min-h-[400px] overflow-hidden`}
            >
              {/* Floating Shape Decoration */}
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 ${service.accent} opacity-[0.05] rounded-full group-hover:scale-150 transition-transform duration-700`}
              />

              <div className="relative z-20">
                {/* Modern Bullet Points with Accent Colors */}
                <h3 className="text-slate-900 font-black text-2xl mb-6 leading-tight group-hover:text-indigo-700 transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center text-slate-700 font-medium text-sm md:text-base"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${service.accent} mr-3 shrink-0`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image with Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute bottom-4 right-4 z-10"
              >
                <div className="relative group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={180}
                    height={180}
                    className="object-contain drop-shadow-2xl"
                  />
                  {/* Image Shadow Effect */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/10 blur-xl rounded-full -z-10" />
                </div>
              </motion.div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
