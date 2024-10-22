import { cn } from "@/lib/utils";
import React from "react";

export default function DashboardPaddingLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("px-4 lg:pl-28 lg:pr-6", className)}>{children}</div>;
}
