/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        1320: "82.5rem",
        406: "406px",
      },
      maxWidth: {
        1320: "82.5rem",
      },
      borderRadius: {
        20: "20px",
      },
      screens: {
        laptop: { min: "0", max: "1024px" },
        desktop: { min: "1024px", max: "1320px" },
      },
      backgroundImage: {
        backgroundColor:
          "linear-gradient(88.83deg, rgba(1, 72, 255, 0.4) 11.32%, rgba(1, 152, 255, 0) 80.03%)",
        background: "url('../assets/images/main/background.png')",
        backgroundLearn: "url('../assets/images/learn/background.png')",
        backgroundMembership:
          "url('../assets/images/membership/background.svg')",
      },
      colors: {
        "blue-rgba": "rgba(1, 152, 255, 0.05)",
        "gray-rgba": "rgba(17, 17, 17, 0.5);",
        "light-gray-rgba": "rgba(0, 0, 0, 0.2)",
      },
      translate: {
        half: "-50%",
      },
    },
  },
  plugins: [],
};
