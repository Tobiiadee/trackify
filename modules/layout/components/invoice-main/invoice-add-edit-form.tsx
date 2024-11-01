"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/modules/common/ui/button";
import FormFieldCustom from "@/modules/common/components/form-field-custom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Text } from "@/modules/common/components/text";
import { Calendar, Plus, ScrollText, X } from "lucide-react";
import FormFieldIcon from "@/modules/common/components/form-field-icon";
import FormFieldIconDate from "@/modules/common/components/form-field-icon-date";
// import { useInvoiceStore } from "@/modules/store/invoice-store";
import { useRouter } from "next/navigation";

type InvoiceItem = {
  itemName: string;
  rate: number;
  qty: number;
  amount: number;
};

export interface InvoiceAddEditFormProps {
  invoiceNumber: string;
  issuedDate: string;
  dueDate: string;
  paymentDate: string;
  items: InvoiceItem[];
}

const formSchema = z.object({
  invoiceNumber: z.string(),
  issuedDate: z.string(),
  dueDate: z.string(),
  paymentDate: z.string(),
  items: z.array(
    z.object({
      itemName: z.string(),
      rate: z.number().min(0, "Rate must be positive"),
      qty: z.number().min(1, "Quantity must be at least 1"),
      amount: z.number().min(0, "Amount must be positive"),
    })
  ),
});

export default function InvoiceAddEditForm({
  invoiceNumber,
  issuedDate,
  dueDate,
  items,
  paymentDate,
}: InvoiceAddEditFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceNumber: invoiceNumber,
      issuedDate: issuedDate,
      dueDate: dueDate,
      items: items, // Start with one item
      paymentDate: paymentDate,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/dashboard/invoice/new-invoice");
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 mt-6'>
        <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4'>
          <InvoiceDropDown />
          <FormFieldIcon
            name='invoiceNumber'
            control={form.control}
            placeholder='00-0000'
            label='Invoice Number'
            icon={
              <ScrollText
                size={20}
                strokeWidth={1.5}
                className='text-foreground/60'
              />
            }
          />
        </div>

        <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4'>
          <FormFieldIconDate
            name='issuedDate'
            control={form.control}
            placeholder='00-00-0000'
            label='Issued Date'
            icon={
              <Calendar
                size={20}
                strokeWidth={1.5}
                className='text-foreground/60'
              />
            }
          />

          <FormFieldIconDate
            name='dueDate'
            control={form.control}
            placeholder='00-00-0000'
            label='Due Date'
            icon={
              <Calendar
                size={20}
                strokeWidth={1.5}
                className='text-foreground/60'
              />
            }
          />
        </div>

        {/* Dynamic Items Section */}
        <div className='flex flex-col space-y-4 sm:border rounded-lg sm:p-4 divide-y sm:divide-y-0'>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 pt-4 sm:pt-0'>
              <FormFieldCustom
                name={`items.${index}.itemName`}
                control={form.control}
                placeholder='Item name...'
                label='Item Name'
              />

              <div className='flex space-x-4 items-center'>
                <FormFieldCustom
                  name={`items.${index}.rate`}
                  control={form.control}
                  placeholder='#0,00'
                  label='Rate'
                  type='number'
                />

                <FormFieldCustom
                  name={`items.${index}.qty`}
                  control={form.control}
                  placeholder='00'
                  label='Qty'
                  type='number'
                />

                <FormFieldCustom
                  name={`items.${index}.amount`}
                  control={form.control}
                  placeholder='#0,00'
                  label='Amount'
                  type='number'
                />

                <Button
                  variant={"ghost"}
                  type='button'
                  size={"icon"}
                  className='rounded-full px-2 mt-6'
                  onClick={() => remove(index)}>
                  <X size={20} strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          ))}

          <div className='flex items-center justify-center w-full pt-6'>
            <Button
              type='button'
              variant={"ghost"}
              className='flex items-center space-x-1 w-max hover:bg-transparent p-2 '
              onClick={() =>
                append({ itemName: "", rate: 0, qty: 1, amount: 0 })
              }>
              <div className='flex items-center justify-center p-1 bg-blue-600 text-background rounded-full'>
                <Plus size={20} strokeWidth={1.5} />
              </div>
              <Text variant={"p"} className='text-blue-600 font-semibold'>
                Add Item
              </Text>
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <FormFieldCustom
              name='paymentDate'
              control={form.control}
              placeholder='Pay within 0 day. Thank you for your business'
              label='Date'
            />
          </div>
          <div className='flex flex-col space-y-6'>
            <div className='flex items-center justify-end space-x-2'>
              <Text variant={"p"} className='text-foreground/60'>
                Subtotal:
              </Text>
              <Text variant={"p"} className='font-semibold'>
                $100.00
              </Text>
            </div>

            <div className='flex items-center justify-end space-x-2'>
              <Text variant={"p"} className='text-foreground/60'>
                Tax (15%):
              </Text>
              <Text variant={"p"} className='font-semibold'>
                $00.00
              </Text>
            </div>

            <div className='flex items-center justify-end space-x-2'>
              <Text variant={"p"} className='text-foreground/60'>
                Discount (10%):
              </Text>
              <Text variant={"p"} className='font-semibold'>
                $00.00
              </Text>
            </div>

            <div className='flex items-center justify-end space-x-2'>
              <Text variant={"p"} className='text-foreground/60'>
                Total Amount:
              </Text>
              <Text variant={"p"} className='font-semibold'>
                $200.00
              </Text>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center w-full'>
          <Button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-background shadow rounded-md w-[90%]'>
            <Text variant={"p"}>Confirm</Text>
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

function InvoiceDropDown() {
  return (
    <DropdownMenu>
      <div className='flex flex-col space-y-2 w-full'>
        <Text variant={"p"} className='font-semibold'>
          Logo
        </Text>
        <DropdownMenuTrigger className='w-full group'>
          <div className='w-full border group-focus:border-blue-600 rounded-md flex justify-between items-center px-4 py-[7px]'>
            <div className='flex space-x-1 items-center'>
              <Text variant={"p"} className='text-foreground/60 text-xs'>
                JPG, PNG, AI Less than 4MB
              </Text>
            </div>
            <TriangleDownIcon className='w-5 h-5' />
          </div>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent className='w-80'>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
