import { ButtonProps } from "@mui/material";
import MButton from "@mui/material/Button";

const Button = ({ children, ...rest }: ButtonProps) => (
  <MButton {...rest} variant="contained">
    {children}
  </MButton>
);

export default Button;
