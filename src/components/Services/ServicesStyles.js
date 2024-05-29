import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

export const ServicesTitle = styled("h2")({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const ServicesList = styled("ul")({
  listStyle: "none",
  padding: 0,
});

export const ServicesItem = styled("li")({
  marginBottom: "0.5rem",
  fontSize: "1.25rem",
});
