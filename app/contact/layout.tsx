import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qrest.ng/"),
  authors: [{ name: "Ejim Favour," }, { name: "Qrest Company" }],
  title: "Qrest | Contact",
  description:
    "Contact Qrest for inquiries, support, or feedback. Our team is ready to assist you today!",
  openGraph: {
    description:
      "Contact Qrest for inquiries, support, or feedback. Our team is ready to assist you today!",
    type: "website",
    url: "https://www.qrest.ng/contact",
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
