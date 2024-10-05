import Logo from "@/modules/common/components/logo";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { Separator } from "@/modules/common/ui/separator";
import React from "react";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className='w-full bg-foreground text-background px-8 sm:px-16 pt-16 pb-8 flex flex-col space-y-6'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        <div className='flex flex-col space-y-4'>
          <Logo />
        </div>
        <div className='flex flex-col space-y-4'>
          <Text variant={"p"} className=''>
            Privacy Policy
          </Text>
          <Text variant={"p"} className=''>
            Terms of Service
          </Text>
          <Text variant={"p"} className=''>
            Contact Us
          </Text>
        </div>
      </div>

      <Separator />

      <div className='flex flex-col space-y-4 sm:flex-row justify-between sm:items-center w-full'>
        <SocialLinks />
        <Text variant={"p"} className=''>
          © 2023 Trackify. All rights reserved.
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
        className='rounded-full hover:bg-transparent bg-transparent'>
        <TwitterLogoIcon />
      </Button>
      <Button
        variant={"outline"}
        size={"icon"}
        className='rounded-full hover:bg-transparent bg-transparent'>
        <DiscordLogoIcon />
      </Button>
    </div>
  );
}
