"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { GoogleIcon } from "./create-account-form";
import { Text } from "./text";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function SignInForm() {
  const { push } = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    push("/dashboard");
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='w-full flex justify-center'>
          <Button
            variant={"outline"}
            type='button'
            className='flex items-center space-x-4 w-[80%] hover:bg-transparent'>
            <GoogleIcon />
            <Text variant={"p"} className='font-medium'>
              Sign up with Google
            </Text>
          </Button>
        </div>

        <div className='flex items-center space-x-1 w-full'>
          <div className='w-full'>
            <Separator />
          </div>

          <Text variant={"p"} className='text-foreground/65'>
            OR
          </Text>
          <div className='w-full'>
            <Separator />
          </div>
        </div>

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='w-full flex justify-end'>
          <Link href={""}>
            <Text variant={"p"} className='text-blue-500 text-[12px]'>
              Did you forget your password?
            </Text>
          </Link>
        </div>

        <div className='w-full flex justify-center pt-4'>
          <Button type='submit' className='w-[80%]'>
            Continue
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
