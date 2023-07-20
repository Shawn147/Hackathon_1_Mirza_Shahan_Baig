/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        badge: "8px",
      },
      width: {
        card: "256px",
      },
      borderColor: {
        primary: "#ed378f",
        secondary: "#f37b31",
        placeholder: "#919191",
      },
      textColor: {
        primary: "#ed378f",
        secondary: "#f37b31",
        placeholder: "#919191",
        primaryLight: "rgba(237, 55, 143, 0.2)",
        blue: "#007aff",
      },
      backgroundColor: {
        primary: "#ed378f",
        secondary: "#f37b31",
        primaryLight: "rgba(237, 55, 143, 0.2)",
        placeholder: "#d1d5da",
        navy: "#111827",
        lpurple: "#f9bc98",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
