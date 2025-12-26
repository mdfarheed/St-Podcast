"use client";

import React from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaCommentDots,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const EnquiryModal = ({ isOpen, onClose, enquiry }) => {
  if (!isOpen || !enquiry) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      >
        <motion.div
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-lg rounded-3xl 
          bg-white/90 backdrop-blur-xl shadow-2xl 
          border border-slate-200 p-6"
        >
          {/* Close icon */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition"
          >
            <FaTimes size={18} />
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold text-slate-800">
              Contact Enquiry Details
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Submitted contact information
            </p>
          </div>

          {/* Details */}
          <div className="space-y-3 text-sm">
            <DetailItem
              icon={<FaUser />}
              label="Full Name"
              value={`${enquiry.firstName} ${enquiry.lastName}`}
            />
            <DetailItem
              icon={<FaEnvelope />}
              label="Email"
              value={enquiry.email}
            />
            <DetailItem
              icon={<FaBriefcase />}
              label="Business"
              value={enquiry.business || "—"}
            />
            <DetailItem
              icon={<FaCommentDots />}
              label="Message"
              value={enquiry.message}
              multiline
            />
            <DetailItem
              icon={<FaCalendarAlt />}
              label="Enquiry Date"
              value={new Date(enquiry.createdAt).toLocaleString()}
            />
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full 
              bg-linear-to-r from-indigo-600 to-blue-600 
              text-white text-sm font-semibold 
              shadow-lg hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnquiryModal;

/* 🔹 Reusable detail row */
const DetailItem = ({ icon, label, value, multiline }) => (
  <div
    className="flex gap-3 items-start rounded-xl 
    bg-slate-50 border border-slate-200 px-4 py-3"
  >
    <span className="text-indigo-600 mt-1 shrink-0">{icon}</span>

    <div className="w-full">
      <p className="text-xs font-semibold text-slate-500 mb-0.5">{label}</p>

      <p
        className={`text-slate-800 text-sm leading-relaxed
        ${
          multiline
            ? "whitespace-pre-wrap break-all overflow-wrap-anywhere max-h-40 overflow-y-auto"
            : ""
        }`}
      >
        {value}
      </p>
    </div>
  </div>
);
