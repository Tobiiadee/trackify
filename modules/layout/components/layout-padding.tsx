import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Adjust import path for your cn utility function

interface LayoutPaddingProps {
  children: React.ReactNode;
  className?: string;
  margin?: boolean;
}

// Define a cva variant for the margin
const layoutPaddingClasses = cva("container mx-auto pb-10 md:px-16 h-max", {
  variants: {
    margin: {
      true: "mt-6",
      false: "",
    },
  },
});

export default function LayoutPadding({
  children,
  className,
  margin,
}: LayoutPaddingProps) {
  return (
    <div className={cn(layoutPaddingClasses({ margin }), className)}>
      {children}
    </div>
  );
}
