import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Link } from "react-router-dom";

import { Button } from "@components/base";
// import { AccountLayout } from "@layouts/index";

const Login = () => {
  // const { user, login } = useAuth();
  // const history = useHistory();

  // useEffect(() => {
  //   if (user) {
  //     history.push('/dashboard');
  //   }
  // }, [user, history]);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <Grid container flexDirection="column" rowGap={2}>
      {/* Title */}
      <Typography
        variant="h5"
        style={{ fontWeight: 300, color: teal[600] }}
        textAlign="center"
      >
        Iniciar sesión
      </Typography>
      {/* Image */}
      <img src="logo.png" height={200} alt="Logo" />
      {/* Form */}
      <form onSubmit={handleLogin}>
        {/* Email */}
        <Grid container flexDirection="column" rowGap={1}>
          <label htmlFor="email" style={{ fontWeight: 300 }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            style={{
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
        </Grid>
        {/* Password */}
        <Grid container flexDirection="column" rowGap={1}>
          <label htmlFor="password" style={{ fontWeight: 300 }}>
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            style={{
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
        </Grid>
        {/* Action Button */}
        <Grid container marginTop={3}>
          <Button type="submit" fullWidth style={{ color: "white" }}>
            Login
          </Button>
        </Grid>
      </form>
      <Grid
        container
        xs={12}
        gap={0.5}
        style={{
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        <span>No tenés cuenta?.</span>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: teal[600],
            fontWeight: 600,
          }}
        >
          Registrate!
        </Link>
      </Grid>
    </Grid>
  );
};

export default Login;
