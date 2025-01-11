import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qrest.ng/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | About us",
  description: `Qrest provides user-centric business solutions, specializing in fast and efficient services to drive growth. We offer expertise in branding, software, and digital marketing.
`,
  openGraph: {
    description: `Qrest provides user-centric business solutions, specializing in fast and efficient services to drive growth. We offer expertise in branding, software, and digital marketing.
`,
    type: "website",
    url: "https://www.qrest.ng/about-us",
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
