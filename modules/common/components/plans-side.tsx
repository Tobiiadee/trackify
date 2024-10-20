import React from "react";
import { Text } from "./text";
import { Button } from "../ui/button";
import PlansItem from "./plans-item";
import InputSearch from "./input-search";

export default function PlansSide() {
  return (
    <div className='col-span-1 flex flex-col space-y-6'>
      <div className='flex flex-col space-y-2'>
        <div className='flex items-center justify-between'>
          <Text variant={"h5"} className='font-semibold'>
            Saved Plans
          </Text>
        </div>
        <InputSearch placeholder="Search plan..." />
      </div>
      <PlansFilter />

      <div
        id='scroll'
        className='flex flex-col space-y-4 h-[50vh] overflow-y-auto pr-2'>
        {Array.from({ length: 8 }).map((_, i) => (
          <PlansItem key={i} />
        ))}
      </div>
    </div>
  );
}



function PlansFilter() {
  return (
    <div className='rounded-md bg-foreground/5 flex items-center w-max'>
      <Button className='bg-transparent shadow-none hover:bg-background rounded-none text-foreground/60 hover:text-foreground focus:bg-background focus:text-foreground focus:shadow-lg'>
        <Text variant={"p"} className='font-semibold'>
          All
        </Text>
      </Button>
      <Button className='bg-transparent shadow-none hover:bg-background rounded-none text-foreground/60 hover:text-foreground focus:bg-background focus:text-foreground focus:shadow-lg'>
        <Text variant={"p"} className='font-semibold'>
          Oldest
        </Text>
      </Button>
      <Button className='bg-transparent shadow-none hover:bg-background rounded-none text-foreground/60 hover:text-foreground focus:bg-background focus:text-foreground focus:shadow-lg'>
        <Text variant={"p"} className='font-semibold'>
          Newest
        </Text>
      </Button>
    </div>
  );
}
