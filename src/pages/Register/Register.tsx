import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { teal } from "@mui/material/colors";
import { Link } from "react-router-dom";

import { Button } from "@components/base";

const Register = () => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("register");
  };

  return (
    <Grid container flexDirection="column" rowGap={2}>
      {/* Title */}
      <Typography
        variant="h5"
        style={{ fontWeight: "300", color: teal[600] }}
        textAlign="center"
      >
        Registro
      </Typography>
      {/* Image */}
      <img src="logo.png" height={200} alt="Logo" />
      {/* Form */}
      <form onSubmit={handleRegister}>
        {/* Name */}
        <Grid container flexDirection="column" rowGap={1}>
          <label htmlFor="name" style={{ fontWeight: 300 }}>
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            style={{
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
        </Grid>
        {/* Last Name */}
        <Grid container flexDirection="column" rowGap={1}>
          <label htmlFor="lastName" style={{ fontWeight: 300 }}>
            Apellido
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            style={{
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
        </Grid>
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
        {/* Repeat Password */}
        <Grid container flexDirection="column" rowGap={1}>
          <label htmlFor="repeatPassword" style={{ fontWeight: 300 }}>
            Repetir contraseña
          </label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            style={{
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
            }}
          />
        </Grid>
        {/* Action Button */}
        <Grid container marginTop={3}>
          <Button type="submit" fullWidth>
            Registrarse
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
        <span>Ya tenés cuenta?.</span>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: teal[600],
            fontWeight: 600,
          }}
        >
          Volver al login!
        </Link>
      </Grid>
    </Grid>
  );
};

export default Register;
