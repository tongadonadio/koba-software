import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));
