import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/modules/common/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/modules/common/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/modules/common/ui/drawer";
import { Input } from "@/modules/common/ui/input";
import { Label } from "@/modules/common/ui/label";
import { Text } from "@/modules/common/components/text";
import useMediaQuery from "@/hooks/use-media-query";

export default function InvoiceSend() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='bg-blue-600 hover:bg-blue-700 text-background w-[90%]'>
            <Text variant={"p"}>Review & Send</Text>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] flex flex-col space-y-3'>
          <DialogHeader>
            <DialogTitle>Send Invoice</DialogTitle>
            <DialogDescription>
              <Text variant={"p"}>
                Make sure you have filled all the details
              </Text>
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='bg-blue-600 hover:bg-blue-700 text-background w-[90%]'>
          <Text variant={"p"}>Review & Send</Text>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='flex flex-col space-y-3'>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Send Invoice</DrawerTitle>
          <DrawerDescription>
            <Text variant={"p"}>Make sure you have filled all the details</Text>
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className='px-4' />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [email, setEmail] = React.useState("");

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className='grid gap-2'>
        <Label htmlFor='email'>
          <Text variant={"p"}>Enter recipient&apos;s email</Text>
        </Label>
        <Input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          placeholder='example@example.com'
        />
      </div>
      <Button
        type='submit'
        disabled={!email}
        className='bg-blue-600 hover:bg-blue-700 transition'>
        Send
      </Button>
    </form>
  );
}
