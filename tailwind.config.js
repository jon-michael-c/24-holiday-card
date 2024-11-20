/** @type {import('tailwindcss').Config} config */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /text-(white|black|purple|midnight|red|sky|green|yellow|grey)/,
    },
    {
      pattern: /bg-(white|black|purple|midnight|red|sky|green|yellow|grey)/,
    },
    {
      pattern: /border-(white|black|purple|midnight|red|sky|green|yellow|grey)/,
    },
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      Titillium: ["Titillium", "sans-serif"],
    },
    fontSize: {
      xxs: [
        "12px",
        {
          lineHeight: "1",
          fontWeight: "500",
        },
      ],
      xs: [
        "14px",
        {
          lineHeight: "1",
        },
      ],
      sm: [
        "16px",
        {
          lineHeight: "1.5",
        },
      ],
      md: [
        "18px",
        {
          lineHeight: "1.56",
        },
      ],
      lg: [
        "20px",
        {
          lineHeight: "1.33",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "1.35",
        },
      ],
      "2xl": [
        "28px",
        {
          lineHeight: "1.5",
        },
      ],
      "3xl": ["32px", "1.5"],
      "4xl": ["38px", "1.5"],
      "5xl": ["46px", "1.5"],
      "6xl": [
        "50px",
        {
          lineHeight: "1.5",
        },
      ],
      "7xl": [
        "60px",
        {
          lineHeight: "1.5",
        },
      ],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      silver: "#C4C4C4",
      purple: "#5440DA",
      midnight: "#33374c",
      red: "#ff7866",
      sky: "#92c2c3",
      green: "#80cb9e",
      yellow: "#ffb55e",
      grey: "#d3d3d7",
    }, // Extend Tailwind's default colors
  },
  plugins: [],
};

export default config;
