"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#191D20] md:pt-32 pb-20 overflow-hidden relative flex flex-col lg:flex-row items-center lg:items-start justify-between">
      {/* Gradient blur */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-linear-to-br from-purple-500 to-pink-500 opacity-40 blur-[130px] rounded-full" />

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mt-20 text-white z-20 pl-10 lg:pl-15 relative"
      >
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
          Your Brand.
          <br />
          Your Voice. Your
          <br />
          Video Podcast
        </h1>

        <p className="text-gray-300 mb-8 text-lg md:text-[22px]">
          We produce studio-quality video podcasts for companies that want to
          build thought leadership, connect deeply with their audience, and
          dominate social media with premium content.
        </p>

        <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg">
          Book a Strategy Call
        </button>

        <div className="hidden md:flex items-center gap-3 mt-6">
          <Image
            src="/Groupimage.png"
            width={60}
            height={60}
            alt="active users"
            className="rounded-full"
          />
          <span className="text-gray-300">1000+ Active Users Now</span>
        </div>
      </motion.div>

      {/* RIGHT IMAGE (absolute positioned) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute right-0 top-46 w-[850px] opacity-60 hidden"
      >
        <img src="/heroImage.png" alt="Podcast" className="" />
      </motion.div>
    </section>
  );
}
