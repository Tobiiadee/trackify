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
import { Download } from "lucide-react";

// Define the prop types
interface FormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
  icon?: React.ReactNode;
  // Optionally, add more fields as needed (like validation rules, errors, etc.)
}

// Create the reusable component
const FormFieldIcon: FC<FormFieldProps> = ({
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
      render={({ field }) => (
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
                {...field}
                className='pl-10'
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

export default FormFieldIcon;
