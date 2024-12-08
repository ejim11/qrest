import { StaticImageData } from "next/image";
import qwikserveImg from "../assets/works/qwikserve.png";
import onuutoImg from "../assets/works/onuuto.png";
import petrite1 from "../assets/works/petrite1.png";
import petrite2 from "../assets/works/petrite2.png";
import herbologyImg from "../assets/works/herbology.png";

export const works: {
  title: string;
  text: string;
  link: string;
  image: StaticImageData;
  tags: string[];
  year: string;
  linkText: string;
}[] = [
  {
    title: "Qwikserve",
    text: "We developed a sleek, responsive website with a modernized brand identity that catered to a global audience. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility.",
    link: "",
    image: qwikserveImg,
    tags: [
      "ui/ux design",
      "frontend development",
      "web development",
      "web design",
    ],
    year: "2023",
    linkText: "view website",
  },
  {
    title: "Onu Uto",
    text: "Summerville is a premium real estate development company that focuses on creating luxury living spaces that blend comfort, sustainability, and elegance. The goal of this project is to develop a compelling brand identity that reflects Summerville’s commitment to high-quality living experiences, sophisticated design, and environmentally conscious building practices.",
    link: "",
    image: onuutoImg,
    tags: [
      "digital branding",
      "social media management",
      "graphics design",
      "videography",
    ],
    year: "2023",
    linkText: "view instagram",
  },
  {
    title: "Petrite",
    text: "We developed a sleek, responsive website with a modernized brand identity that catered to a global audience. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility.",
    link: "",
    image: petrite1,
    tags: [
      "ui/ux design",
      "frontend development",
      "web development",
      "web design",
    ],
    year: "2023",
    linkText: "live website",
  },
  {
    title: "Petrite",
    text: "Summerville is a premium real estate development company that focuses on creating luxury living spaces that blend comfort, sustainability, and elegance. The goal of this project is to develop a compelling brand identity that reflects Summerville’s commitment to high-quality living experiences, sophisticated design, and environmentally conscious building practices.",
    link: "",
    image: petrite2,
    tags: [
      "digital branding",
      "social media management",
      "graphics design",
      "videography",
    ],
    year: "2023",
    linkText: "view instagram",
  },
  {
    title: "Herbology",
    text: "We developed a sleek, responsive website with a modernized brand identity that catered to a global audience. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility.",
    link: "",
    image: herbologyImg,
    tags: [
      "ui/ux design",
      "frontend development",
      "web development",
      "web design",
    ],
    year: "2023",
    linkText: "live website",
  },
];
