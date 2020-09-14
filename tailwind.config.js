module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald", "sans-serif"],
      body: ["Lato", "sans-serif"],
    },
    aspectRatio: {
      "3by2": [3, 2],
      "3by4": [3, 4],
      "3by1": [3, 1],
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-aspect-ratio"),
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/ui"),
  ],
};
