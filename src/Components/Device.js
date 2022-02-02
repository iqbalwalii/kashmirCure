import React from "react";
import { Container } from "react-bootstrap";
import Small from "../styles/Small.module.css";
const Device = () => {
  return (
    <div className="device">
      <div className={Small.main}>
        <div className={Small.body}>
          <p>Please Switch to a Bigger Screen to use this Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Device;
