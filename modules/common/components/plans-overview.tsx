import React from "react";
import { Card } from "../ui/card";
import { Text } from "./text";
// import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/common/ui/tooltip";
import {
  House,
  NotebookPen,
  NotepadText,
  PackagePlus,
  PauseIcon,
} from "lucide-react";
import { PriorityLevel } from "./plans-item";
import RadialProgress from "../ui/radial-progress";

export default function PlansOverview() {
  return (
    <Card className='w-full col-span-2 max-h-[76vh] p-4 flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div>
            <div className='grid place-items-center p-2 bg-card-foreground/5 rounded-md'>
              <House size={24} strokeWidth={1.5} />
            </div>
          </div>

          <Text variant={"h4"} className='capitalize font-semibold'>
            New Home
          </Text>
        </div>

        <div className='flex items-center space-x-0.5'>
          <ActionButton text='Edit plan'>
            <NotebookPen size={20} strokeWidth={1.5} />
          </ActionButton>

          <ActionButton text='Edit note'>
            <NotepadText size={20} strokeWidth={1.5} />
          </ActionButton>

          <ActionButton text='Pause plan'>
            <PauseIcon size={20} strokeWidth={1.5} />
          </ActionButton>

          <ActionButton text='Add contribution'>
            <PackagePlus size={20} strokeWidth={1.5} />
          </ActionButton>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <PlansOverviewBody />
        <RadialProgress value={30} />
      </div>

      <div className='flex flex-col space-y-2'>
        <Text variant={"h5"} className="font-semibold italic">Note:</Text>
        <NoteItem />
      </div>
    </Card>
  );
}

interface ActionButtonProps {
  children: React.ReactNode;
  text: string;
}

function ActionButton({ children, text }: ActionButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='grid place-items-center p-1.5 border-transparent border hover:border-border rounded-md'>
          {children}
        </TooltipTrigger>
        <TooltipContent className='mr-14'>
          <p className='text-xs'>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function PlansOverviewBody() {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          Priority:
        </Text>
        <PriorityLevel priority='Medium' />
      </div>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          Target:
        </Text>
        <Text variant={"p"} className='font-semibold'>
          $3000.00
        </Text>
      </div>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          Saved:
        </Text>
        <Text variant={"p"} className='font-semibold'>
          $1000.00
        </Text>
      </div>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          Monthly Contribution:
        </Text>
        <Text variant={"p"} className='font-semibold'>
          $200.00
        </Text>
      </div>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          End Date:
        </Text>
        <Text variant={"p"} className='font-semibold'>
          24 December
        </Text>
      </div>
    </div>
  );
}

function NoteItem() {
  return (
    <div className='border border-dashed p-4 rounded-lg'>
      <Text variant={"p"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias et
        aut fuga, soluta dolorem odio dignissimos quaerat nesciunt nobis
        laudantium placeat iusto architecto saepe quae suscipit vel.
      </Text>
    </div>
  );
}
