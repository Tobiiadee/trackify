import React from "react";
import Logo from "./logo";
import { Text } from "./text";
import AdditionalInfoForm from "./additional-info-form";

export default function AdditionaInfoMain() {
  return (
    <div className='sm:w-full lg:w-[60%] pt-10 flex flex-col space-y-4 items-center px-6'>
      <div className='flex flex-col space-y-4 items-center'>
        <Logo />
        <div className='flex flex-col items-center space-y-1'>
          <Text variant={"h4"} className='font-semibold'>
            Additional Information
          </Text>
          <Text
            variant={"p"}
            className='text-foreground/60 text-[11px] text-center'>
            To provide personalized financial insights, we need a few more
            details
          </Text>
        </div>
      </div>

      <div className='w-full'>
        <AdditionalInfoForm />
      </div>
    </div>
  );
}
