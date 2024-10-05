import React from "react";
import LayoutPadding from "./layout-padding";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Testimonials() {
  return (
    <LayoutPadding className='flex flex-col space-y-8 mt-14 px-6 lg:mt-64'>
      <div className='flex justify-between items-center'>
        <Text variant={"h2"}>What they say about us</Text>
        <div className='flex items-center space-x-4'>
          <Button variant={"outline"} size={"icon"} className='rounded-full'>
            <MoveLeft size={16} strokeWidth={1.5} />
          </Button>
          <Button variant={"outline"} size={"icon"} className='rounded-full'>
            <MoveRight size={16} strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      <div className='self-center flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-14'>
        <Testimonial />
        <Testimonial />
      </div>
    </LayoutPadding>
  );
}

function Testimonial() {
  return (
    <div className='flex flex-col space-y-6'>
      <Text variant={"p"} className='text-foreground sm:w-[60ch]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
        voluptatem sequi quis veritatis explicabo, nihil vero recusandae
        sapiente consequatur neque dolorum doloribus, fugiat eos vitae at
        doloremque.
      </Text>

      <Text variant={"p"} className='text-foreground/50 font-semibold'>
        John Doe
      </Text>
    </div>
  );
}
