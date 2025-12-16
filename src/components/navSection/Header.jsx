"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-50 w-full"
    >
      <div
        className="
          max-w-[1450px] mx-auto w-full
          py-6 px-6 lg:px-14
          flex justify-between items-center
          backdrop-blur-md bg-black/40 
          
        "
      >
        <h1 className="text-white text-2xl font-semibold">CORP Podcast</h1>

        <nav className="hidden md:flex gap-10 text-white text-sm">
          <Link href="#" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-400 transition">
            About Us
          </Link>
          <Link href="#" className="hover:text-purple-400 transition">
            Prices
          </Link>
          <Link href="#" className="hover:text-purple-400 transition">
            Contact Us
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
