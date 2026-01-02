"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall, FiVideo, FiBarChart2 } from "react-icons/fi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";

const steps = [
  {
    icon: <FiPhoneCall />,
    title: "Strategy Call",
    desc: "Understanding goals & audience.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "Podcast Blueprint",
    desc: "Show name, structure, and content plan.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: <FiVideo />,
    title: "Recording & Filming",
    desc: "Your team comes → we shoot → you relax.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MdOutlineEdit />,
    title: "Editing & Reels",
    desc: "Long video + high‑performing reels.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <TbFileUpload />,
    title: "Publishing",
    desc: "Across all major video platforms.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <FiBarChart2 />,
    title: "Monthly Insights",
    desc: "Performance report + suggestions.",
    color: "from-red-500 to-orange-600",
  },
];

// Continuous Floating Animation for Background Blobs
const blobVariants = {
  animate: {
    scale: [1, 1.2, 1],
    x: [0, 30, 0],
    y: [0, 50, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
  animateReverse: {
    scale: [1, 1.3, 1],
    x: [0, -40, 0],
    y: [0, -20, 0],
    transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
  },
};

const WorkProcess = () => {
  return (
    <section className="relative w-full bg-slate-50 py-24 px-6 overflow-hidden">
      {/* --- CONTINUOUS BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          animate="animateReverse"
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.3em] text-indigo-600 uppercase mb-4"
          >
            Workflow
          </motion.h2>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600">
                6-Step
              </span>
              <motion.span
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-2 left-0 w-full h-3 bg-pink-100 -z-10"
              />
            </span>{" "}
            Process
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative p-10 bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Animated Floating Number Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5,
                }}
                className={`absolute -top-5 -right-2 w-8 h-8 rounded-2xl bg-linear-to-br ${step.color} text-white flex items-center justify-center font-black text-xl shadow-xl z-20`}
              >
                {idx + 1}
              </motion.div>

              {/* Icon with Continuous Pulse Animation */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0px 0px 0px 0px rgba(0,0,0,0)",
                    "0px 0px 20px 2px rgba(99, 102, 241, 0.3)",
                    "0px 0px 0px 0px rgba(0,0,0,0)",
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`mb-8 p-6 rounded-3xl bg-linear-to-br ${step.color} text-white text-4xl shadow-lg relative`}
              >
                {step.icon}
                {/* Spinning Ring around icon on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/50 group-hover:scale-125 transition-all duration-500" />
              </motion.div>

              <h3 className="text-2xl font-extrabold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Background Glow Effect on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-[2.5rem] bg-linear-to-br ${step.color} transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
