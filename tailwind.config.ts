import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "custom-9xl":"80px"
      },
      fontFamily: {
        "gilroy-medium": "Gilroy Medium",
        "gilroy-semibold": "Gilroy Semibold",
        poppins: ["'Poppins',sans-serif"],
      },
      colors: {
        "dark-blue": "#084CAF",
        "dark-grey": "#4E4E4E",
        "light-blue": "0A02EC14",
        "sky-blue": "#EBEBFD"
      },
      lineHeight: {
        "120":"120",
        "150":"150%"
      },
      boxShadow: {
        "sky-blue":"0px 4px 16px 0px #084CAF1F",
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
