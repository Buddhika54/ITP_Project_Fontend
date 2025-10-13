// src/components/ui/CustomerSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdGavel,
  MdLocalMall,
  MdLocalShipping,
  MdShowChart,
} from "react-icons/md";

export default function CustomerSidebar() {
  return (
    <div
      className="
        fixed top-0 left-0 h-screen w-[250px]
        bg-[rgba(46,125,50,0.85)] backdrop-blur-md text-white
        shadow-[4px_0_15px_rgba(0,0,0,0.25)]
        border-r border-white/20 flex flex-col justify-start pt-12 z-50
      "
    >
      <h2
        className="
          text-center font-bold text-2xl mb-[50px]
          text-white leading-tight
          pb-3 border-b border-white/25
          drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]
        "
      >
        Customer Portal
      </h2>

      <ul className="flex flex-col flex-grow justify-between m-0 p-0 list-none">
        <li>
          <NavLink
            to="/customer/dashboard"
            className={({ isActive }) =>
              `
                block px-5 py-1 my-[2px] mx-[10px] text-[15px] leading-tight 
                font-medium rounded-md transition-all duration-300
                flex items-center
                hover:bg-white/20
                ${isActive ? "bg-[#81c784] text-black font-bold shadow-inner shadow-black/40" : "text-white"}
              `
            }
          >
            <MdDashboard className="mr-2 text-lg" /> Customer's Orders
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/customer/auctions"
            className={({ isActive }) =>
              `
                block px-5 py-1 my-[2px] mx-[10px] text-[15px] leading-tight 
                font-medium rounded-md transition-all duration-300
                flex items-center
                hover:bg-white/20
                ${isActive ? "bg-[#81c784] text-black font-bold shadow-inner shadow-black/40" : "text-white"}
              `
            }
          >
            <MdGavel className="mr-2 text-lg" /> Customer Auctions
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/customer/accessories"
            className={({ isActive }) =>
              `
                block px-5 py-1 my-[2px] mx-[10px] text-[15px] leading-tight 
                font-medium rounded-md transition-all duration-300
                flex items-center
                hover:bg-white/20
                ${isActive ? "bg-[#81c784] text-black font-bold shadow-inner shadow-black/40" : "text-white"}
              `
            }
          >
            <MdLocalMall className="mr-2 text-lg" /> Tea Accessories
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/customer/sales"
            className={({ isActive }) =>
              `
                block px-5 py-1 my-[2px] mx-[10px] text-[15px] leading-tight 
                font-medium rounded-md transition-all duration-300
                flex items-center
                hover:bg-white/20
                ${isActive ? "bg-[#81c784] text-black font-bold shadow-inner shadow-black/40" : "text-white"}
              `
            }
          >
            <MdShowChart className="mr-2 text-lg" /> Sales Overview
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/customer/bulk"
            className={({ isActive }) =>
              `
                block px-5 py-1 my-[2px] mx-[10px] text-[15px] leading-tight 
                font-medium rounded-md transition-all duration-300
                flex items-center
                hover:bg-white/20
                ${isActive ? "bg-[#81c784] text-black font-bold shadow-inner shadow-black/40" : "text-white"}
              `
            }
          >
            <MdLocalShipping className="mr-2 text-lg" /> Bulk Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
