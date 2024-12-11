import type { Metadata } from "next";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import AppContextProvider from "@/context/appContextProvider";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Qrest",
  description: "Empowering brand with custom solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} `}>
      <body>
        <AppContextProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </AppContextProvider>
      </body>
    </html>
  );
}
