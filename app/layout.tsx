import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/medstrom/images/icon.png",
    shortcut: "/medstrom/images/icon.png",
    apple: "/medstrom/images/icon.png",
  },
  title: "Medstrom — Clinically Led Hospital Solutions",
  description:
    "Medstrom delivers precision-driven hospital bed and patient care solutions across acute care, ICU, and specialised environments.",
};

import { AOSInit } from "./_components/AOSInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
