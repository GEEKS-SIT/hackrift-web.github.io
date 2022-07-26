/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      beige: "#fff8e2",
      darkPurple: "#3e427c",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3f417c",
          secondary: "#F9F3E5",
          accent: "#72a1af",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: "light",
  },
};
