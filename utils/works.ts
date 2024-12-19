import { StaticImageData } from "next/image";
import qwikserveImg from "../assets/works/qwikserve.png";
import onuutoImg from "../assets/works/onuuto.png";
import petrite1 from "../assets/works/petrite1.png";
import petrite2 from "../assets/works/petrite2.png";
import herbologyImg from "../assets/works/herbology.png";
import ticketHiveImg from "../assets/works/tickethive.svg";
import elysiumImg from "../assets/works/elysium.svg";

export const works: {
  title: string;
  text: string;
  link: string;
  image: StaticImageData;
  tags: string[];
  year: string;
  linkText: string;
  slug: string;
}[] = [
  {
    title: "Qwikserve",
    text: "We designed & developed a sleek Customer App, Rider App, Admin Panel. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility. Qwikserve app is live on Apple Store & google play store.",
    link: "https://qwikserve.ng/",
    image: qwikserveImg,
    tags: [
      "UIUX Design",
      "Mobile Apps Development",
      "Web development",
      "web design",
    ],
    year: "2023",
    linkText: "view website",
    slug: "qwikserve",
  },
  {
    title: "Elysium Surrogacy",
    text: "We developed a sleek, responsive website with a modernized brand identity that catered to a global audience. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility.",
    link: "https://www.instagram.com/elysiansurrogacy_?igsh=MTJpdWFuYTY5NWs5dA==",
    image: elysiumImg,
    tags: [
      "UI/UX Design",
      "Frontend Development",
      "web development",
      "web design",
    ],
    year: "2023",
    linkText: "visit website",
    slug: "elysium",
  },
  {
    title: "Onu Uto",
    text: "Summerville is a premium real estate development company that focuses on creating luxury living spaces that blend comfort, sustainability, and elegance. The goal of this project is to develop a compelling brand identity that reflects Summerville’s commitment to high-quality living experiences, sophisticated design, and environmentally conscious building practices",
    link: "https://www.instagram.com/onu_uto1?igsh=bDBrZ3BhdjQzNnVh",
    image: onuutoImg,
    tags: [
      "digital branding",
      "social media management",
      "graphics design",
      "video Editing",
    ],
    year: "2024",
    linkText: "view instagram",
    slug: "onu-uto",
  },
  {
    title: "Petrite",
    text: "We developed a sleek Customer App, Website, Admin Panel. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility. Petrite app is live on Apple Store & google play store.",
    link: " https://www.petrite.ng/",
    image: petrite1,
    tags: [
      "Frontend Development",
      "Mobile App Development",
      "web development",
      "web design",
    ],
    year: "2024",
    linkText: "live website",
    slug: "petrite",
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
      "video Editing",
    ],
    year: "2024",
    linkText: "view instagram",
    slug: "petrite",
  },
  {
    title: "Herbology",
    text: "Summerville is a premium real estate development company that focuses on creating luxury living spaces that blend comfort, sustainability, and elegance. The goal of this project is to develop a compelling brand identity that reflects Summerville’s commitment to high-quality living experiences, sophisticated design, and environmentally conscious building practices.",
    link: "",
    image: herbologyImg,
    tags: [
      "digital branding",
      "social media management",
      "graphics design",
      "video Editing",
    ],
    year: "2024",
    linkText: "view instagram",
    slug: "herbology",
  },
  {
    title: "TicketHive",
    text: "We developed a sleek, responsive website with a modernized brand identity that catered to a global audience. Our team integrated seamless payment solutions, optimized product pages for search engines, and ensured mobile responsiveness for improved accessibility.",
    link: "https://ticket-hive-clone.vercel.app/",
    image: ticketHiveImg,
    tags: [
      "UI/UX Design",
      "Frontend Development",
      "web development",
      "web design",
    ],
    year: "2024",
    linkText: "visit website",
    slug: "tickethive",
  },
];
