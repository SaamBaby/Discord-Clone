module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289DA",
        discord_purple: "#5865F2",
        discord_green: "#3BA55C",
      },
      height: {
        "83vh": "83vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
