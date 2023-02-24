import type { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

export const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? teal[600] : teal[300],
      },
    },
  });
