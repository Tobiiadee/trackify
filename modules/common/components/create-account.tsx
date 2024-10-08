import React from "react";
import CreateAccountForm from "./create-account-form";
import Logo from "./logo";
import { Text } from "./text";


export default function CreateAccount() {
  return (
    <div className='sm:w-full lg:w-[45%] pt-10 flex flex-col space-y-4 items-center px-6'>
      <div className='flex flex-col space-y-4 items-center'>
        <Logo />
        <div className='flex flex-col items-center space-y-1'>
          <Text variant={"h4"} className='font-semibold'>
            Create Account
          </Text>
          <Text variant={"p"} className='text-foreground/60 text-[11px]'>
            Provide an email address and choose your password
          </Text>
        </div>
      </div>

      <div className="w-full">
        <CreateAccountForm />
      </div>
    </div>
  );
}


