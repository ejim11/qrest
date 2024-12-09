import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qrest | Career",
  description: "Building the futuristic apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
