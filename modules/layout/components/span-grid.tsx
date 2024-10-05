import { cn } from "@/lib/utils";
import React from "react";

interface SpanGridProps {
  colSpan: string;
  className?: string;
  children: React.ReactNode;
}

export default function SpanGrid({
  colSpan,
  children,
  className,
}: SpanGridProps) {
  return <div className={cn(colSpan, className)}>{children}</div>;
}
