import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qrest | About us",
  description: "Qrest is the solution to building your product seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
