import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <>
      <section>
        <ul>
          <li>
            <Link to="/">Main Menu</Link>
          </li>
          <li>
            <a>Schedule</a>
          </li>
          <li>
            <Link to="/shiftlogs">Shift Logs</Link>
          </li>
          <li>
            <Link to="/accounts">Accounts</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default SideMenu;
