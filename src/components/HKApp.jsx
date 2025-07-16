import React from "react";
import AppNavBar from "./nav/AppNavBar";
import { Outlet } from "react-router";


function HKApp() {
  return <div>
    <AppNavBar />
    <div style={{
      backgroundColor: "white",
      padding: "1.25rem 0",
      textAlign: "left"
    }}>
      <h1 style={{
        color: "#031F9E",
        fontSize: "1.75rem",
        margin: 0
      }}>
        Unwrap HK!
      </h1>
    </div>
    <div style={{ margin: "1rem" }}>
      <Outlet />
    </div>
  </div>
}

export default HKApp
