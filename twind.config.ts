/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#19a5ff",
        "primary-green-light": "#2EAE80",
        "primary-green-dark": "#177151",
        "primary-dark": "#221E1F",
        "primary-light": "#f4f4f4",
        "dark-blue": "#0c389f",
        "dark-gray": "#9f9f9f",
        "gray": "#505050",
        "light-gray": "#9f9f9f",
        "custom-brown": "#f8f5f1",
        "custom-gray": "#3f3f40",
        "primary-red": "#D10923",
        "primary-red-light": "#DA262B",
        "primary-red-dark": "#A1061A",
      },
    },
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
      serif: ["inherit", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
