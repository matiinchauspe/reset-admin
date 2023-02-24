import { useContext } from "react";

import { ColorModeContext } from "@context/index";

export const useColorMode = () => {
  const context = useContext(ColorModeContext);

  if (context === null) {
    throw new Error("'ColorModeContext' cannot be null");
  }

  return context;
};
