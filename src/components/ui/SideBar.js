import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdShoppingCart,
  MdLocalShipping,
  MdGavel,
  MdReceiptLong,
  MdPeople,
} from "react-icons/md";

const Sidebar = () => {
  const linkBase =
    "block px-5 py-1 my-0.5 mx-2.5 text-[15px] leading-[1.2] text-white no-underline font-medium rounded-md transition-all duration-300";
  const activeClass =
    "bg-[#81c784] text-black font-bold shadow-inner";
  const hoverClass = "hover:bg-white/20";

  return (
    <div
      className="
        w-[250px] h-screen fixed top-0 left-0
        bg-[rgba(46,125,50,0.85)] backdrop-blur-md text-white
        pt-[50px] shadow-[4px_0_15px_rgba(0,0,0,0.25)]
        border-r-[2px] border-white/15
        flex flex-col justify-start
      "
    >
      {/* Title */}
      <h2
        className="
          text-center font-bold text-2xl mb-[50px]
          text-white leading-tight
          pb-3 border-b border-white/25
          drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]
        "
      >
        Admin Portal
      </h2>

      {/* Menu */}
      <ul className="list-none p-0 m-0 flex flex-col justify-between flex-grow mb-8">
        {[
          { to: "/admin/orders", icon: <MdShoppingCart />, label: "Orders" },
          { to: "/admin/pickups", icon: <MdLocalShipping />, label: "Pickups" },
          { to: "/admin/auctions", icon: <MdGavel />, label: "Auctions" },
          { to: "/admin/bulk-orders", icon: <MdLocalShipping />, label: "Bulk Orders" },
          { to: "/admin/sales", icon: <MdDashboard />, label: "Sales" },
          { to: "/admin/invoices", icon: <MdReceiptLong />, label: "Invoices" },
          { to: "/customer/dashboard", icon: <MdPeople />, label: "Customer" },
        ].map(({ to, icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `${linkBase} ${hoverClass} ${isActive ? activeClass : ""}`
              }
            >
              <span className="inline-flex items-center gap-2">
                {icon} {label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
