"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaTools, FaTachometerAlt, FaClipboardList } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";


export default function Sidebar({ setView, currentView }) {
  const [isOpen, setIsOpen] = useState(false);
const router = useRouter();
  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (view) => {
    setView(view);
    setIsOpen(false); // close sidebar on mobile after selecting
  };

  const handleLogout= ()=>{
    localStorage.removeItem("rgsLoginToken");
    router.push("/");
  }

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={handleToggle}
          className="text-white text-2xl bg-[#083D65] p-2 rounded"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-[#083D65] text-white p-4 transition-transform z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <FaTools /> Admin
        </h2>

        <nav className="space-y-3">
          <button
            onClick={() => handleSelect("dashboard")}
            className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-blue-400 transition ${
              currentView === "dashboard" ? "bg-blue-700" : ""
            }`}
          >
            <FaTachometerAlt /> Dashboard
          </button>

          <button
            onClick={() => handleSelect("enquiry")}
            className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-blue-400 transition ${
              currentView === "enquiry" ? "bg-blue-700" : ""
            }`}
          >
            <FaClipboardList /> Enquiry Data
          </button>

<button
  onClick={handleLogout}
  className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-blue-400 transition"
>
  <FiLogOut /> Logout
</button>

        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={handleToggle}
        />
      )}
    </>
  );
}
