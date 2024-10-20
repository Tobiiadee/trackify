import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

interface InputSearchProps {
    placeholder?: string;
}

export default function InputSearch({placeholder}: InputSearchProps) {
  return (
    <div className='relative w-[350px] max-w-full'>
      <Search
        size={18}
        strokeWidth={1.5}
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
      />
      <Input
        placeholder={placeholder}
        className='w-full pl-10' // Adjust padding for the icon
      />
    </div>
  );
}
