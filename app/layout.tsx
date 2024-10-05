import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/poppins';



export const metadata: Metadata = {
  title: "Trackify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
