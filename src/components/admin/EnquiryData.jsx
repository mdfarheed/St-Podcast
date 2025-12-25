"use client";
import { HiDocumentText } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FaEye, FaCalendarAlt, FaUser, FaEnvelope } from "react-icons/fa";
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
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (Array.isArray(data)) {
        setEnquiryList(data);
      } else {
        console.warn("Unexpected response format", data);
        setEnquiryList([]); // fallback to empty array
      }
    } catch (error) {
      console.error("Enquiry data fetching error", error);
      setEnquiryList([]);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2">
        <HiDocumentText className=" text-4xl" />
        Contacts
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#083D65] text-white md:text-sm text-xs uppercase">
            <tr>
              <th className="p-4 text-left">
                <div className="flex items-center gap-2 ">
                  <FaCalendarAlt /> Enquiry Date
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-2">
                  <FaUser /> Full Name
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-2">
                  <FaEnvelope /> Email
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  Action
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(enquiryList) && enquiryList.length > 0 ? (
              enquiryList.map((item) => (
                <tr
                  key={item._id}
                  className="border-t border-gray-100 hover:bg-blue-50 transition text-xs md:text-sm"
                >
                  <td className="p-4">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-medium text-gray-800">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleView(item)}
                      className="hover:text-blue-800 transition"
                      title="View Details"
                    >
                      <FaEye className="inline-block md:text-2xl text-sm" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-red-600">
                  No enquiries found or unauthorized.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📦 Modal for View */}
      <EnquiryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        enquiry={selectedEnquiry}
      />
    </div>
  );
}
