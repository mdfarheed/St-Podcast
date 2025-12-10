"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  FiPhoneCall,
  FiVideo,
  FiBarChart2,
} from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    icon: <FiPhoneCall className="text-pink-500 text-3xl" />,
    title: "Strategy Call",
    desc: "Understanding goals & audience.",
  },
  {
    icon: <FaMicrophoneAlt className="text-pink-500 text-3xl" />,
    title: "Podcast Blueprint",
    desc: "Show name, structure, set design, content plan.",
  },
  {
    icon: <FiVideo className="text-orange-400 text-3xl" />,
    title: "Recording & Filming",
    desc: "Your team comes → we shoot → you relax.",
  },
  {
    icon: <MdOutlineEdit className="text-pink-500 text-3xl" />,
    title: "Editing & Reels Creation",
    desc: "Long video + high‑performing reels.",
  },
  {
    icon: <TbFileUpload className="text-orange-400 text-3xl" />,
    title: "Publishing",
    desc: "Across all major video platforms.",
  },
  {
    icon: <FiBarChart2 className="text-pink-500 text-3xl" />,
    title: "Monthly Insights",
    desc: "Performance report + suggestions.",
  },
];

const WorkProcess = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-slate-900 mb-10">
          PROCESS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-3"
            >
              <div className="shrink-0 mt-1">{step.icon}</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkProcess;
