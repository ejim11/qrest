import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://qrest-qtnj.vercel.app/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | Our Work",
  description:
    "Explore how we’ve helped businesses transform their ideas into impactful digital experiences that drive growth and success.",
  openGraph: {
    description:
      "Explore how we’ve helped businesses transform their ideas into impactful digital experiences that drive growth and success.",
    type: "website",
    url: "https://qrest-qtnj.vercel.app/our-work",
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
