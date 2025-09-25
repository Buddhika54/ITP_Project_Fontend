import React from 'react';
import { Outlet } from 'react-router-dom'; 
import SideBar from '../SideBars';
import Navbar from '../Navbar';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <div className="home-main">
        <Navbar />
        {/* Render whichever child route is active */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
