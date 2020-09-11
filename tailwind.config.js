module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/ui"),
  ],
};
