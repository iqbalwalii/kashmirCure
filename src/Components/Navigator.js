import React from "react";
import Sidebar from "../styles/Sidebar.module.css";
import {
  GridFill,
  BriefcaseFill,
  PersonFill,
  PeopleFill,
  Journal,
  ArrowBarRight,
} from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
const Navigator = () => {
  const [active, setActive] = useState("dashboard");
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className={Sidebar.main}>
      <h2>K-Cure</h2>
      <ul>
        <li onClick={(e) => setActive("dashboard")}>
          {active === "dashboard" ? (
            <div style={{ color: "#0579ff" }}>
              <GridFill /> &nbsp;
              <span>Dashboard</span>
            </div>
          ) : (
            <div>
              <GridFill /> &nbsp;
              <span>Dashboard</span>
            </div>
          )}
        </li>
        <li onClick={(e) => setActive("App")}>
          {active === "App" ? (
            <div style={{ color: "#0579ff" }}>
              <BriefcaseFill /> &nbsp;
              <span>Appointments</span>
            </div>
          ) : (
            <div>
              <BriefcaseFill /> &nbsp;
              <span>Appointments</span>
            </div>
          )}
        </li>
        <li onClick={(e) => setActive("doctor")}>
          {active === "doctor" ? (
            <div style={{ color: "#0579ff" }}>
              <PersonFill /> &nbsp;
              <span>Doctors</span>
            </div>
          ) : (
            <div>
              <PersonFill /> &nbsp;
              <span>Doctors</span>
            </div>
          )}
        </li>
        <li onClick={(e) => setActive("patient")}>
          {active === "patient" ? (
            <div style={{ color: "#0579ff" }}>
              <PeopleFill /> &nbsp;
              <span>Patients</span>
            </div>
          ) : (
            <div>
              <PeopleFill /> &nbsp;
              <span>Patients</span>
            </div>
          )}
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <Journal /> &nbsp; <span> Blog</span>
        </li>
        <li>
          <ArrowBarRight /> &nbsp; <span> Logout</span>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { tab: state.tab };
};
export default connect(mapStateToProps)(Navigator);
