import React from "react";
import "./dashboard.css";
import Headbar from "./headbar";
import Sidebar from "./sidebar";
function Dashboard() {
  return (
    <div className="mainbody">
      <div className="dashboard">
        <Sidebar/>
      </div>
      <div className="smallbody">
        <Headbar />

        <div className="changethisdivafterbodycomponentisbuildandcopied">

        </div>
      </div>
    </div>
  );
}
export default Dashboard;
