import { StaticImageData } from "next/image";
import pastProject1 from "../assets/home/past-project1.png";
import pastProject2 from "../assets/home/past-project2.png";
import pastProject3 from "../assets/home/past-project3.png";
import pastProject4 from "../assets/home/past-project4.png";
import pastProject5 from "../assets/home/past-project5.png";

export const pastProjectsData: {
  image: StaticImageData;
  title: string;
  text: string;
}[] = [
  {
    image: pastProject1,
    title: "Qwikserve",
    text: "UI/UX Design & Mobile development",
  },
  {
    image: pastProject2,
    title: "Onu Uto",
    text: "Branding & Marketing",
  },
  {
    image: pastProject3,
    title: "Petrite",
    text: "Mobile development",
  },
  {
    image: pastProject4,
    title: "Petrite",
    text: "Branding",
  },
  {
    image: pastProject5,
    title: "Herbology",
    text: "Branding",
  },
  {
    image: pastProject5,
    title: "TicketHive",
    text: "Web design & development",
  },
  {
    image: pastProject5,
    title: "Elysian Surrogacy",
    text: "Branding & Marketing",
  },
  {
    image: pastProject5,
    title: "Trajden",
    text: "Branding",
  },
  {
    image: pastProject5,
    title: "iFarm Technology Ltd",
    text: "Branding",
  },
];

export const hearFromClients = [
  {
    title: "An Impressive Work",
    text: "We are thrilled with the exceptional work Qrest has done on our customer app, rider app, and admin panel. They have truly transformed our business operations and enhanced the overall customer experience.",
    clientName: "Ambrose Ebuka",
    position: "Founder/CEO Qwikserve",
  },
  {
    title: "Was nice working with you",
    text: "Thank you for helping us get the first step of a very long journey. We're impressed with the efficient and professionalism in the development of our mobile app, website and admin panel",
    clientName: "Chibuikem Divine N.",
    position: "Co-Founder Petrite",
  },
  {
    title: "I’m impressed",
    text: "Working with Qrest on our branding project was a game changer for Herbology. Their team took the time to understand our vision and values, translating them into a cohesive brand identity that truly resonates with our audience.",
    clientName: "Ugochukwu Princewill A.",
    position: "Founder/CEO Herbology",
  },
  {
    title: "Perfect from the first view",
    text: "Partnering with Qrest to revamp our logo and brand identity was a fantastic experience. They truly captured our vision and delivered a fresh, modern look that resonates with our audience. We've seen a noticeable boost in engagement and positive feedback since the rebranding.",
    clientName: "Alex Chima",
    position: "Founder Onu Uto",
  },
  {
    title: "Perfect from the first view",
    text: "Partnering with Qrest to revamp our logo and brand identity was a fantastic experience. They truly captured our vision and delivered a fresh, modern look that resonates with our audience. We've seen a noticeable boost in engagement and positive feedback since the rebranding.",
    clientName: "Kelechi Imo",
    position: "Executive Director TRAjDEN",
  },
];
