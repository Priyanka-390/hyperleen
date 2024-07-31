import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  fontFamily:{
    'poppins':"'Poppins',sans-serif"
  },
  fontSize: {
    "custom-9xl":"80px"
  },
  colors:{
    "dark-blue": "#084CAF",
    "dark-grey": "#4E4E4E",
    "light-blue": "0A02EC14",
    "sky-blue": "#EBEBFD",
      },
      lineHeight:{
140:"140%",
     "120":"120",
        "150":"150%",
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
