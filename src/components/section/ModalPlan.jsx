// ModalPlan.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

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

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 ALL DATA IN ONE PLACE (IMPORTANT)
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      planName: plan?.name,
      price: plan?.price, // ✅ NaN FIX
    };

    const promise = fetch("/api/serviceplan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    });

    toast.promise(promise, {
      loading: "Sending plan...",
      success: "Plan sent successfully!",
      error: "Something went wrong. Try again!",
    });
    try {
      await promise;
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {}
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
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

          {/* Plan summary */}
          <div className="mb-5 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 flex justify-between">
            <div>
              <p className="text-sm font-semibold">{plan.name}</p>
              <p className="text-[11px] text-slate-300">Plan ID: {plan.id}</p>
            </div>
            <p className="text-sm font-bold text-emerald-300">₹{plan.price}</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2 text-sm"
            />

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2 text-sm"
            />

            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2 text-sm"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-emerald-400 text-slate-900 font-semibold py-2.5 hover:bg-emerald-300"
            >
              Submit Details
            </button>
          </form>
        </motion.div>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default ModalPlan;
