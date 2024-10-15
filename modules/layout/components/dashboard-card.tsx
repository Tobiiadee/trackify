import { cn } from "@/lib/utils";
import React from "react";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return (
    <div className={cn("w-max p-4 bg-white rounded-lg shadow-md", className)}>
      {children}
    </div>
  );
}
