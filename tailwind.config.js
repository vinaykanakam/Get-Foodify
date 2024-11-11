module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./src/**/*.{html,js}'],  // Purge unused CSS in production
}
