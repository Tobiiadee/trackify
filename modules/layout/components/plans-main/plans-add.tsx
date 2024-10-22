import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/modules/common/ui/dialog";
import { Button } from "../../../common/ui/button";
import { Plus } from "lucide-react";
import { Text } from "../../../common/components/text";
import PlansAddForm from "./plans-add-form";

export default function PlansAdd() {
  return (
    <Dialog>
      <DialogTrigger asChild className="self-end sm:self-start">
        <Button className='flex space-x-2 bg-blue-600 hover:bg-blue-700 text-background shadow rounded-md w-max'>
          <Plus size={20} strokeWidth={1.5} />
          <Text variant={"p"} className='text-background'>
            Add Plan
          </Text>
        </Button>
      </DialogTrigger>
      <DialogContent
        id='scroll'
        className='h-screen lg:h-[90vh] overflow-y-auto lg:max-w-[40vw] flex flex-col space-y-6'>
        <DialogHeader className='h-max'>
          <DialogTitle>
            <Text variant={"h5"} className='text-center font-semibold'>
              Create A New Savings Plan
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
        <PlansAddForm />
      </DialogContent>
    </Dialog>
  );
}
