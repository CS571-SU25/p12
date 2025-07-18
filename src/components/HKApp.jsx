import React from "react";
import AppNavBar from "./nav/AppNavBar";
import Footer from "./nav/Footer";
import { Outlet } from "react-router";


function HKApp() {
  return <div>
    <AppNavBar />

    <div style={{ padding: "1rem" }}>
      <Outlet />
    </div>

    <Footer />
  </div>
}

export default HKApp
