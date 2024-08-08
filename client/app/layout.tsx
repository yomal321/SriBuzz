import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import LoadingBar from "@/components/LoadingBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingBar />
        <Announcement />
        <NavBar />

        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
