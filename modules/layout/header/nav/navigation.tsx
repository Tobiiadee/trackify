import React from "react";
import { ClientLink } from "../../components/client-link";

const navigationLinks = [
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className='flex items-center space-x-6'>
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <ClientLink href={"/"}>{link.name}</ClientLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
