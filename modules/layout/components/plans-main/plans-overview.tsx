"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card } from "../../../common/ui/card";
import { Text } from "../../../common/components/text";
// import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/common/ui/tooltip";
import { House, NotepadText, PauseIcon, Play } from "lucide-react";
import { PriorityLevel } from "./plans-item";
import RadialProgress from "../../../common/ui/radial-progress";
import PlansEdit from "./plans-edit";
import { Textarea } from "../../../common/ui/textarea";
import { Button } from "../../../common/ui/button";
import { PlansEditContribution } from "./plans-edit-contribution";

export default function PlansOverview() {
  const [editNote, setEditNote] = useState(false);
  const [pausePlan, setPausePlan] = useState(false);

  const handleEditNote = () => {
    setEditNote((prev) => !prev);
  };

  const handlePausePlan = () => {
    setPausePlan((prev) => !prev);
  };

  return (
    <Card
      id='scroll'
      className='w-full border-none shadow-none lg:shadow-lg lg:border-2 col-span-2 sm:max-h-[76vh] sm:p-4 flex flex-col space-y-6 sm:overflow-y-auto'>
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
          <PlansEdit />

          <PlansActionButton onClick={handleEditNote} text='Edit note'>
            <NotepadText size={20} strokeWidth={1.5} />
          </PlansActionButton>

          {!pausePlan ? (
            <PlansActionButton onClick={handlePausePlan} text='Pause plan'>
              <PauseIcon size={20} strokeWidth={1.5} />
            </PlansActionButton>
          ) : (
            <PlansActionButton onClick={handlePausePlan} text='Play plan'>
              <Play size={20} strokeWidth={1.5} />
            </PlansActionButton>
          )}

          <PlansEditContribution />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <PlansOverviewBody />
        <div className='w-full grid place-items-center'>
          <RadialProgress value={30} />
        </div>
      </div>

      <div className='flex flex-col space-y-2'>
        <Text variant={"h5"} className='font-semibold italic'>
          Note:
        </Text>
        <NoteItem editNote={editNote} setEditNote={handleEditNote} />
      </div>
    </Card>
  );
}

interface ActionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export function PlansActionButton({
  children,
  text,
  onClick,
}: ActionButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={onClick}
          className='grid place-items-center p-1.5 border-transparent border hover:border-border rounded-md'>
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
    <div className='flex flex-col space-y-2'>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          Category:
        </Text>
        <Text variant={"p"} className='font-semibold'>
          Rent/Mortgage
        </Text>
      </div>
      <div className='flex items-center space-x-2'>
        <Text variant={"p"} className='font-semibold italic text-foreground/60'>
          Frequency:
        </Text>
        <Text variant={"p"} className='font-semibold'>
          Monthly
        </Text>
      </div>
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

function NoteItem({
  editNote,
  setEditNote,
}: {
  editNote: boolean;
  setEditNote: () => void;
}) {
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const [noteValue, setNoteValue] = React.useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias et aut fuga, soluta dolorem odio dignissimos quaerat nesciunt nobis laudantium placeat iusto architecto saepe quae suscipit vel."
  );

  // console.log(editNote);

  useEffect(() => {
    if (editNote === true) {
      noteRef.current?.focus();
    }
  }, [editNote]);

  return (
    <>
      {editNote && (
        <div className='flex flex-col space-y-2'>
          <label htmlFor='note' className='hidden'></label>
          <Textarea
            id='note'
            ref={noteRef}
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)} // Allow updating the value
            placeholder='Note'
            className='p-4 rounded-lg w-full text-xs max-h-max min-h-max'
          />
          <div className='flex items-center justify-end '>
            <Button
              onClick={setEditNote}
              className='bg-blue-600 hover:bg-blue-700'>
              <Text variant={"p"}>Save</Text>
            </Button>
          </div>
        </div>
      )}

      {!editNote && (
        <div className='p-4 rounded-lg border border-dashed'>
          <Text variant={"p"} className='text-xs'>
            {noteValue}
          </Text>
        </div>
      )}
    </>
  );
}
