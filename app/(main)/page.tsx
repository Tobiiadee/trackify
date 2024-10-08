// import Hero from '@/modules/layout/components/hero'
import FinancialTips from "@/modules/layout/components/financial-tips";
import Hero from "@/modules/layout/components/hero";
import HeroImage from "@/modules/layout/components/hero-image";
import KeepEasy from "@/modules/layout/components/keep-easy";
import Partnership from "@/modules/layout/components/partnership";
import ExpenseTracking from "@/modules/layout/components/expense-tracking";
import Testimonials from "@/modules/layout/components/testimonials";
import WhatSafe from "@/modules/layout/components/what-safe";
import Header from "@/modules/layout/header/header";
import React from "react";
import BudgetManagment from "@/modules/layout/components/budget-managment";
import RealTimeInsight from "@/modules/layout/components/real-time-insight";
import Faq from "@/modules/layout/components/faq";

export default function Home() {
  return (
    <div className=''>
      <div className='w-full lg:h-[80vh] grid lg:grid-cols-2 gap-6'>
        <div className=''>
          <Header />
          <Hero />
        </div>
        <HeroImage />
      </div>
      <Partnership />
      <ExpenseTracking />
      <BudgetManagment />
      <RealTimeInsight />
      <WhatSafe />
      <FinancialTips />
      <Testimonials />
      <Faq />
      <KeepEasy />
    </div>
  );
}
