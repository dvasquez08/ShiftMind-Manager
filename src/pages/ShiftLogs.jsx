import React, { useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import SideMenu from "../components/SideMenu/SideMenu.jsx";
import Footer from "../components/Footer/Footer.jsx";
import firebase from "firebase/app";
import "firebase/firestore";
import "../App.jsx";

function ShiftLogs() {
  const [staffData, setStaffData] = userState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const staffCollectionSnapshot = await db.collection("Staff").get();
      // const name = "";
      // const staffName = db.collection("staff").doc(name);
      const staffDataArray = [];

      staffCollectionSnapshot.forEach(async (staffDoc) => {
        const timestampsCollection = staffDoc.ref.collection("timestamp");
        const timestampsSnapshot = await timestampsCollection.get();

        const timestampsArray = timestampsSnapshot.docs.map((timestampDoc) => {
          return {
            id: timestampDoc.id,
            timestamp: timestampDoc.data().timestamp,
          };
        });
        staffDataArray.push({
          id: staffDoc.id,
          name: staffDoc.data().name,
          timestamps: timestampsArray,
        });
      });
      setStaffData(staffDataArray);
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
          {/* <ul>
            {staffData.map((staff) => (
              <li key={staff.id}>
                {staff.name}
                <ul>
                  {staff.timestamps.map((timestamp) => (
                    <li key={timestamp.id}>{timestamp.timestamp}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShiftLogs;
