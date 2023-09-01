import { Box, styled } from "@mui/material";

export const Drop = styled(Box)(({ borderRadius, theme }) => ({
  background: "#FFF",
  position: "relative",
  width: "350px",
  height: "300px",
  boxShadow:
    "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(255, 255, 255, 0.9)",
  transition: "0.5s ease-in-out",
  display: "flex",
  justifyContent: "center",
  margin: "15px",
  alignItems: "center",
  borderRadius: `${borderRadius}`,
  "&:hover": {
    borderRadius: "50%",
    cursor: "pointer",
  },
  Drop: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: "90px",
      left: "110px",
      width: "15px",
      height: "15px",
      background: "#FFF",
      borderRadius: "50%",
      opacity: "0.9",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "80px",
  },
}));
