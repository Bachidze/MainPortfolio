import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import PageTransition from "@/app/components/effects/PageTransition";
import CustomCursor from "@/app/components/effects/CustomCursor";
import SmokeEffect from "@/app/components/effects/SmokeEffect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`relative max-w-[1920px] m-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
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
