// src/layouts/AdminLayout.jsx
import React from "react";
import TopNav from "../components/ui/TopNav";
import Sidebar from "../components/ui/SideBar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-sans"
      style={{ backgroundImage: "url('/background.jpg')" }} // ✅ background image via inline style
    >
      {/* Top Navigation */}
      <TopNav />

      {/* Content Wrapper */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="ml-[250px] flex-1 flex justify-center items-start min-h-screen p-8 shadow-inner">
          <div className="w-full max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
