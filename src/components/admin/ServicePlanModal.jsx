import React from "react";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaRupeeSign,
} from "react-icons/fa";

const ServicePlanModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Gradient Header */}
        <div className="relative bg-linear-to-r from-indigo-600 to-blue-600 px-6 py-5 text-white">
          <h2 className="text-lg font-semibold">Service Plan Details</h2>
          <p className="text-xs opacity-90">{data.planName}</p>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-gray-700">
          <InfoRow icon={<FaUser />} label="Name" value={data.name} />
          <InfoRow icon={<FaEnvelope />} label="Email" value={data.email} />
          <InfoRow icon={<FaPhoneAlt />} label="Phone" value={data.phone} />
          <InfoRow
            icon={<FaRupeeSign />}
            label="Price"
            value={`₹${Number(data.price).toLocaleString("en-IN")}`}
            highlight
          />
          <InfoRow
            icon={<FaCalendarAlt />}
            label="Submitted On"
            value={new Date(data.createdAt).toLocaleString()}
          />
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 
            text-white font-medium hover:opacity-90 transition shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* Small reusable row component */
const InfoRow = ({ icon, label, value, highlight }) => (
  <div
    className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
      highlight
        ? "bg-indigo-50 border-indigo-200 text-indigo-700"
        : "bg-white border-gray-200"
    }`}
  >
    <div
      className={`p-2 rounded-lg ${
        highlight ? "bg-indigo-100" : "bg-gray-100"
      }`}
    >
      {icon}
    </div>

    <div className="flex-1">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium break-all">{value}</p>
    </div>
  </div>
);

export default ServicePlanModal;
