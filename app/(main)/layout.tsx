import Footer from "@/modules/layout/components/footer/footer";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-w-screen">  
      {children}
      <Footer/>
    </div>
  );
}
