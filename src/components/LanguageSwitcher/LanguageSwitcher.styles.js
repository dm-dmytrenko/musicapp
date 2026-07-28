import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const SwitcherContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  marginLeft: "auto",
  padding: "3px",
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
}));

export const LanguageButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  minWidth: "auto",
  padding: "4px 12px",
  borderRadius: "16px",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  transition: "all 0.2s ease-in-out",
  backgroundColor: active ? "#1976d2" : "transparent",
  color: active ? "#ffffff" : "#1976d2",
  "&:hover": {
    backgroundColor: active ? "#1565c0" : "rgba(25, 118, 210, 0.08)",
  },
}));