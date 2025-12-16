// ModalPlan.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.2 } },
};

const ModalPlan = ({ plan, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://your-backend-url.com/api/plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          planId: plan.id,
          planName: plan.name,
          price: plan.price,
        }),
      });
      setForm({ name: "", email: "", phone: "" });
      onClose();
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <motion.div
        variants={modalVariants}
        className="relative z-10 w-full max-w-md mx-4 rounded-3xl bg-slate-900/70 
          border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] 
          p-6 md:p-7 text-slate-50"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-slate-400 hover:text-white text-xl"
        >
          ×
        </button>

        <h3 className="text-lg font-bold mb-1">Choose Plan</h3>
        <p className="text-xs text-slate-300 mb-4">
          Fill your details to proceed with the plan.
        </p>

        {/* Selected plan summary */}
        <div className="mb-5 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">{plan.name}</p>
            <p className="text-[11px] text-slate-300">Plan ID: {plan.id}</p>
          </div>
          <p className="text-sm font-bold text-emerald-300">{plan.price}</p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-medium text-slate-200 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 
                px-3 py-2 text-sm outline-none text-slate-50
                focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-200 mb-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 
                px-3 py-2 text-sm outline-none text-slate-50
                focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-200 mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 
                px-3 py-2 text-sm outline-none text-slate-50
                focus:ring-2 focus:ring-emerald-400/70 focus:border-transparent"
              placeholder="Enter phone number"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-full bg-emerald-400 text-slate-900 
              font-semibold text-sm py-2.5 shadow-lg shadow-emerald-500/30
              hover:bg-emerald-300 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Details"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ModalPlan;
