module.exports = {
  mode: "jit",
  purge: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mulled-wine": {
          DEFAULT: "#4D4C6D",
          50: "#ACACC5",
          100: "#A1A0BD",
          200: "#8988AC",
          300: "#71709B",
          400: "#5E5D85",
          500: "#4D4C6D",
          600: "#36354C",
          700: "#1E1E2B",
          800: "#07070A",
          900: "#000000",
        },
        "pastel-green": {
          DEFAULT: "#7CE69D",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#E3FAEA",
          300: "#C1F3D0",
          400: "#9EEDB7",
          500: "#7CE69D",
          600: "#4DDD7A",
          700: "#27CB5A",
          800: "#1E9C45",
          900: "#156D30",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    styled: true,
    themes: [
      {
        jk: {
          primary: "#4D4C6D" /* Primary color */,
          "primary-focus": "#3c2f46" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#7CE69D" /* Secondary color */,
          "secondary-focus": "#539784" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#F4F8C2" /* Accent color */,
          "accent-focus": "#FDFFE0" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,
        },
      },
    ],
  },
};
