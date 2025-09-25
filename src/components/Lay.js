import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Side';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Lay = () => {
  return (
    <div className="layout">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Components */}
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <div className="content-wrapper">
          <main className="content">
            {/* Nested routes render here */}
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Lay;
