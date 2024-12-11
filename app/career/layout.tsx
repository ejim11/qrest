import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://qrest-qtnj.vercel.app/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | Career",
  description:
    "Qrest seeks passionate individuals to deliver user-centric solutions. Competitive benefits, room to grow.",
  openGraph: {
    description:
      "Qrest seeks passionate individuals to deliver user-centric solutions. Competitive benefits, room to grow.",
    type: "website",
    url: "https://qrest-qtnj.vercel.app/career",
    images: [
      { url: "https://i.ibb.co/n3G8MZV/Screenshot-2024-12-11-at-16-39-58.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
