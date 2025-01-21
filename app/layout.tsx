import type { Metadata } from "next";
import { siteConfig } from "../config/site-config";
import localFont from "next/font/local"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Navbar from "@/components/navbar";

const satoshi = localFont({
  display: "swap",
  src: [
    {
      path: "../public/fonts/satoshi.ttf",
    }
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn("antialiased relative min-h-screen p-4 bg-black", satoshi.variable)}
      >
        <ShootingStars
          minDelay={1000}
          maxDelay={2000}
          minSpeed={5}
          maxSpeed={10}
          starColor="#325EAA"
          trailColor="#E83D99"
          starHeight={2}
          starWidth={20} />
        <StarsBackground
          starDensity={0.0002}
          allStarsTwinkle={true}
        />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
