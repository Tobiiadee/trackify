import React from "react";
import { Text } from "./text";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Text variant={"h3"}>Trackify</Text>
    </Link>
  );
}
