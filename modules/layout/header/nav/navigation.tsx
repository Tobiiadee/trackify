import React from "react";
import { ClientLink } from "../../components/client-link";

const navigationLinks = [
  {
    name: "Features",
    href: "/more_info#features",
  },
  {
    name: "Resources",
    href: "/more_info#resources",
  },
  {
    name: "FAQ",
    href: "/more_info#faq",
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className='flex items-center space-x-6'>
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <ClientLink href={link.href}>{link.name}</ClientLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
