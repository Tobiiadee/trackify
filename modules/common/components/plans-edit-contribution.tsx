"use client";

import { Button } from "@/modules/common/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/modules/common/ui/dialog";
import { Input } from "@/modules/common/ui/input";
import { Label } from "@/modules/common/ui/label";
import { PackagePlus } from "lucide-react";
import { PlansActionButton } from "./plans-overview";
import { Text } from "./text";
import NairaSvg from "./naira-svg";
import { useState } from "react";

export function PlansEditContribution() {
  const [contribution, setContribution] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PlansActionButton text='Add contribution'>
          <PackagePlus size={20} strokeWidth={1.5} />
        </PlansActionButton>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] flex flex-col space-y-1'>
        <DialogHeader>
          <DialogTitle>
            <Text variant={"h5"} className='font-semibold'>
              Add Contribution
            </Text>
          </DialogTitle>

          <DialogDescription>
            <Text variant={"p"} className='text-foreground/60 italic text-xs'>
              Boost your savings by setting up automatic contributions
            </Text>
          </DialogDescription>
        </DialogHeader>

        <div className='flex flex-col space-y-4'>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor='name' className=''>
              <Text variant={"p"} className='font-semibold'>
                Contribution
              </Text>
            </Label>
            <div className='relative w-full h-max'>
              <Input
                onChange={(e) => setContribution(e.target.value)}
                type='number'
                id='name'
                className='w-full pl-8'
              />
              <div className='absolute left-2 top-1/2 -translate-y-1/2 w-max'>
                <NairaSvg />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className=''>
          <DialogClose asChild>
            <Button
              disabled={contribution === ""}
              className='bg-blue-600 hover:bg-blue-700'>
              <Text variant={"p"}>Save</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
