import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qrest | Contact",
  description: "Talk to our experts about your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
