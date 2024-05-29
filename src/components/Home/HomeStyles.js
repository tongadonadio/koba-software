import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const HomeContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

export const HomeTitle = styled("h1")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const HomeContent = styled("p")({
  fontSize: "1.25rem",
});
