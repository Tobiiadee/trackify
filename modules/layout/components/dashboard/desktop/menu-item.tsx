"use client";

import { LucideProps } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/common/ui/tooltip";
import { Text } from "@/modules/common/components/text";
import { cn } from "@/lib/utils";

interface MenuItemProps extends LucideProps {
  href?: string;
  children: ReactNode;
  tooltip?: string;
}

export function MenuItem({ href, children, tooltip }: MenuItemProps) {
  const { push } = useRouter();
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            onClick={() => push(`${href}`)}
            className={cn(
              "group flex items-center justify-center hover:text-blue-600 rounded-md cursor-pointer",
              isActive ? "text-blue-600" : "text-foreground/60"
            )}>
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent className='mb-6 ml-8'>
          <Text variant={"p"} className='text-[12px]'>
            {tooltip}
          </Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
