import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/modules/common/ui/accordion";
import { Text } from "@/modules/common/components/text";

const faqs = [
  {
    triggerText: "What is Trackify?",
    contentText:
      "Trackify is a free finance management tool that helps you track your expenses, income, and net worth. It's designed to be easy to use and accessible to everyone, regardless of their financial background.",
  },
  {
    triggerText: "How does Trackify work?",
    contentText:
      "Trackify uses a combination of automation and an algorithm to help you track your expenses and income.",
  },
  {
    triggerText: "Is my data secure?",
    contentText:
      "Yes, we use the latest encryption methods and two-factor authentication (2FA) to protect your data.",
  },
  {
    triggerText: "How do I get started?",
    contentText:
      "You can get started by creating an account on our website. Once you're signed up, you can start using Trackify to track your expenses and income.",
  },
  {
    triggerText: "Can I use the app offline?",
    contentText:
      "Yes, with our PWA features, you can track your finances even without an internet connection.",
  },
  {
    triggerText: "Is there a mobile app?",
    contentText:
      "Yes! Our web app is a PWA, which means you can install it on your mobile device and use it like a native app.",
  },
];

export default function Faq() {
  return (
    <div id="faq" className="mt-8">
      <Accordion type='single' collapsible className="w-[70%] mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            id={index.toString()}
            triggerText={faq.triggerText}
            contentText={faq.contentText}
          />
        ))}
      </Accordion>
    </div>
  );
}

function FaqItem({
  triggerText,
  contentText,
  id,
}: {
  triggerText: string;
  contentText: string;
  id: string;
}) {
  return (
    <AccordionItem value={id}>
      <AccordionTrigger>
        <Text variant={"p"}>{triggerText}</Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text variant={"p"}>{contentText}</Text>
      </AccordionContent>
    </AccordionItem>
  );
}
