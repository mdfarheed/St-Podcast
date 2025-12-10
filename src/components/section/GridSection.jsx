"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GridSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex justify-center px-4 py-10"
    >
      <div
        className="
        max-w-[1400px] w-full bg-white rounded-3xl shadow-xl 
        p-5 md:p-8 lg:p-10
      "
      >
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT LARGE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full h-80 md:h-[400px] lg:h-[450px] overflow-hidden md:rounded-t-2xl"
          >
            <Image
              src="/gridSection/image1.png"
              alt="Main"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT PURPLE BOX */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
            bg-[#5B1EE8] 
            md:rounded-t-2xl p-8 flex flex-col justify-center 
            text-white
          "
          >
            <h2 className="text-xl md:text-[22px] font-medium leading-relaxed mb-6">
              At Corporate Podcast Studio, we take care of everything — concept,
              recording, filming, editing, clips, publishing — so your team only
              needs to show up, talk, and shine. You get a powerful video
              podcast + dozens of reels every month.
            </h2>

            {/* BUTTON */}
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="
                mt-4 px-7 py-5 rounded-xl font-semibold text-white 
                bg-linear-to-r from-pink-500 to-indigo-500 shadow-md
                hover:opacity-90 transition
              "
              >
                Book a Strategy Call
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM 4 IMAGE GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex gap-5 mt-6"
        >
          {/* IMAGE 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="overflow-hidden"
          >
            <img
              src="/gridSection/image2.png"
              alt="Grid Image 1"
              className="w-160 h-[150px] md:h-[200px] object-cover md:rounded-b-2xl"
            />
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="overflow-hidden hidden md:block"
          >
            <img
              src="/gridSection/image3.png"
              alt="Grid Image 2"
              className="h-[150px] md:h-[200px] md:rounded-b-2xl"
            />
          </motion.div>

          {/* IMAGE 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="overflow-hidden"
          >
            <img
              src="/gridSection/image4.png"
              alt="Grid Image 3"
              className="w-160 h-[150px] md:h-[200px] object-cover md:rounded-b-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GridSection;
