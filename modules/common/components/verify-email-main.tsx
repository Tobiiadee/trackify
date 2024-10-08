import React from "react";
import Logo from "./logo";
import { Text } from "./text";
import { VerifyEmail } from "./verify-email";

export default function VerifyEmailMain() {
  return (
    <div className='sm:w-full lg:w-[45%] pt-10 flex flex-col space-y-4 items-center px-6'>
      <div className='flex flex-col space-y-4 items-center'>
        <Logo />
        <div className='flex flex-col items-center space-y-1'>
          <Text variant={"h4"} className='font-semibold'>
            Verify Email
          </Text>
          <Text variant={"p"} className='text-foreground/60 text-[11px] text-center'>
            We sent an email to your inbox. Please check your email and enter
            the verification code.
          </Text>
        </div>
      </div>

      <div className='w-full'>
        <VerifyEmail />
      </div>
    </div>
  );
}
