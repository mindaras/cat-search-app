const theme = {
  sizes: {
    search: {
      height: "90px",
    },
    pagination: {
      height: "80px",
    },
  },
  colors: {
    font: {
      medium: "#333",
    },
    gray: {
      light: "#ededed",
      medium: "#dedcdc",
      dark: "#858383",
    },
    outline: {
      focus: "#80bdff",
    },
    white: "#fff",
  },
  media: {
    small: "@media (max-width: 767px)",
    medium: "@media (max-width: 1024px)",
  },
};

export type Theme = typeof theme;

export { theme };
