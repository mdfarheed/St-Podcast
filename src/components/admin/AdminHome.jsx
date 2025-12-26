"use client";

import { HiDocumentText } from "react-icons/hi";
import { useEffect, useState } from "react";
import {
  FaEye,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

export default function AdminHome() {
  const [enquiryList, setEnquiryList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [total, setTotal] = useState(0);

  const handleView = (item) => {
    setSelectedEnquiry(item);
    setShowModal(true);
  };

  const fetchEnquiry = async () => {
    try {
      const token = localStorage.getItem("corpToken");

      const res = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!Array.isArray(data)) return;

      setTotal(data.length);

      const recent = data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);

      setEnquiryList(recent);
    } catch (error) {
      console.error("Enquiry fetch error", error);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* 🔷 Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3 text-slate-800">
          <HiDocumentText className="text-indigo-600 text-4xl" />
          Admin Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Overview of latest contacts & enquiries
        </p>
      </div>

      {/* 🔷 Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div
          className="rounded-3xl p-6 text-white shadow-xl 
          bg-linear-to-r from-indigo-600 to-blue-600"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Total Contacts</p>
              <h2 className="text-4xl font-bold mt-1">{total}</h2>
            </div>
            <FaUsers className="text-5xl opacity-30" />
          </div>
        </div>

        {/* Future cards placeholder */}
        <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-md">
          <p className="text-sm text-slate-500">Today</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">—</h2>
        </div>
        <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-md">
          <p className="text-sm text-slate-500">This Week</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">—</h2>
        </div>
        <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-md">
          <p className="text-sm text-slate-500">This Month</p>
          <h2 className="text-3xl font-bold text-slate-800 mt-2">—</h2>
        </div>
      </div>

      {/* 🔷 Recent Contacts Table */}
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
        <div className="px-6 py-4 flex items-center justify-between bg-linear-to-r from-slate-800 to-slate-700 text-white">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FaClock className="text-yellow-300" />
            Recent Contacts
          </h2>
          <span className="text-xs text-slate-300">Last 5 enquiries</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 uppercase text-slate-600 text-xs">
              <tr>
                <th className="p-4 text-left">
                  <FaCalendarAlt className="inline mr-2" />
                  Date
                </th>
                <th className="p-4 text-left">
                  <FaUser className="inline mr-2" />
                  Name
                </th>
                <th className="p-4 text-left">
                  <FaEnvelope className="inline mr-2" />
                  Email
                </th>
                <th className="p-4 text-center">View</th>
              </tr>
            </thead>

            <tbody>
              {enquiryList.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-indigo-50 transition"
                >
                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-medium text-slate-800">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="p-4 text-slate-600">{item.email}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleView(item)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <FaEye className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}

              {enquiryList.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-slate-500">
                    No recent enquiries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔷 Modal */}
      <EnquiryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        enquiry={selectedEnquiry}
      />
    </div>
  );
}
