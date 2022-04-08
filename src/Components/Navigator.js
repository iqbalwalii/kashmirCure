import React from "react";
import Sidebar from "../styles/Sidebar.module.css";
import {
  GridFill,
  BriefcaseFill,
  PersonFill,
  PeopleFill,
  Journal,
  ArrowBarRight,
  StarFill,
  GraphUpArrow,
  BellFill,
  Bell,
  Star,
  People,
  Person,
  Briefcase,
  Grid,
} from "react-bootstrap-icons";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const Navigator = (props) => {
  const router = useRouter();
  const onTabHandler = (value) => {
    props.dispatch({
      type: "SET_ACTIVE_TAB",
      payload: value,
    });
  };
  const onClickHandler = () => {
    props.dispatch({
      type: "LOG_OUT",
    });
    Cookies.remove("user");
    router.push("/");
  };

  return (
    <div className={Sidebar.main}>
      <h3>Kiadah</h3>
      <ul>
        <li onClick={() => onTabHandler("dashboard")}>
          {props.tab === "dashboard" ? (
            <div
              style={{
                color: "#0579ff",
                fontWeight: "600",
              }}
            >
              <GridFill /> &nbsp;
              <span>Dashboard</span>
            </div>
          ) : (
            <div>
              <Grid /> &nbsp;
              <span>Dashboard</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("app")}>
          {props.tab === "app" ? (
            <div style={{ color: "#0579ff", fontSize: ".9rem" }}>
              <BriefcaseFill /> &nbsp;
              <span>Appointments</span>
            </div>
          ) : (
            <div>
              <Briefcase /> &nbsp;
              <span style={{ fontSize: ".9rem" }}>Appointments</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("doctor")}>
          {props.tab === "doctor" ? (
            <div style={{ color: "#0579ff" }}>
              <PersonFill /> &nbsp;
              <span>Doctors-A</span>
            </div>
          ) : (
            <div>
              <Person /> &nbsp;
              <span>Doctors-A</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("doctor-in")}>
          {props.tab === "doctor-in" ? (
            <div style={{ color: "#0579ff" }}>
              <PersonFill /> &nbsp;
              <span>Doctors-I</span>
            </div>
          ) : (
            <div>
              <Person /> &nbsp;
              <span>Doctors-I</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("patient")}>
          {props.tab === "patient" ? (
            <div style={{ color: "#0579ff" }}>
              <PeopleFill /> &nbsp;
              <span>Patients</span>
            </div>
          ) : (
            <div>
              <People /> &nbsp;
              <span>Patients</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("reviews")}>
          {props.tab === "reviews" ? (
            <div style={{ color: "#0579ff" }}>
              <StarFill /> &nbsp;
              <span>Reviews</span>
            </div>
          ) : (
            <div>
              <Star /> &nbsp;
              <span>Reviews</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("ads")}>
          {props.tab === "ads" ? (
            <div style={{ color: "#0579ff" }}>
              <GraphUpArrow /> &nbsp;
              <span>Ads</span>
            </div>
          ) : (
            <div>
              <GraphUpArrow /> &nbsp;
              <span>Ads</span>
            </div>
          )}
        </li>
        <li onClick={() => onTabHandler("notifications")}>
          {props.tab === "notifications" ? (
            <div style={{ color: "#0579ff" }}>
              <BellFill /> &nbsp;
              <span>Notifications</span>
            </div>
          ) : (
            <div>
              <Bell /> &nbsp;
              <span>Notifications</span>
            </div>
          )}
        </li>
      </ul>
      <hr />
      <ul className={Sidebar.bottomNav}>
        <li onClick={() => onTabHandler("blog")}>
          {props.tab === "blog" ? (
            <div style={{ color: "#0579ff" }}>
              <Journal /> &nbsp;
              <span>Blog</span>
            </div>
          ) : (
            <div>
              <Journal /> &nbsp;
              <span>Blog</span>
            </div>
          )}
        </li>

        <li onClick={onClickHandler}>
          <ArrowBarRight /> &nbsp; <span> Logout</span>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { tab: state.tab, user: state.user };
};
export default connect(mapStateToProps)(Navigator);
