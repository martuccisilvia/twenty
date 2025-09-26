import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout({ searchTerm, setSearchTerm, showBanner, bannerText }) {
  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {showBanner && <div className="banner">{bannerText}</div>}
      {/* Contenitore principale per flex-grow */}
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
