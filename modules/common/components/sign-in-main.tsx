"use client";

import React from "react";
import Logo from "./logo";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import { Text } from "./text";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SignIn from "./sign-in";

export default function SignInMain() {
  const { push } = useRouter();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 w-full h-full'>
      <div className='col-span-2 lg:bg-foreground/5 h-full flex flex-col p-6 lg:rounded-l-2xl'>
        <div className='flex items-center justify-between'>
          <Logo />
          <Button
            onClick={() => push("/")}
            variant={"ghost"}
            className='flex space-x-2 px-0'>
            <MoveLeft size={18} strokeWidth={1.5} />
            <Text variant={"p"} className='font-medium'>
              Back to home
            </Text>
          </Button>
        </div>

        <div className='w-full'>
          <SignIn />
        </div>
      </div>

      <div className='relative hidden sm:block w-full h-full overflow-hidden lg:rounded-r-2xl'>
        <Image
          src={"/images/hero-image.jpg"}
          alt='Sign In Image'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
}
