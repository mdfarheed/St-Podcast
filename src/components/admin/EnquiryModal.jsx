"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

const EnquiryModal = ({ isOpen, onClose, enquiry }) => {
  if (!isOpen || !enquiry) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative border border-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
        >
          <FaTimes size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          📋 Contact Details
        </h2>

        {/* Table Layout */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm text-left text-gray-700 border border-gray-200 rounded-md">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold p-2 w-1/3">Full Name:</td>
                <td className="p-2">
                  {enquiry.firstName} {enquiry.lastName}
                </td>
              </tr>

              <tr className="border-b">
                <td className="font-semibold p-2">Email:</td>
                <td className="p-2">{enquiry.email}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Business:</td>
                <td className="p-2">{enquiry.business}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2">Message:</td>
                <td className="p-2">{enquiry.message}</td>
              </tr>

              <tr>
                <td className="font-semibold p-2">Enquiry Date:</td>
                <td className="p-2">
                  {new Date(enquiry.createdAt).toLocaleDateString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
