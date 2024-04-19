/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3730A3",

          secondary: "#0000ff",

          accent: "#00ab00",

          neutral: "#181e1e",

          "base-100": "#fff8ff",

          info: "#00d9ff",

          success: "#00ae00",

          warning: "#ff7100",

          error: "#ff0000",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "475px",
      // => @media (min-width: 475px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }

      "4xl": "2560px",
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [daisyui],
};
