import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  fontFamily:{
    'poppins':["'Poppins',sans-serif"]
  },
  colors:{
    'dark-black':"#084CAF",
    "dark-grey":"#4E4E4E",
    "light-blue":"0A02EC14"
      },
      lineHeight:{
        140:"140%",
              },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
