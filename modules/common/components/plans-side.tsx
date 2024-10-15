import React from "react";
import { Text } from "./text";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import PlansItem from "./plans-item";

export default function PlansSide() {
  return (
    <div className='col-span-1 flex flex-col space-y-6'>
      <div className='flex flex-col space-y-2'>
        <div className='flex items-center justify-between'>
          <Text variant={"h5"} className=''>
            Saved Plans
          </Text>
          <Button variant='ghost' className=''>
            <Search size={20} strokeWidth={1.5} />
          </Button>
        </div>
        <PlansSearchInput />
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

function PlansSearchInput() {
  return (
    <div className=''>
      <Input placeholder='Search plans...' />
    </div>
  );
}

function PlansFilter() {
  return (
    <div className='rounded-md bg-foreground/5 flex items-center w-max'>
      <Button className='bg-transparent shadow-none hover:bg-background rounded-none text-foreground/60 hover:text-foreground focus:bg-background focus:text-foreground'>
        <Text variant={"p"} className='font-semibold'>
          All
        </Text>
      </Button>
      <Button className='bg-transparent shadow-none hover:bg-background rounded-none text-foreground/60 hover:text-foreground focus:bg-background focus:text-foreground'>
        <Text variant={"p"} className='font-semibold'>
          Oldest
        </Text>
      </Button>
      <Button className='bg-transparent shadow-none hover:bg-background rounded-none text-foreground/60 hover:text-foreground focus:bg-background focus:text-foreground'>
        <Text variant={"p"} className='font-semibold'>
          Newest
        </Text>
      </Button>
    </div>
  );
}
