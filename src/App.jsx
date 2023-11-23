import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShiftLogs from "./pages/ShiftLogs";
import Accounts from "./pages/Accounts";
import "./App.css";
import ManagerDashboard from "./pages/ManagerDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ManagerDashboard />} />
          <Route path="/Shiftlogs" element={<ShiftLogs />} />
          <Route path="/Accounts" element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
