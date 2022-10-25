import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#51C02A",
        },
      },
    },
    RaLayout: {
      styleOverrides: {
        root: {
          "& .RaLayout-content": {
            backgroundColor: "#fafafb",
            paddingLeft: "15px",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "#303030",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.MuiButtonBase-root": {
            color: "white",
            "& .RaMenuItemLink-icon": {
              color: "white",
            },
          },
          "&.RaMenuItemLink-active.MuiButtonBase-root": {
            backgroundColor: "#fafafb",
            "& .RaMenuItemLink-icon": {
              color: "#303030",
            },
          },
        },
      },
    },
  },
});
