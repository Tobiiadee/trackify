import React from "react";
import DashboardDesktopMain from "@/modules/layout/components/dashboard/desktop/dashboard-desktop-main";
import DashboardMobileMain from "@/modules/layout/components/dashboard/mobile/dashboard-mobile-main";

export default function Dashboard() {
  return (
    <>
      <DashboardDesktopMain />
      <DashboardMobileMain />
    </>
  );
}
