"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Official brand colors extracted from the official logo
export const brandColors = {
  navyBlue: "#002887",
  navyBlueDark: "#001B5C",
  navyBlueLight: "#1E4DB7",
  saffronOrange: "#F27501",
  saffronOrangeDark: "#C75F00",
  saffronOrangeLight: "#FFA040",
  trustGreen: "#006000",
  trustGreenDark: "#004500",
  trustGreenLight: "#0A8A0A",
  bloodRed: "#C62828",
  bloodRedLight: "#E53935",
  background: "#FFFFFF",
  paperBackground: "#F7F8FC",
  paperAlt: "#EEF2F8",
  darkText: "#172033",
  mutedText: "#667085",
  borderColor: "#E2E8F0",
};

let baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brandColors.navyBlue,
      dark: brandColors.navyBlueDark,
      light: brandColors.navyBlueLight,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: brandColors.trustGreen,
      dark: brandColors.trustGreenDark,
      light: brandColors.trustGreenLight,
      contrastText: "#FFFFFF",
    },
    warning: {
      main: brandColors.saffronOrange,
      dark: brandColors.saffronOrangeDark,
      light: brandColors.saffronOrangeLight,
      contrastText: "#FFFFFF",
    },
    error: {
      main: brandColors.bloodRed,
      light: brandColors.bloodRedLight,
      contrastText: "#FFFFFF",
    },
    background: {
      default: brandColors.background,
      paper: brandColors.paperBackground,
    },
    text: {
      primary: brandColors.darkText,
      secondary: brandColors.mutedText,
    },
    divider: brandColors.borderColor,
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: brandColors.navyBlue,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.015em",
      color: brandColors.navyBlue,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "-0.01em",
      color: brandColors.navyBlue,
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.3,
      color: brandColors.darkText,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.35,
      color: brandColors.darkText,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
      color: brandColors.darkText,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.6,
      color: brandColors.mutedText,
    },
    subtitle2: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      lineHeight: 1.5,
      color: brandColors.mutedText,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: brandColors.darkText,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: brandColors.mutedText,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 24px",
          fontSize: "0.95rem",
          boxShadow: "none",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0, 40, 135, 0.18)",
            transform: "translateY(-1px)",
          },
        },
        containedPrimary: {
          backgroundColor: brandColors.navyBlue,
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: brandColors.navyBlueDark,
          },
        },
        containedSecondary: {
          backgroundColor: brandColors.trustGreen,
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: brandColors.trustGreenDark,
          },
        },
        outlinedPrimary: {
          borderColor: brandColors.navyBlue,
          borderWidth: 1.5,
          color: brandColors.navyBlue,
          "&:hover": {
            borderWidth: 1.5,
            backgroundColor: "rgba(0, 40, 135, 0.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(23, 32, 51, 0.06)",
          border: `1px solid ${brandColors.borderColor}`,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 32px rgba(0, 40, 135, 0.12)",
            borderColor: "rgba(0, 40, 135, 0.25)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
export default theme;
