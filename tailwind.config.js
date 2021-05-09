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
        [`background-800`]: "var(--background-800)",
        [`background-700`]: "var(--background-700)",
        [`background-600`]: "var(--background-600)",
        [`background`]: "var(--background)",
        [`background-400`]: "var(--background-400)",
        [`background-300`]: "var(--background-300)",
        [`on-background-600`]: "var(--on-background-400)",
        [`on-background`]: "var(--on-background)",
        [`on-background-400`]: "var(--on-background-400)",
        [`on-background-300`]: "var(--on-background-300)",
        [`on-background-200`]: "var(--on-background-200)",
        [`on-background-100`]: "var(--on-background-100)",
        [`card`]: "var(--card)",
        [`on-card`]: "var(--on-card)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
