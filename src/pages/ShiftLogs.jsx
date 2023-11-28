import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig.jsx";
import Header from "../components/Header/Header.jsx";
import SideMenu from "../components/SideMenu/SideMenu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../App.jsx";

function ShiftLogs() {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffCollection = collection(db, "staff");
        const staffSnapshot = await getDocs(staffCollection);

        const staffDocuments = staffSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setStaffData(staffDocuments);
      } catch (error) {
        console.error("Unable to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="side-menu-section">
          <SideMenu />
        </div>
        <div className="shiftlog-content">
          <h1>Staff Shift Logs</h1>
          <ul>
            {staffData.map((staff) => (
              <li key={staff.id}>
                <p>Email: {staff.email}</p>
                <p>Title: {staff.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShiftLogs;
 