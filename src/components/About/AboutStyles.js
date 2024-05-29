import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

export const AboutTitle = styled("h2")({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const AboutContent = styled("p")({
  fontSize: "1.25rem",
});
