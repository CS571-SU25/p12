import React from "react";
import AppNavBar from "./nav/AppNavBar";
import Footer from "./nav/Footer";
import { Outlet } from "react-router";
import {DataProvider} from './DataContext'
import {SavedProvider } from './SavedCompositeContext'
 
function HKApp() {
  return <div>
    <DataProvider>
    <SavedProvider>
    <AppNavBar />

    <div style={{ padding: "1rem" }}>
      <Outlet />
    </div>

    <Footer />
    </SavedProvider>
    </DataProvider>
  </div>
}

export default HKApp
