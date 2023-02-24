import type { SvgIconProps } from "@mui/material";
import { SvgIcon } from "@mui/material";

type CreateIconProps = {
  icon: React.ElementType;
} & SvgIconProps;

export const CreateIcon = ({ icon, ...rest }: CreateIconProps) => (
  <SvgIcon {...rest} component={icon} />
);

export * as Icons from "./svg";
