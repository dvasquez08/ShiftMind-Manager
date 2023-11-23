import React from "react";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShiftLogs from "./pages/ShiftLogs";
import Accounts from "./pages/Accounts";

function App() {
  return (
    <Router>
      <>
        <Header />
        {/* Beginning of main content section */}
        <div className="main-container">
          <div className="side-menu-section">
            <SideMenu />
          </div>
          {/* beginning of dashboard  */}

          <div className="dashboard">
            <h1>Dashboard</h1>

            <div className="menu-cards">
              <div className="card-item">
                <h4>Accounts</h4>
              </div>
              <div className="card-item">
                <h4>Holidays</h4>
              </div>
              <div className="card-item">
                <h4>Time Off Requests</h4>
              </div>
              <div className="card-item">
                <h4>Approved Time Off</h4>
              </div>
            </div>

            <div className="staff-charts">
              <div className="chart-item">
                <h4>Staff Hours Worked</h4>
              </div>
              <div className="chart-item">
                <h4>Who's On Shift Today</h4>
              </div>
              <Switch>
                <Route path="/shift-logs" component={ShiftLogs} />
                <Route path="/accounts" component={Accounts} />
              </Switch>
            </div>
          </div>
          {/* End of dashboard */}
        </div>

        {/* End of main content section */}
        <Footer />
      </>
    </Router>
  );
}

export default App;
