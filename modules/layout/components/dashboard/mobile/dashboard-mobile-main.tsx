import React from "react";
import DashboardMobileHeader from "./dashboard-mobile-header";
import DashboardMobileTab from "./dashboard-mobile-tab";

export default function DashboardMobileMain() {
  return (
    <div className='lg:hidden px-6 relative w-full h-full min-h-screen'>
      <DashboardMobileHeader />
      <DashboardMobileTab />
    </div>
  );
}
