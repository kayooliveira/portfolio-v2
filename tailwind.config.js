module.exports = {
  darkMode: "media",
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      brand: "Candal",
      default: "Poppins",
    },
    extend: {
      colors: {
        brand: {
          100: '#E62DF6',
          200: '#DA2AEB',
          300: '#C326D1',
          400: '#9F1FAB',
          500: '#64136B',
          600: '#4C0F5A',
          700: '#3C0B4A',
          800: '#2C0939',
        },
        highlight: {
          100: '#DDFA6B',
          200: '#D3ED66',
          300: '#BCD45B',
          400: '#9AAD4B',
          500: '#616E2F',
          600: '#4C5C2E',
          700: '#3C4B2D',
          800: '#2C3A2C',
        },
        background: '#0a0a0a',
        backgroundLight: '#1a1a1a',
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
