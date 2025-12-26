"use client";

import { useEffect, useState } from "react";
import {
  FaEye,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import EnquiryModal from "./EnquiryModal";

export default function EnquiryData() {
  const [enquiryList, setEnquiryList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const handleView = (item) => {
    setSelectedEnquiry(item);
    setShowModal(true);
  };

  const fetchEnquiry = async () => {
    try {
      const token = localStorage.getItem("corpToken");

      const res = await fetch("/api/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setEnquiryList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Enquiry fetch error", error);
      setEnquiryList([]);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Header */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-slate-800">
          <HiDocumentText className="text-indigo-600 text-3xl" />
          Contact Enquiries
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-linear-to-r from-indigo-600 to-blue-600 text-white">
            <tr>
              <th className="px-5 py-4 text-left whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt /> Date
                </div>
              </th>
              <th className="px-5 py-4 text-left">
                <div className="flex items-center gap-2">
                  <FaUser /> Name
                </div>
              </th>
              <th className="px-5 py-4 text-left">
                <div className="flex items-center gap-2">
                  <FaEnvelope /> Email
                </div>
              </th>
              <th className="px-5 py-4 text-center">View</th>
            </tr>
          </thead>

          <tbody>
            {enquiryList.length > 0 ? (
              enquiryList.map((item, index) => (
                <tr
                  key={item._id}
                  className={`border-b last:border-none transition ${
                    index % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50"
                  } hover:bg-indigo-50`}
                >
                  <td className="px-5 py-4 text-slate-600">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-5 py-4 font-medium text-slate-800">
                    {item.firstName} {item.lastName}
                  </td>

                  <td className="px-5 py-4 text-slate-600 break-all">
                    {item.email}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => handleView(item)}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full 
                      bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white 
                      transition shadow-sm"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-10 text-center text-slate-500"
                >
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <EnquiryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        enquiry={selectedEnquiry}
      />
    </div>
  );
}
