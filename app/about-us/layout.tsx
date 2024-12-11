import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://qrest-qtnj.vercel.app/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | About us",
  description: `Qrest provides user-centric business solutions, specializing in fast and efficient services to drive growth. We offer expertise in branding, software, and digital marketing.
`,
  openGraph: {
    description: `Qrest provides user-centric business solutions, specializing in fast and efficient services to drive growth. We offer expertise in branding, software, and digital marketing.
`,
    type: "website",
    url: "https://qrest-qtnj.vercel.app/about-us",
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
