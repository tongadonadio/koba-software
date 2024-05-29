import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#333",
  color: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
}));

export const FooterContent = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
}));

export const FooterText = styled("p")({
  margin: 0,
});

export const NavList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

export const NavItem = styled("a")({
  color: "#fff",
  textDecoration: "none",
});

export const SocialMedia = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const SocialLink = styled("a")(({ theme }) => ({
  color: "#fff",
  textDecoration: "none",
  margin: theme.spacing(0, 1),
}));
