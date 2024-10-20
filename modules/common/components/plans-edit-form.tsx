"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/modules/common/ui/button";
import FormFieldCustom from "./form-field-custom";
import { PlanDatePicker } from "./plans-date-picker";
import { PlansPriorityPicker } from "./plans-priority-picker";
import { PlansType } from "./plans-type";
import { PlansContributionFrequency } from "./plans-contribution-frequency";
import { PlansCategories } from "./plans-categories";
import { Textarea } from "@/modules/common/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import FormFieldCurrency from "./form-field-currency";
import { Text } from "./text";

export function TextareaDemo() {
  return <Textarea placeholder='Type your message here.' />;
}

const formSchema = z.object({
  planName: z.string().min(2).max(50),
  targetAmount: z.number().min(3),
  startingAmount: z.number().min(3),
  note: z.string(),
});

export default function PlansEditForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      planName: "",
      targetAmount: undefined,
      startingAmount: undefined,
      note: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormFieldCustom
          control={form.control}
          name='planName'
          label='Plan Name'
          placeholder='Enter plan name... e.g Vacation Fund'
        />

        <div className='flex items-center space-x-4'>
          <FormFieldCurrency
            control={form.control}
            name='targetAmount'
            label='Target Amount'
            type='number'
            placeholder='Enter target amount...'
          />
          <FormFieldCurrency
            control={form.control}
            name='startingAmount'
            label='Starting Amount'
            type='number'
            placeholder='Enter starting amount...'
          />
        </div>

        <div className='flex items-center space-x-4'>
          <PlansPriorityPicker />
          <PlanDatePicker />
        </div>
        <div className='flex items-center space-x-4'>
          <PlansType />
          <PlansContributionFrequency />
        </div>
        <div className='flex w-full items-center space-x-4'>
          <PlansCategories />
        </div>

        <FormField
          control={form.control}
          name='note'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Text variant='h5' className='font-semibold'>
                  Note
                </Text>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Type your note here...'
                  className='resize-none min-h-52 placeholder:text-xs'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className='w-full flex justify-end'>
          <Button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-background shadow'>
            Add Plan
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
