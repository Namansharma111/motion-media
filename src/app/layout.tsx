import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Syne } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOTION MEDIA | Video Production, Product Photography & Creative Studio",
  description: "Next-gen studio for Video Production, Product Photography, Podcast Production, YouTube Content, Brand & Corporate Films, and Creative Direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${outfit.variable} ${syne.variable} h-full antialiased selection:bg-[#E5192C] selection:text-white`}
    >
      <body className="min-h-full bg-[#FAFAFC] text-slate-900 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

