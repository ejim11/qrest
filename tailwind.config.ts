import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["var(--font-inter)"],
      dmsans: ["var(--font-dmsans)"],
      geist: ["var(--font-geist)"],
    },
    colors: {
      current: "curentColor",
      transparent: "transparent",
      purple: {
        1: "#6835F5",
        2: "#6949EB",
        3: "#A38DFF",
        4: "#DDD5FF",
      },
      white: {
        1: "rgba(255, 255, 255, 1)",
        2: "rgba(255, 255, 255, 0.7)",
        3: "rgba(255, 255, 255, 0.6)",
      },
      grey: {
        1: "#7E7E7E",
        2: "#999999",
        3: "#8A8C8F",
        4: "#B4B4B4",
        5: "#EBEBEB",
        6: "#F6F6F6",
        7: "rgb(207,207,207,0.7)",
        8: "#E9E9E9",
        9: "#FAF9FC",
        10: "#F6F6F6",
        11: "#F6F6F6",
      },
      black: {
        1: "#000000",
        2: "#222222",
        3: "#343434",
        4: "#3C3C3C",
      },
      blue: {
        1: "#110C24",
      },
      pink: {
        1: "#FA08FF",
      },
    },
    extend: {
      backgroundImage: {
        "home-1":
          "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(85,0,224,0.7) , rgba(0,0,0,1) 90%), url('../assets/home/bg-1.svg')",
      },
      gridTemplateColumns: {
        "service-grid": "repeat(auto-fit, minmax(28rem, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
