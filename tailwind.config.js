/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': `
          radial-gradient(63.62% 69.52% at 100% 0%, rgba(247, 214, 98, 0.8) 0%, rgba(247, 214, 98, 0.17) 52.08%, rgba(247, 214, 98, 0) 100%),
          linear-gradient(208.42deg, rgb(240, 66, 42) 7.46%, rgba(240, 88, 42, 0.18) 42.58%, rgba(240, 101, 42, 0) 64.13%),
          radial-gradient(114.51% 122.83% at 0% -15.36%, rgb(231, 79, 106) 0%, rgba(231, 79, 106, 0.22) 66.72%, rgba(231, 79, 106, 0) 100%),
          linear-gradient(333.95deg, rgba(83, 208, 236, 0.85) -7.76%, rgba(83, 208, 236, 0.204) 19.67%, rgba(138, 137, 190, 0) 35.42%),
          radial-gradient(109.15% 148.57% at 4.46% 98.44%, rgb(27, 49, 128) 0%, rgba(27, 49, 128, 0) 100%),
          linear-gradient(141.57deg, rgb(78, 173, 235) 19.08%, rgba(78, 173, 235, 0) 98.72%)
        `
      }
    },
  },
  plugins: [],
}