import { FC } from "react";
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
import NairaSvg from "./naira-svg";

// Define the prop types
interface FormFieldProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
  // Optionally, add more fields as needed (like validation rules, errors, etc.)
}

// Create the reusable component
const FormFieldCurrency: FC<FormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  type,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>
            <Text variant={"p"} className="font-semibold">{label}</Text>
          </FormLabel>
          <FormControl className='relative'>
            <div className='relative'>
              <div className='absolute left-2 top-1/2 -translate-y-1/2'>
                <NairaSvg />
              </div>
              <Input
                type={type}
                className='pl-8'
                placeholder={placeholder}
                {...field}
              />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCurrency;
