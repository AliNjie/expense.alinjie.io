module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#D53F8C",
      },
      fontFamily: {
        rubik: ["Inter", "sans serif"],
      },
    },
  },
  variants: {
    cursor: ["disabled"],
    backgroundColor: ["disabled"],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
