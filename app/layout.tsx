import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import PageTransition from "@/app/components/effects/PageTransition";
import CustomCursor from "@/app/components/effects/CustomCursor";
import SmokeEffect from "@/app/components/effects/SmokeEffect";

export const metadata: Metadata = {
  title: "Giorgi Bachidze | Portfolio",
  description:
    "Full-stack web developer skilled in React, Next.js, TypeScript, Node.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative max-w-[1920px] m-auto ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <CustomCursor />
        <SmokeEffect />
        <PageTransition />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
