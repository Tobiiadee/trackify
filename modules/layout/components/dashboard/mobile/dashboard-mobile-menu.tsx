import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import { Button } from "@/modules/common/ui/button";
import {
  ArrowLeftRight,
  Calculator,
  ClipboardPlus,
  Menu,
  Settings,
  SquareDashedKanban,
} from "lucide-react";
import { Text } from "@/modules/common/components/text";
import { DashboardIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Logo from "@/modules/common/components/logo";

const menuLinks = [
  {
    text: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon className='w-[18px] h-[18px]' />,
  },
  {
    text: "Transaction",
    href: "/dashboard/transactions",
    icon: <ArrowLeftRight size={22} strokeWidth={1.5} />,
  },
  {
    text: "Plans",
    href: "/dashboard/plans",
    icon: <SquareDashedKanban size={22} strokeWidth={1.5} />,
  },
  {
    text: "Budget",
    href: "/dashboard/budgets",
    icon: <ClipboardPlus size={22} strokeWidth={1.5} />,
  },
  {
    text: "Invoice",
    href: "/dashboard/invoice",
    icon: <Calculator size={22} strokeWidth={1.5} />,
  },
];

export default function DashboardMobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className='px-2 border border-transparent rounded-md active:border-blue-600 hover:bg-transparent active:bg-transparent'>
          <Menu size={22} strokeWidth={1.5} />
        </Button>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between h-full pl-10'>
        <div className='flex flex-col space-y-16'>
          <div>
            <Logo />
          </div>
          <div className='flex flex-col space-y-6'>
            {menuLinks.map((link) => (
              <SheetClose key={link.text} asChild>
                <MenuItem text={link.text} href={link.href}>
                  {link.icon}
                </MenuItem>
              </SheetClose>
            ))}
          </div>
        </div>

        <div className='mb-10'>
          <SheetClose asChild>
            <MenuItem text='Settings' href='/dashboard/settings'>
              <Settings size={22} strokeWidth={1.5} />
            </MenuItem>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuItem({
  children,
  text,
  href,
}: {
  children: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className='flex space-x-2 items-center'>
      {children}
      <Text variant={"p"}>{text}</Text>
    </Link>
  );
}
