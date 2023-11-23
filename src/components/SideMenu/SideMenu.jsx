import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

function SideMenu() {
  return (
    <>
      <section>
        <ul>
          <li>
            <a>Main Menu</a>
          </li>
          <li>
            <a>Schedule</a>
          </li>
          <li>
            <Link to="/shift-logs">Shift Logs</Link>
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
