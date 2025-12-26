"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModalPlan from "./ModalPlan";

const plans = [
  {
    id: "starter",
    name: "Starter Video Plan",
    price: "75000",
    per: "per month",
    badge: "",
    bg: "from-slate-800 to-slate-900",
    features: [
      "Best for brands starting with video podcasting",
      "2 Video Episodes / month",
      "1–2 camera setup",
      "Basic editing",
      "Simple intro / outro",
      "10 Social Media Reels",
      "Thumbnails for each episode",
      "Publishing",
      "Monthly report",
    ],
  },
  {
    id: "growth",
    name: "Growth Video Plan",
    price: "145000",
    per: "per month",
    badge: "Most Popular",
    bg: "from-violet-500/80 via-indigo-500/80 to-fuchsia-500/80",
    features: [
      "Great for companies wanting authority & content volume",
      "4+ Video Episodes / month",
      "2–3 camera setup",
      "Advanced multi-cam editing",
      "Color grading",
      "30 Social Media Reels",
      "Quote graphics + carousels",
      "YouTube SEO optimization",
      "Priority recording schedule",
      "Analytics dashboard",
    ],
  },
  {
    id: "leadership",
    name: "Leadership Video Plan",
    price: "250000",
    per: "per month",
    badge: "",
    bg: "from-slate-800 to-slate-900",
    features: [
      "For brands that want to dominate their industry with a premium show",
      "4 Premium Studio Episodes / month",
      "Fully designed branded podcast set",
      "Multi-location filming + cinematography",
      "Full-service ideation & content strategy",
      "Guest booking & management",
      "Dedicated account manager",
      "On-site production director",
      "Strategy review meeting",
      "YouTube channel growth support",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const PodcastPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="w-full bg-[#111111] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[0.25em] text-white">
          VIDEO PODCAST PLANS
        </h2>
        <p className="mt-4 text-slate-300 text-sm md:text-base">
          Choose the plan that works for you.
        </p>

        {/* Toggle (sirf UI demo, logic optional) */}
        <div className="mt-6 inline-flex items-center rounded-full bg-slate-900/80 p-1">
          <button className="px-5 py-1.5 text-xs md:text-sm rounded-full bg-white text-slate-900 font-semibold">
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            className={`relative rounded-3xl 
              backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
              flex flex-col overflow-hidden  ${
                    plan.id === "growth"
                      ? " border border-yellow-700 bg-[#F6339A]"
                      : "border border-white/10 bg-slate-900/70"
                  }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            {/* Center card glass + gradient */}
            {plan.id === "growth" && (
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br opacity-90 pointer-events-none" />
            )}

            {/* Badge */}
            {plan.badge && (
              <div className="absolute top-1 right-4 z-20">
                <span className="rounded-full bg-white text-[10px] font-semibold px-3 py-1 text-slate-900 shadow-lg">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="relative z-10 p-6 md:p-7 flex-1 flex flex-col">
              <p className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                {plan.name}
              </p>

              <div className="mt-5">
                <p className="text-3xl md:text-4xl font-extrabold text-white">
                  {plan.price}
                </p>
                <p className="text-xs text-slate-200 mt-1">{plan.per}</p>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-100">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan)}
                className={`mt-6 w-full rounded-full py-2.5 text-sm font-semibold 
                  transition transform hover:-translate-y-0.5 hover:shadow-lg
                  ${
                    plan.id === "growth"
                      ? "bg-white text-slate-900"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }`}
              >
                Choose Plan
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <ModalPlan plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PodcastPlans;
