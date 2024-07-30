import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  fontFamily:{
    'gilroy-medium':'Gilroy Medium',
    'gilroy-semibold':'Gilroy Semibold',
    'poppins':["'Poppins',sans-serif"]
  },
  colors:{
    'dark-black':"#084CAF",
    "dark-grey":"#4E4E4E",
    "light-blue":"0A02EC14"
  }
    },
  },
  plugins: [],
};
export default config;