/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  daisyui: {
    themes: [
      {
        myThemeDark: {
          primary: "#36454F",

          secondary: "#e00000",

          accent: "#0098aa",

          neutral: "#06303e",

          "base-100": "36454F",

          info: "#0098ea",

          success: "#a4f970",

          warning: "#ff5c00",

          error: "#c43447",
          ".btn-primary": {
            "background-color": "#ffffff",
            "border-color": "#36454F",
            "outline-color": "#ffffff",
            color: "#36454F",
            "&:hover": {
              "background-color": "#36454f",
              "border-color": "#ffffff",
              color: "#ffffff",
            },
          },
          ".border-primary": {
            "border-color": "#ffffff",
          },
        },
      },
      {
        myThemeLight: {
          primary: "#ffffff",

          secondary: "#e00000",

          accent: "#0098aa",

          neutral: "#06303e",

          "base-100": "#ffffff",

          info: "#0098ea",

          success: "#a4f970",

          warning: "#ff5c00",

          error: "#c43447",
          ".btn-primary": {
            "background-color": "#36454F",
            "border-color": "#36454F",
            "outline-color": "#ffffff",
            color: "#fff",
            "&:hover": {
              "background-color": "#ffffff",
              "border-color": "#36454F",
              color: "#36454F",
            },
          },
          ".homepage-hero": {
            color: "#ffffff",
          },
          ".border-primary": {
            "border-color": "#36454F",
          },
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
