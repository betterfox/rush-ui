module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        'primary-dark': "var(--primary-dark)",
        'white': "var(--white)",
        'black': "var(--black)",
        secondary: "var(--secondary)",
        navbar: "var(--navbar)",
        sidebar: "var(--sidebar)",
        [`background`]: "var(--background)",
        [`on-background`]: "var(--on-background)",
        [`on-background-400`]: "var(--on-background-400)",
        [`on-background-300`]: "var(--on-background-300)",
        [`on-background-200`]: "var(--on-background-200)",
        [`on-background-100`]: "var(--on-background-100)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
