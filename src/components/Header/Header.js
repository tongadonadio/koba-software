import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { StyledToolbar, StyledButton } from "./HeaderStyles";

function Header() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">Koba Software</Typography>
        <div>
          <StyledButton color="inherit" href="#home">
            Inicio
          </StyledButton>
          <StyledButton color="inherit" href="#services">
            Servicios
          </StyledButton>
          <StyledButton color="inherit" href="#about">
            Nosotros
          </StyledButton>
          <StyledButton color="inherit" href="#contact">
            Contacto
          </StyledButton>
        </div>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
