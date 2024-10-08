import React from "react";
import { Text } from "./text";
import SignInForm from "./sign-in-form";

export default function SignIn() {
  return (
    <div className='w-full pt-10 flex flex-col space-y-4 items-center px-6'>
      <div className='flex flex-col space-y-4 items-center'>
        <div className='flex flex-col items-center space-y-1'>
          <Text variant={"h2"} className='font-semibold'>
            Hi there!
          </Text>
          <Text variant={"p"} className='text-foreground/60'>
            Welcome to Trackify
          </Text>
        </div>
      </div>
        

      <div className='w-full lg:w-[50%]'>
        <SignInForm />
      </div>
    </div>
  );
}
