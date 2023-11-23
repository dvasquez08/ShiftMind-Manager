import React from "react";
import Header from "../components/Header/Header.jsx";
import SideMenu from "../components/SideMenu/SideMenu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../App.jsx";

function Accounts() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="side-menu-section">
          <SideMenu />
        </div>
        <div className="accounts-content">
          <h1>Accounts</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Accounts;
