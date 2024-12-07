import type { Metadata } from "next";
import Header from "@/components/Header";
import AppContextProvider from "@/context/appContextProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Qrest | About us",
  description: "Building the futuristic apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
