import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useColorMode } from "@hooks/index";
import { AccountLayout } from "@layouts/index";
import { Login, Register } from "@pages/index";
import { theme } from "../theme";

const router = createBrowserRouter([
  {
    element: <AccountLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <Navigate to="login" />,
      },
    ],
  },
]);

const Router = () => {
  const { mode } = useColorMode();

  const makeTheme = useMemo(() => theme(mode), [mode]);

  return (
    <ThemeProvider theme={makeTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default Router;
