import Logo from "@/modules/common/components/logo";
import React from "react";
import LayoutPadding from "../components/layout-padding";
import Navigation from "./nav/navigation";
// import { Button } from "@/modules/common/ui/button";
// import { Text } from "@/modules/common/components/text";
// import { LogIn } from "lucide-react";
import SpanGrid from "../components/span-grid";

export default function Header() {
  return (
    <SpanGrid colSpan='col-span-1'>
      <LayoutPadding
        margin={true}
        className='flex items-center justify-between px-5 sm:px-0'>
        <Logo />
        <Navigation />
        {/* <Button variant={"outline"} className='flex items-center space-x-4'>
          <Text variant={"p"}>Get Started</Text>
          <LogIn size={18} strokeWidth={1} />
        </Button> */}
      </LayoutPadding>
    </SpanGrid>
  );
}
