"use client";
import { HiDocumentText } from "react-icons/hi";
import { useEffect, useState } from "react";
import {
  FaEye,
  FaCalendarAlt,
  FaUser,
  FaEnvelope ,
  FaClock,
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
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 🔑 Pass token here
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.message || "Failed to fetch enquiries");
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new TypeError("Expected data to be an array");
      }

      setTotal(data.length);

      const sortedData = data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // latest first
        .slice(0, 5); // show only 5
      setEnquiryList(sortedData);
    } catch (error) {
      console.log("enquiry data fetching error", error);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2">
        <HiDocumentText className=" text-4xl" />
        Admin Dashboard
      </h1>

      <div className="my-10 ">
        <div className="bg-blue-200 w-70 py-10 flex flex-col justify-center items-center rounded-md gap-4">
          <h2 className="text-4xl font-bold">{total}</h2>
          <h2 className="text-2xl font-bold">Total Contacts</h2>
        </div>
      </div>
      <div className="my-10">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-blue-100">
          <div className="bg-[#083D65] text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FaClock className="text-yellow-300" />
              Recent Contacts
            </h2>
            <span className="text-sm italic text-blue-100">Last 5 contact</span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-100 uppercase">
                <tr>
                  <th className="p-4 text-left">
                    <div className="flex items-center gap-2 ">
                      <FaCalendarAlt /> Enquiry Date
                    </div>
                  </th>
                  <th className="p-4 text-left">
                    <div className="flex items-center gap-2 ">
                      <FaUser /> Full Name
                    </div>
                  </th>
                  <th className="p-4 text-left">
                    <div className="flex items-center gap-2 ">
                      <FaEnvelope /> Email
                    </div>
                  </th>
                  <th className="p-4 ">Action</th>
                </tr>
              </thead>

              <tbody>
                {enquiryList.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t hover:bg-blue-50 transition-all"
                  >
                    <td className="p-4">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-medium">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="p-4">{item.email}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleView(item)}
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="View Details"
                      >
                        <FaEye className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for viewing enquiry */}
        <EnquiryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          enquiry={selectedEnquiry}
        />
      </div>
    </div>
  );
}
