/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        qumpell: "qumpell",
        migaela: "migaela",
        scripto: "scripto",
        aloevera: "aloevera",
        retrofunk: "retrofunk",
        helloketta: "helloketta",
        metropolis: "metropolis",
        rosmatika: "rosmatika",
        power_light: "power_light",
        boska_bold: "boska_bold",
        cabinet_bold: "cabinet_bold",
        cabinet_medium: "cabinet_medium",
        cabinet_light: "cabinet_light",
        cabinet_thin: "cabinet_thin",
        cabinet_black: "cabinet_black",
      },
    },
  },
  plugins: [],
};
