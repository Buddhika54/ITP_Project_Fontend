import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBars.css'

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
      <h2 >Maintenance MS </h2>
      </div>
      <div  className="sidebar-links">
        <NavLink to="/MainDashboard" >
            <span>Dashboard</span>
        </NavLink>
        <NavLink to="/MainDashboard/machines" >
            <span>Machines</span>
        </NavLink>
        <NavLink to="/MainDashboard/technician">
            <span>Technicians</span>
        </NavLink>
        <NavLink to="/MainDashboard/maintenance" >
            <span>Maintenance</span>
        </NavLink>
         <NavLink to="/MainDashboard/assign" >
            <span>Assign</span>
        </NavLink>
        <NavLink to="/MainDashboard" >
            <span>Records</span>
        </NavLink>

      </div>
    </div>
    
  )
}

export default SideBar