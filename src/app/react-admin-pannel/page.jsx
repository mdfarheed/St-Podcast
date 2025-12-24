'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import AdminHome from '../../components/admin/AdminHome';
import EnquiryData from '../../components/admin/EnquiryData';
import { useRouter } from "next/navigation";
export default function AdminPage() {
  const [currentView, setView] = useState('dashboard');
    const router = useRouter();

  const renderView = () => {
    switch (currentView) {
      case 'enquiry':
        return <EnquiryData />;
      case 'dashboard':
      default:
        return <AdminHome />;
    }
  };

  useEffect(() => {
    const rgsTokens = localStorage.getItem("corpToken");

    if (!rgsTokens) {
      router.replace("/admin-login"); // 🔁 Redirect if not logged in
    }
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar currentView={currentView} setView={setView} />
      <main className="flex-1 p-6 overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
}
