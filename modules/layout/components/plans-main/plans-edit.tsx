import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/modules/common/ui/dialog";
import { NotebookPen } from "lucide-react";
import { Text } from "../../../common/components/text";
import PlansEditForm from "./plans-edit-form";
import { PlansActionButton } from "./plans-overview";

export default function PlansEdit() {
  return (
    <Dialog>
      <DialogTrigger>
        <PlansActionButton text='Edit plan'>
          <NotebookPen size={20} strokeWidth={1.5} />
        </PlansActionButton>
      </DialogTrigger>
      <DialogContent
        id='scroll'
        className='h-screen min-w-[100vw] border lg:min-w-[50vw] lg:h-[90vh] lg:max-w-[40vw] flex flex-col space-y-6'>
        <DialogHeader className='h-max'>
          <DialogTitle>
            <Text variant={"h5"} className='text-center font-semibold'>
              Edit your Savings Plan
            </Text>
          </DialogTitle>
          <DialogDescription>
            <Text
              variant={"p"}
              className='text-foreground/60 italic text-center'>
              Start planning for your financial goals by creating a savings plan
            </Text>
          </DialogDescription>
        </DialogHeader>
        <PlansEditForm />
      </DialogContent>
    </Dialog>
  );
}
