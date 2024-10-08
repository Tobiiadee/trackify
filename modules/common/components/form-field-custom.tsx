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
const FormFieldCustom: FC<FormFieldProps> = ({
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
            <Text variant={"p"}>{label}</Text>
          </FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCustom;
