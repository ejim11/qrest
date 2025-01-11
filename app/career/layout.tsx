import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qrest.ng/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | Career",
  description:
    "Qrest seeks passionate individuals to deliver user-centric solutions. Competitive benefits, room to grow.",
  openGraph: {
    description:
      "Qrest seeks passionate individuals to deliver user-centric solutions. Competitive benefits, room to grow.",
    type: "website",
    url: "https://www.qrest.ng/career",
    images: [{ url: "https://i.ibb.co/Yh8CSLn/IMG-0627.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
