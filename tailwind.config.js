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
        discord_server_bg: "#36393F",
        discord_server_container: "#202225",
        discord_channels_bg: "#2f3136",
      },
      height: {
        "83vh": "83vh",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
