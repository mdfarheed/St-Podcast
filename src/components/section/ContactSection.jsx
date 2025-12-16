"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <section className="relative w-full py-20 px-5 md:px-16 overflow-hidden bg-white">
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/contactBg-Image.png"
          alt="contact background"
          fill
          className="object-cover bg-black opacity-80"
        />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT FORM CARD */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/90 p-8 rounded-2xl shadow-xl backdrop-blur-md"
        >
          <form className="grid grid-cols-1 gap-5">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 "
                  placeholder="First Name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Business
                </label>
                <input
                  type="text"
                  name="business"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3"
                  placeholder="Business"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3"
                  placeholder="Email"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 resize-none"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                mt-3 px-6 py-4 rounded-xl text-white font-medium 
                bg-linear-to-r from-pink-500 to-indigo-500
                shadow-lg hover:opacity-90 transition
              "
            >
              Book a Strategy Call
            </button>
          </form>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-white md:pl-10"
        >
          <p className="uppercase tracking-wide font-bold text-white mb-2">
            Our Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Ready to launch your <br />
            company's video podcast?
          </h2>

          {/* CONTACT CARDS */}
          <div className="space-y-5">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                📧
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Email Support</p>
                <p className="text-black font-medium">
                  contact@podleadstudios.com
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                📞
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Phone Number</p>
                <p className="text-black font-medium">91-XXXXXXXXXX</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
