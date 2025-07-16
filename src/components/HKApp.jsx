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
    </div>
    <div style={{ margin: "1rem" }}>
      <Outlet />
    </div>
  </div>
}

export default HKApp
