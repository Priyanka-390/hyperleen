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
"custom-sm":"15.78px",
    "custom-3xl":"32px",
    "custom-8xl":"80px"
  },
  colors:{
    "dark-blue": "#084CAF",
    "dark-grey": "#4E4E4E",
    "light-blue": "0A02EC14",
    "sky-blue": "#EBEBFD",
    "rich-black":"#010101",
      },
      lineHeight: {
        "100": "100%",
        "135":"135%",
        140:"140%",
        145:"145%",
             "120":"120%",
                "150":"150%",
                "158":"158%",
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
      backgroundImage:{
        'footer':"url(/assets/images/webp/footer-bg.webp)",
        'footer-line':'linear-gradient(90deg, rgba(199, 199, 199, 0) 0%, #CDCDCD 34.5%, #CDCDCD 65%, rgba(196, 196, 196, 0) 100%)',
        
        
      },
      backgroundSize:{
        full: "100% 100%"
      }
    },
  },
  plugins: [],
};
export default config;