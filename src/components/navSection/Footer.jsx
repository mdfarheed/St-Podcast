"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full bg-linear-to-b from-purple-500 via-purple-700 to-[#1a1a2e] pt-20 pb-10 text-white overflow-hidden">
      {/* LEFT Illustration (optional, if you have image) */}
      <img
        src="footer-men.png"
        alt=""
        className="hidden md:block absolute left-0 bottom-0 w-[260px]"
      />

      {/* RIGHT Illustration (optional) */}
      <img
        src="/Layer_1.png"
        alt=""
        className="hidden md:block absolute right-0 bottom-30  w-[360px]"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Build Your Video Podcast With Us
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-200 mt-3 text-lg"
        >
          Book a free strategy call to start your podcast journey.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 px-6 py-3 rounded-xl text-white font-medium 
          bg-linear-to-r from-pink-400 to-indigo-500 shadow-lg hover:opacity-90 transition"
        >
          Book a Strategy Call
        </motion.button>
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-20 mt-16 border-t border-white/20 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-200 max-w-[1200px] mx-auto">
        {/* LEFT TEXT + LOGO */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="text-left md:text-center">
            <p className="text-sm">
              All Right Reserved by Devobyte ©Copyright 2025
            </p>
          </div>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms & Condition
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-lg mt-4 md:mt-0">
          <FaFacebookF className="hover:text-white cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-white cursor-pointer transition" />
          <FaInstagram className="hover:text-white cursor-pointer transition" />
          <FaYoutube className="hover:text-white cursor-pointer transition" />
          <FaTwitter className="hover:text-white cursor-pointer transition" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
