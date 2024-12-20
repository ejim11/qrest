import { StaticImageData } from "next/image";
import qwikserveImg from "../assets/works/qwikserve.png";
import onuutoImg from "../assets/works/onuuto.png";
import petrite1 from "../assets/works/petrite1.png";
import petrite2 from "../assets/works/petrite2.png";
import herbologyImg from "../assets/works/herbology.png";
import ticketHiveImg from "../assets/works/tickethive.svg";
import elysiumImg from "../assets/works/elysium.svg";
import trajdenImg from "../assets/works/trajden.svg";

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
    text: "Qwikserve logistics is essential to connecting businesses, people, and communities all over the world, whether it be through sending important documents, parcels, or products. We designed & developed a sleek Customer App, Rider App, Admin Panel. Qwikserve app is live on Apple Store & google play store.",
    link: "https://qwikserve.ng/",
    image: qwikserveImg,
    tags: [
      "UI/UX Design",
      "Mobile Apps Development",
      "Web development",
      "web design",
    ],
    year: "2023",
    linkText: "live website",
    slug: "qwikserve",
  },
  {
    title: "Onu Uto",
    text: "Onu uto (sweet mouth) Is simply as the name implies ,mouth watering dishes made just for everybody. They offer varieties of freshly homemade delicious dishes and Drinks which come in Daily and weekend packages Delivered right at your doorstep. The goal of this project was to develop a compelling brand identity that reflects Onu Uto’s commitment to Food lovers. And marketing the brand to the audience.",
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
    text: "Petrite is your trusted online destination for high-quality pet food, toys, accessories, and healthcare products. We developed a sleek Customer App, Website, and Admin Panel. Petrite app is live on Apple Store & google play store.",
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
    text: "Petrite is your trusted online destination for high-quality pet food, toys, accessories, and healthcare products. The goal of this project was to develop a compelling brand identity that reflects Petrite’s commitment to pet lovers.",
    link: "",
    image: petrite2,
    tags: ["digital branding", "graphics design"],
    year: "2024",
    linkText: "view instagram",
    slug: "petrite",
  },
  {
    title: "Herbology",
    text: "The “Herbology” Brand is centered around celebrating and preserving the rich heritage of nature by promoting traditional medicines and natural healing practices. The goal of this project was to develop a compelling brand identity that reflects Herbology.",
    link: "",
    image: herbologyImg,
    tags: ["digital branding", "graphics design"],
    year: "2024",
    linkText: "view instagram",
    slug: "herbology",
  },
  {
    title: "TicketHive",
    text: "TicketHive is your go-to event ticketing platform to discover unforgettable experiences. Craft live or virtual events, sell tickets, and create lasting memories—one ticket at a time. We designed & developed a sleek responsive and user-friendly website.",
    link: "https://ticket-hive-clone.vercel.app/",
    image: ticketHiveImg,
    tags: [
      "UI/UX Design",
      "Frontend Development",
      "web development",
      "web design",
    ],
    year: "2024",
    linkText: "live website",
    slug: "tickethive",
  },
  {
    title: "Elysian Surrogacy",
    text: "Elysian Surrogacy Limited is dedicated to providing compassionate and ethical surrogacy services to intended parents and surrogates. The goal of this project was to develop a compelling brand identity that reflects Elysian Surrogacy. And marketing the brand to the audience.",
    link: "https://www.instagram.com/elysiansurrogacy_?igsh=MTJpdWFuYTY5NWs5dA==",
    image: elysiumImg,
    tags: [
      "digital branding",
      "social media management",
      "graphics design",
      "video Editing",
    ],
    year: "2024",
    linkText: "view instagram",
    slug: "elysium",
  },
  {
    title: "Trajden",
    text: "Transformative Justice and Development Network (TRAJDEN) focuses on promoting education, healthcare, gender equality, and justice, empowering marginalized groups through advocacy, skills development, and reforms.  The goal of this project was to develop a compelling brand identity that reflects TRAJDEN.",
    link: "https://www.instagram.com/traj_den?igsh=azdjd2o4YnBpOGZ1",
    image: trajdenImg,
    tags: ["digital branding", "graphics design"],
    year: "2024",
    linkText: "view instagram",
    slug: "elysium",
  },
];
