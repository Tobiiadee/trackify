import { cn } from "@/lib/utils";
import React from "react";

export default function DashboardPaddingLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("pl-28 pr-6", className)}>{children}</div>;
}
