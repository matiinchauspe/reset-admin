import {
  Container,
  IconButton,
  Paper,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { Link, Outlet } from "react-router-dom";

import { CreateIcon, Icons } from "@components/icons";
import { useColorMode } from "@hooks/index";
import { useStyles } from "./styles";

const AccountLayout = () => {
  const { mode, toggleColorMode } = useColorMode();
  const { classes } = useStyles();

  const isDarkMode = mode === "dark";

  return (
    <Grid container flexDirection="column" className={classes.container}>
      <Grid
        container
        xs={12}
        justifyContent="flex-end"
        className={classes.header}
      >
        <Grid container flexGrow={1} alignItems="center">
          <img src="logo.png" height={50} alt="Logo" />
          <Typography variant="h6">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: teal[600],
                fontWeight: 300,
              }}
            >
              Reset Admin
            </Link>
          </Typography>
        </Grid>
        <Grid>
          <IconButton onClick={toggleColorMode} size="large">
            {isDarkMode && (
              <CreateIcon
                fontSize="inherit"
                icon={Icons.SunIcon}
                inheritViewBox
              />
            )}
            {!isDarkMode && (
              <CreateIcon
                fontSize="inherit"
                icon={Icons.MoonIcon}
                inheritViewBox
              />
            )}
          </IconButton>
        </Grid>
      </Grid>
      <Container maxWidth="lg" className={classes.bodyContainer}>
        <Grid
          container
          spacing={3}
          className={classes.bodyContent}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Grid xs={12} md={6}>
            <Paper className={classes.formContainer}>
              <Outlet />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AccountLayout;
