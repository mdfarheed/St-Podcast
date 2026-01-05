"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaTags, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About", icon: <FaInfoCircle />, href: "#about" },
    { name: "Plans", icon: <FaTags />, href: "#price" },
    { name: "Contact", icon: <FaPhoneAlt />, href: "#contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP HEADER (Premium Look) ================= */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 z-50 w-full flex justify-center p-6 md:flex"
      >
        <div className="max-w-7xl w-full py-4 px-10 flex justify-between items-center backdrop-blur-xl bg-black/40 border border-white/10 rounded-full shadow-2xl">
          <h1 className="text-white text-xl font-black tracking-tighter italic">
            CORP<span className="text-purple-500">PODCAST</span>
          </h1>

          <nav className="md:flex hidden gap-10 text-white/70 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* ================= MOBILE FLOATING BOTTOM NAV (Modern Dock) ================= */}
      <div className="fixed bottom-6 left-0 w-full flex justify-center z-50 px-6 md:hidden">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex justify-around items-center w-full max-w-sm h-16 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-4xl px-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.name)}
                className="relative flex flex-col items-center justify-center w-12 h-12 transition-all"
              >
                {/* Active Background Glow */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-purple-500/20 blur-md rounded-full"
                  />
                )}

                {/* Icon */}
                <motion.span
                  animate={{
                    y: isActive ? -4 : 0,
                    scale: isActive ? 1.2 : 1,
                    color: isActive ? "#a855f7" : "#94a3b8",
                  }}
                  className="text-xl relative z-10"
                >
                  {item.icon}
                </motion.span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="dot"
                    className="absolute -bottom-1 w-1 h-1 bg-purple-500 rounded-full"
                  />
                )}

                {/* Text (Optional, hidden when not active for cleaner look) */}
                <span
                  className={`text-[10px] mt-1 font-medium transition-all ${
                    isActive ? "opacity-100 text-purple-400" : "opacity-0 h-0"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
