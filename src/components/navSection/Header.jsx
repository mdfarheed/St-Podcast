"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaTags,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 z-50 w-full "
      >
        <div
          className="
            max-w-[1450px] mx-auto w-full
            py-6 px-6 lg:px-14
            flex justify-between items-center
            backdrop-blur-md bg-black/40
          "
        >
          <h1 className="text-white text-2xl font-semibold">
            CORP Podcast
          </h1>

          <nav className="md:flex gap-10 text-white text-sm hidden">
            <Link href="/" className="hover:text-purple-400 transition">
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

      {/* ================= MOBILE STICKY BOTTOM NAV ================= */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          fixed bottom-0 left-0 w-full z-50
          md:hidden
          backdrop-blur-md bg-black/80
          border-t border-white/10
        "
      >
        <div className="flex justify-around items-center py-3">
          <Link
            href="/"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition"
          >
            <FaHome className="text-xl" />
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition"
          >
            <FaInfoCircle className="text-xl" />
            <span className="text-xs mt-1">About</span>
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition"
          >
            <FaTags className="text-xl" />
            <span className="text-xs mt-1">Prices</span>
          </Link>

          <Link
            href="#"
            className="flex flex-col items-center text-gray-300 hover:text-purple-400 transition"
          >
            <FaPhoneAlt className="text-xl" />
            <span className="text-xs mt-1">Contact</span>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
