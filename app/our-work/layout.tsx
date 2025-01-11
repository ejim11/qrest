import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qrest.ng/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | Our Work",
  description:
    "Explore how we’ve helped businesses transform their ideas into impactful digital experiences that drive growth and success.",
  openGraph: {
    description:
      "Explore how we’ve helped businesses transform their ideas into impactful digital experiences that drive growth and success.",
    type: "website",
    url: "https://www.qrest.ng/our-work",
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
