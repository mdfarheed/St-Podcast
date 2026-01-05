"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiZap, FiAward, FiStar } from "react-icons/fi";
import ModalPlan from "./ModalPlan";

const plans = [
  {
    id: "starter",
    name: "Starter Video Plan",
    price: "75,000",
    per: "per month",
    icon: <FiZap className="text-blue-400" />,
    color: "from-blue-500 to-cyan-500",
    features: [
      "2 Video Episodes / month",
      "1–2 camera setup",
      "Basic editing & Thumbnails",
      "10 Social Media Reels",
      "Publishing & Monthly report",
    ],
  },
  {
    id: "growth",
    name: "Growth Video Plan",
    price: "1,45,000",
    per: "per month",
    badge: "Most Popular",
    icon: <FiStar className="text-yellow-400" />,
    color: "from-fuchsia-600 via-purple-600 to-indigo-600",
    features: [
      "4+ Video Episodes / month",
      "2–3 camera setup",
      "Advanced multi-cam editing",
      "30 Social Media Reels",
      "YouTube SEO & Analytics",
      "Priority recording schedule",
    ],
  },
  {
    id: "leadership",
    name: "Leadership Video Plan",
    price: "2,50,000",
    per: "per month",
    icon: <FiAward className="text-emerald-400" />,
    color: "from-emerald-500 to-teal-600",
    features: [
      "4 Premium Studio Episodes",
      "Fully Branded Podcast Set",
      "Multi-location filming",
      "Guest booking & management",
      "Dedicated account manager",
      "Strategy review meetings",
    ],
  },
];

const PodcastPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="w-full bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            Flexible{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
              Pricing
            </span>
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Ready to dominate the podcast space? Choose a plan that fits your
            brand's ambition.
          </p>

          {/* Monthly Toggle */}
          <div className="mt-10 inline-flex p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <button className="px-8 py-2.5 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-sm shadow-lg transition-all">
              Monthly
            </button>
            {/* <button className="px-8 py-2.5 rounded-xl text-slate-400 font-bold text-sm hover:text-white transition-all">
              Quarterly (-15%)
            </button> */}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative group p-px rounded-[2.5rem] overflow-hidden ${
                plan.id === "growth"
                  ? "bg-linear-to-b from-purple-500 to-transparent"
                  : "bg-white/10"
              }`}
            >
              {/* Inner Card Content */}
              <div className="bg-[#121212] rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-linear-to-r from-fuchsia-600 to-purple-600 text-white text-[10px] font-black px-10 py-1 transform rotate-45 translate-x-8 translate-y-4 shadow-xl">
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Plan Icon & Header */}
                <div className="mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:scale-110 transition-transform`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">
                      ₹{plan.price}
                    </span>
                    <span className="text-slate-500 text-sm">{plan.per}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <FiCheckCircle className="mt-1 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full cursor-pointer py-4 rounded-2xl font-black tracking-wider uppercase text-xs transition-all duration-300 ${
                    plan.id === "growth"
                      ? "bg-linear-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_10px_30px_rgba(192,38,211,0.3)] hover:shadow-[0_15px_40px_rgba(192,38,211,0.5)]"
                      : "bg-white text-black hover:bg-slate-200"
                  }`}
                >
                  Get Started Now
                </motion.button>

                {/* Decorative background glow for card hover */}
                <div
                  className={`absolute -bottom-20 -right-20 w-40 h-40 bg-linear-to-br ${plan.color} opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedPlan && (
          <ModalPlan
            plan={selectedPlan}
            onClose={() => setSelectedPlan(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PodcastPlans;
