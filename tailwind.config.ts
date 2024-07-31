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
    "custom-3xl":"32px",
    "custom-8xl":"80px"
  },
  colors:{
    "dark-blue": "#084CAF",
    "dark-grey": "#4E4E4E",
    "light-blue": "0A02EC14",
    "sky-blue": "#EBEBFD",
      },
      lineHeight: {
        "100": "100%",
        "135":"135%",
        140:"140%",
             "120":"120%",
                "150":"150%",
              },
              boxShadow:{
                'primary-btn':"4px 4px 20px 0px #084CAF4D",
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