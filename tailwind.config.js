module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/constant.js',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: 'url("~/public/assets/hero-bgr.webp")',
      }),
      colors: {
        dark: '#333333',
        primary: '#925614',
        title: '#588157',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
