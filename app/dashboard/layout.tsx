import DashboardDesktopHeader from "@/modules/layout/components/dashboard/desktop/dashboard-desktop-header";
import DashboardDesktopSidebar from "@/modules/layout/components/dashboard/desktop/dashboard-desktop-sidebar";
import DashboardPaddingLayout from "@/modules/layout/components/dashboard/desktop/dashboard-padding-layout";
import React from "react";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardDesktopSidebar />
      <DashboardPaddingLayout className="">
        <DashboardDesktopHeader />
      </DashboardPaddingLayout>
      <DashboardPaddingLayout className="pb-10">{children}</DashboardPaddingLayout>
    </div>
  );
}