"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Exact brand colors from the supplied Warsia Trust logo
export const brandColors = {
  primaryNavy: "#002887",
  deepNavy: "#001B5C",
  navyLight: "#1845B2",
  trustGreen: "#006000",
  deepGreen: "#004500",
  greenLight: "#0A8A0A",
  saffronOrange: "#F27501",
  saffronDark: "#C75F00",
  saffronLight: "#FFA040",
  bloodRed: "#C62828",
  bloodRedLight: "#E53935",
  white: "#FFFFFF",
  lightBackground: "#F7F8FC",
  paperAlt: "#EEF2F8",
  darkText: "#172033",
  mutedText: "#52607A",
  borderColor: "#E2E8F0",
  borderLight: "rgba(226, 232, 240, 0.8)",
  navyOverlay: "rgba(0, 27, 92, 0.85)",
};

let baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brandColors.primaryNavy,
      dark: brandColors.deepNavy,
      light: brandColors.navyLight,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: brandColors.trustGreen,
      dark: brandColors.deepGreen,
      light: brandColors.greenLight,
      contrastText: "#FFFFFF",
    },
    warning: {
      main: brandColors.saffronOrange,
      dark: brandColors.saffronDark,
      light: brandColors.saffronLight,
      contrastText: "#FFFFFF",
    },
    error: {
      main: brandColors.bloodRed,
      light: brandColors.bloodRedLight,
      contrastText: "#FFFFFF",
    },
    background: {
      default: brandColors.white,
      paper: brandColors.lightBackground,
    },
    text: {
      primary: brandColors.darkText,
      secondary: brandColors.mutedText,
    },
    divider: brandColors.borderColor,
  },
  typography: {
    fontFamily: [
      "var(--font-inter)",
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 900,
      lineHeight: 1.08,
      letterSpacing: "-0.03em",
      color: brandColors.deepNavy,
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: "-0.025em",
      color: brandColors.deepNavy,
    },
    h3: {
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: brandColors.deepNavy,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "-0.015em",
      color: brandColors.deepNavy,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: brandColors.darkText,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.35,
      color: brandColors.darkText,
    },
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: 1.6,
      letterSpacing: "-0.005em",
      color: brandColors.mutedText,
    },
    subtitle2: {
      fontSize: "0.95rem",
      fontWeight: 600,
      lineHeight: 1.5,
      color: brandColors.mutedText,
    },
    body1: {
      fontSize: "1.05rem",
      lineHeight: 1.75,
      color: brandColors.darkText,
    },
    body2: {
      fontSize: "0.925rem",
      lineHeight: 1.65,
      color: brandColors.mutedText,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
    overline: {
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontSize: "0.75rem",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: "12px 28px",
          fontSize: "0.95rem",
          fontWeight: 700,
          boxShadow: "none",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        containedPrimary: {
          backgroundColor: brandColors.primaryNavy,
          color: "#FFFFFF",
          boxShadow: "0 4px 16px rgba(0, 40, 135, 0.2)",
          "&:hover": {
            backgroundColor: brandColors.deepNavy,
            boxShadow: "0 8px 24px rgba(0, 40, 135, 0.32)",
          },
        },
        containedSecondary: {
          backgroundColor: brandColors.trustGreen,
          color: "#FFFFFF",
          boxShadow: "0 4px 16px rgba(0, 96, 0, 0.2)",
          "&:hover": {
            backgroundColor: brandColors.deepGreen,
            boxShadow: "0 8px 24px rgba(0, 96, 0, 0.32)",
          },
        },
        containedWarning: {
          backgroundColor: brandColors.saffronOrange,
          color: "#FFFFFF",
          boxShadow: "0 4px 16px rgba(242, 117, 1, 0.28)",
          "&:hover": {
            backgroundColor: brandColors.saffronDark,
            boxShadow: "0 8px 24px rgba(242, 117, 1, 0.4)",
          },
        },
        outlinedPrimary: {
          borderColor: "rgba(0, 40, 135, 0.3)",
          borderWidth: 1.5,
          color: brandColors.primaryNavy,
          "&:hover": {
            borderWidth: 1.5,
            borderColor: brandColors.primaryNavy,
            backgroundColor: "rgba(0, 40, 135, 0.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 4px 24px rgba(23, 32, 51, 0.04)",
          border: `1px solid ${brandColors.borderColor}`,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 9999,
          fontSize: "0.78rem",
          letterSpacing: "0.02em",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          backgroundColor: brandColors.white,
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: brandColors.borderColor,
            borderWidth: "1.5px",
            transition: "all 0.25s ease",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: brandColors.primaryNavy,
          },
          "&.Mui-focused": {
            boxShadow: "0 0 0 4px rgba(0, 40, 135, 0.15)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: `${brandColors.primaryNavy} !important`,
              borderWidth: "2px !important",
            },
          },
        },
        input: {
          padding: "15px 22px",
          fontSize: "0.98rem",
          fontWeight: 500,
          color: brandColors.darkText,
          "&::placeholder": {
            color: "#64748B",
            opacity: 1,
            fontWeight: 400,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.92rem",
          fontWeight: 600,
          color: brandColors.mutedText,
          transform: "translate(22px, 16px) scale(1)",
          "&.Mui-focused": {
            color: brandColors.primaryNavy,
            fontWeight: 700,
          },
          "&.MuiInputLabel-shrink": {
            transform: "translate(18px, -9px) scale(0.78)",
            fontWeight: 800,
            backgroundColor: brandColors.white,
            padding: "0 6px",
          },
        },
      },
    },
    // Professional responsive container system (1240px - 1320px max content width)
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: "1320px",
          marginLeft: "auto !important",
          marginRight: "auto !important",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@media (min-width: 600px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          "@media (min-width: 900px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
          "@media (min-width: 1200px)": {
            paddingLeft: "48px",
            paddingRight: "48px",
            maxWidth: "1320px !important",
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme, {
  variants: ["h1", "h2", "h3", "h4", "h5", "h6"],
  factor: 2,
});
export default theme;
