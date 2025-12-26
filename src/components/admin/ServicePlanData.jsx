"use client";

import React, { useEffect, useState } from "react";
import { FaEye, FaClipboardList } from "react-icons/fa";
import ServicePlanModal from "./ServicePlanModal";

const ServicePlanData = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/serviceplan");
        const data = await res.json();
        setPlans(data);
      } catch (error) {
        console.error("Failed to fetch service plans", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleView = (plan) => {
    setSelectedPlan(plan);
    setOpenModal(true);
  };

  if (loading) {
    return (
      <div className="text-center py-16 text-gray-600 animate-pulse">
        Loading service plans...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 text-white">
          <FaClipboardList />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Service Plan Enquiries
        </h2>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-linear-to-r from-blue-50 to-indigo-50 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Plan</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <tr
                key={plan._id}
                className="border-b hover:bg-blue-50/40 transition"
              >
                <td className="px-6 py-4 text-gray-600">
                  {new Date(plan.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 font-medium text-gray-800">
                  {plan.name}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium">
                    {plan.planName}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleView(plan)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
                  >
                    <FaEye />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">
                  {new Date(plan.createdAt).toLocaleDateString()}
                </p>
                <h3 className="font-semibold text-gray-800 mt-1">
                  {plan.name}
                </h3>
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                {plan.planName}
              </span>
            </div>

            <button
              onClick={() => handleView(plan)}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaEye />
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ServicePlanModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        data={selectedPlan}
      />
    </div>
  );
};

export default ServicePlanData;
