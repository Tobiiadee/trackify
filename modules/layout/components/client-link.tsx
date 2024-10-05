"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Text } from "@/modules/common/components/text";

type UserLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const linkStyles = cva("link-hover relative", {
  variants: {
    active: {
      true: "link-active",
    },
  },
});

export const ClientLink = forwardRef<HTMLAnchorElement, UserLinkProps>(
  ({ href, className, children, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(linkStyles({ active: isActive }), className)}
        {...props}>
        <Text variant={"p"}>{children}</Text>
      </Link>
    );
  }
);

ClientLink.displayName = "ClientLink";
