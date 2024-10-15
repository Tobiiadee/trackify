import React from "react";
import { Text } from "./text";
import { Progress } from "../ui/progress";
import { House, NotebookPen } from "lucide-react";
import DashboardCard from "@/modules/layout/components/dashboard-card";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/common/ui/tooltip";

export default function PlansItem() {
  return (
    <DashboardCard className='w-full flex flex-col space-y-4 border cursor-pointer active:scale-95 transition hover:border hover:border-blue-500'>
      <div className='flex space-x-2 items-center justify-between'>
        <div className='flex space-x-4'>
          <div>
            <div className='w-10 h-10 bg-foreground/5 rounded-md flex items-center justify-center'>
              <House size={26} strokeWidth={1.5} />
            </div>
          </div>

          <div className='flex flex-col space-y-0.5 w-full'>
            <Text variant={"p"} className='capitalize font-semibold'>
              New Home
            </Text>
            <div className='flex items-center space-x-1'>
              <Text variant={"p"} className='text-foreground/60 text-xs'>
                Deadline:
              </Text>
              <Text variant={"p"} className='text-foreground text-xs'>
                2023-05-01
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1'>
          <Text variant={"p"} className='text-xs text-foreground/60'>
            Priority Level:
          </Text>
          <PriorityLevel priority='High' />
        </div>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Activities: 37
        </Text>
      </div>

      <div className='flex flex-col space-y-2'>
        <div className='flex items-center justify-between'>
          <Text variant={"p"} className='text-blue-600 text-xs'>
            $378.00
          </Text>
          <Text variant={"p"} className='text-foreground/60 text-xs'>
            $300.00
          </Text>
        </div>

        <Progress value={30} max={100} />
      </div>
    </DashboardCard>
  );
}

interface PriorityLevelProps {
  priority: "High" | "Medium" | "Low";
}

export function PriorityLevel({ priority }: PriorityLevelProps) {
  // Define colors for each priority level
  const priorityColors = {
    High: {
      bgColor: "bg-red-200",
      textColor: "text-red-500",
    },
    Medium: {
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-500",
    },
    Low: {
      bgColor: "bg-green-200",
      textColor: "text-green-500",
    },
  };

  // Get the colors based on the priority level
  const { bgColor, textColor } = priorityColors[priority];

  return (
    <div className='flex items-center justify-between'>
      <Text
        variant={"p"}
        className={`${bgColor} ${textColor} text-xs p-1 rounded font-medium`}>
        {priority}
      </Text>
    </div>
  );
}

function AddNote() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant={"ghost"}>
            <NotebookPen size={18} strokeWidth={1.5} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add note</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
