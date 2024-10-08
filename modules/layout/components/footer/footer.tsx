import Logo from "@/modules/common/components/logo";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { Separator } from "@/modules/common/ui/separator";
import React from "react";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ClientLink } from "../client-link";

export default function Footer() {
  return (
    <div className='w-full bg-foreground text-background px-8 sm:px-16 pt-16 pb-8 flex flex-col space-y-6'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        <div className='flex flex-col space-y-4'>
          <Logo />
          <Text variant={"p"}>Simplifying your financial future</Text>
        </div>

        <div className='flex flex-col space-y-4'>
          <ClientLink className="w-max" href={"/"}>About Us</ClientLink>
          <ClientLink className="w-max" href={"/"}>Features</ClientLink>
          <ClientLink className="w-max" href={"/"}>Help Center</ClientLink>
          <ClientLink className="w-max" href={"/"}>Contact Us</ClientLink>
        </div>

        <div className='flex flex-col space-y-4'>
          <ClientLink className="w-max" href={"/"}>Terms of Services</ClientLink>
          <ClientLink className="w-max" href={"/"}>Privacy Policy</ClientLink>

        </div>
        
      </div>

      <Separator />

      <div className='flex flex-col space-y-4 sm:flex-row justify-between sm:items-center w-full'>
        <SocialLinks />
        <Text variant={"p"} className=''>
          © 2024 Trackify. All rights reserved.
        </Text>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='flex space-x-4 items-center'>
      <Button
        variant={"outline"}
        size={"icon"}
        className='rounded-full group hover:text-background hover:bg-transparent bg-transparent'>
        <TwitterLogoIcon className="group-hover:scale-110 transition"/>
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        className='rounded-full group hover:text-background hover:bg-transparent bg-transparent'>
        <DiscordLogoIcon className="group-hover:scale-110 transition"/>
      </Button>
    </div>
  );
}
