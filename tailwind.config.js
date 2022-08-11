module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ffc10a",

          secondary: "#0b1222",

          accent: "#f7f7f7",

          neutral: "#C6FFE0",

          info: "#eeeeee",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
