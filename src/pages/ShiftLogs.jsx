import React from "react";
import Header from "../components/Header/Header.jsx";
import SideMenu from "../components/SideMenu/SideMenu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../App.jsx";

function ShiftLogs() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="side-menu-section">
          <SideMenu />
        </div>
        <div className="shiftlog-content">
          <h1>Shift Logs</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShiftLogs;
