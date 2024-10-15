import Metadata from "next";
import "./globals.css";
import "@fontsource/poppins";

export const metadata: Metadata = {
  title: "Trackify",
  description: "Track and manage your expenses effortlessly with Trackify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  );
}
