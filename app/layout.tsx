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
  metadataBase: new URL("https://www.qrest.ng/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest",
  description: "Empowering brand with custom solutions",
  openGraph: {
    description: "Empowering brand with custom solutions",
    type: "website",
    url: "https://www.qrest.ng/",
    images: [{ url: "https://i.ibb.co/Yh8CSLn/IMG-0627.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} `}>
      <body className="overflow-x-hidden">
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
