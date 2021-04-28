module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        'primary-dark': "var(--primary-dark)",
        'black': "var(--black)",
        secondary: "var(--secondary)",
        navbar: "var(--navbar)",
        sidebar: "var(--sidebar)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
