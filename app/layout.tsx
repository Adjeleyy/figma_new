import type { Metadata } from "next";
import { League_Spartan, Hind } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const hind = Hind({
  variable: "--font-hind-base",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Narendra",
  description: "Figma design replica for Narendra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${hind.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full min-w-full flex flex-col mx-auto overflow-x-hidden">{children}</body>
    </html>
  );
}
