import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import React from "react";
import SpanGrid from "./span-grid";
import { Separator } from "@/modules/common/ui/separator";
import Link from "next/link";

export default function Hero() {
  return (
    <SpanGrid
      colSpan='col-span-1'
      className='flex flex-col space-y-6 pl-8 sm:pl-16 pb-10 lg:pb-0 mt-8'>
      <div className='flex items-center space-x-2'>
        <div className='w-6'>
          <Separator />
        </div>
        <Text variant={"p"} className='text-foreground/50'>
          Trackify
        </Text>
      </div>

      <Text variant={"h1"} className=''>
        Track Your Finances Effortlessly.
      </Text>

      <div className='flex flex-col space-y-1'>
        <Text variant={"p"} className='text-foreground/50 w-[40ch]'>
          Easily manage your expenses, budgets, and savings—all in one place.
        </Text>
        <Text variant={"p"} className='text-foreground/50 w-[40ch]'>
          Get to manage and track your financial plan for better days in future.
        </Text>
      </div>

      <Button asChild className='w-max text-background'>
        <Link href={"/get-started"}>
          <Text variant={"p"}>Get Started</Text>
        </Link>
      </Button>
    </SpanGrid>
  );
}
