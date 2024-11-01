import React, { FC } from "react";
import { Control, Controller } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Text } from "./text";

// Define the prop types
interface FormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
  icon?: React.ReactNode;
}

// Function to format input as 'DD-MM-YY'
const formatDateInput = (input: string) => {
  input = input.replace(/\D/g, ""); // Remove non-digit characters

  const day = input.slice(0, 2);
  const month = input.slice(2, 4);
  const year = input.slice(4, 8);

  let formattedValue = day;
  if (month) formattedValue += `-${month}`;
  if (year) formattedValue += `-${year}`;

  // console.log(typeof formattedValue);
  

  return formattedValue;
};

// Create the reusable component
const FormFieldIconDate: FC<FormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  type,
  icon,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...rest } }) => (
        <FormItem className='w-full'>
          <FormLabel>
            <Text variant={"p"} className='font-semibold'>
              {label}
            </Text>
          </FormLabel>
          <FormControl className='relative w-full'>
            <div className='relative'>
              <Input
                type={type}
                placeholder={placeholder}
                value={value || ""}
                onChange={(e) => onChange(formatDateInput(e.target.value))}
                className='pl-10'
                {...rest}
              />
              <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                {icon}
              </div>
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldIconDate;
