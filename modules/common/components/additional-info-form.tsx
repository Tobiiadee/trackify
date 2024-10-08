import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import FormFieldCustom from "./form-field-custom";
import { Combobox } from "./custom-combox";
import InfoCalendar from "./info-calendar";
import { useOnboardingStore } from "@/modules/store/onboarding-store";

const occupationList = [
  { value: "Un-employed", label: "Un-employed" },
  { value: "Employed", label: "Employed" },
  { value: "Self-employed", label: "Self-employed" },
];

const incomeRange = [
  { value: "Less than $50,000", label: "Less than $50,000" },
  {
    value: "Between $50,000 and $100,000",
    label: "Between $50,000 and $100,000",
  },
  {
    value: "Between $100,000 and $250,000",
    label: "Between $100,000 and $250,000",
  },
  { value: "More than $250,000", label: "More than $250,000" },
  { value: "Prefer not to say", label: "Prefer not to say" },
];

const additionalInfoFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export default function AdditionalInfoForm() {
  const { setIsFinishUp } = useOnboardingStore();
  const [occupation, setOccupation] = useState("");
  const [range, setRange] = useState("");

  const form = useForm<z.infer<typeof additionalInfoFormSchema>>({
    resolver: zodResolver(additionalInfoFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: new Date(),
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof additionalInfoFormSchema>) {
    const formData = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      dob: values.dob,
      occupation: occupation,
      incomeRange: range,
    };
    console.log(formData);
    if (values) setIsFinishUp(true);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='w-full flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center'>
          <FormFieldCustom
            control={form.control}
            name='firstName'
            label='First Name'
            placeholder='Enter your first name'
            type='text'
          />
          <FormFieldCustom
            control={form.control}
            name='lastName'
            label='Last Name'
            placeholder='Enter your last name'
            type='text'
          />
        </div>

        <div className='w-full flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center'>
          <FormFieldCustom
            control={form.control}
            name='phoneNumber'
            label='Phone Number'
            placeholder='Enter your phone number'
            type='text'
          />

          <InfoCalendar
            control={form.control}
            name='dob'
            label='Date of Birth'
          />
        </div>

        <div className='w-full flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 items-center'>
          <Combobox
            items={occupationList}
            placeholder='Occupation'
            label='Occupation'
            onSelect={(value) => {
              setOccupation(value);
            }}
            selectedValue={""}
          />
          <Combobox
            items={incomeRange}
            placeholder='Income Range'
            label='Income Range'
            onSelect={(value) => {
              setRange(value);
            }}
            selectedValue={""}
          />
        </div>

        <div className='w-full flex justify-center pt-8'>
          <Button type='submit' className='w-[80%]'>
            Continue
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
