import { Inter } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import LoadingBar from "@/components/LoadingBar";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({
  children,
  params, // This should be automatically populated
}: LayoutProps) {
  const { lang } = params; // Extract language from params
  return (
    <html lang={lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <LoadingBar />
        <Announcement />
        <NavBar params={params} />
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
