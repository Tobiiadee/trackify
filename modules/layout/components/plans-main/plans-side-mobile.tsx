import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import { Button } from "../../../common/ui/button";
import { Text } from "../../../common/components/text";
import { AlignCenter } from "lucide-react";
import { PlansFilter } from "./plans-side";
import PlansItem from "./plans-item";
import InputSearch from "../../../common/components/input-search";

export default function PlansSideMobile() {
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} className='bg-blue-50 flex items-center space-x-4'>
            <AlignCenter size={20} strokeWidth={1.5} />
            <Text variant={"p"} className=''>
              View Plans
            </Text>
          </Button>
        </SheetTrigger>
        <SheetContent className='w-full flex flex-col space-y-3 sm:min-w-[65vw]'>
          <div className='flex flex-col space-y-2'>
            <div className='flex items-center justify-between'>
              <Text variant={"h5"} className='font-semibold'>
                Saved Plans
              </Text>
            </div>
            <InputSearch placeholder='Search plan...' />
          </div>
          <PlansFilter />

          <div
            id='scroll'
            className='flex flex-col space-y-4 overflow-y-auto pr-2'>
            {Array.from({ length: 8 }).map((_, i) => (
              <SheetClose asChild key={i}>
                <PlansItem key={i} />
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
