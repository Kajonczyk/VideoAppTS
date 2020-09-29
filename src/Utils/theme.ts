export const lightTheme = {
  colorPrimary: "#230070",
  colorSecondary: "#6200EE",
  colorTertiary: "#3700B3",
  menuColor: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  font: {
    size: {
      s: "1.2rem",
    },
  },
};

export const darkTheme = {
  colorPrimary: "#222026",
  colorSecondary: "#212121",
  colorTertiary: "#303030",
  menuColor: "#FFFFFF",
  backgroundColor: "#424242",
  font: {
    size: {
      s: "2rem",
    },
  },
};

export type Theme = typeof lightTheme | typeof darkTheme;
