import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

const freshman = localFont({
  src: "./fonts/Freshman.ttf",
  variable: "--font-freshman",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "BarnBoard",
  description: "Moonboard like app for personal use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${freshman.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
