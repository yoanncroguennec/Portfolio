import React, { useContext } from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Card,
  styled,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
// UTILS CONTEXTS
// import { DarkModeContext } from "../../../utils/contexts/DarkModeContext";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Experiences() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const RootExperiences = styled(Box)(({ theme }) => ({
    // background: "blue",
    width: "100vw",
    // height: "45vh",
    paddingRight: "135px",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // width: "80vw",
    [theme.breakpoints.down("sm")]: {
      // background: "red",
      marginLeft: "25px",
    },
  }));

  const BoxCard = styled(Card)(({ theme }) => ({
    borderRadius: 10,
    boxShadow:
      "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(255, 255, 255, 0.9)",
    // height: 650,
    // width: `${matches ? 100 : 350}`,
    overflow: "scroll",
    height: "450px",
    width: "82%",
  }));

  // const BoxCard = styled(Card)(({ theme }) => ({
  //   borderRadius: 10,
  //   boxShadow:
  //     "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(255, 255, 255, 0.9)",
  //   // height: 650,
  //   // width: `${matches ? 100 : 350}`,
  // }));

  //////////////////// JS ////////////////////

//   const [darkMode] = useContext(DarkModeContext);

  //////////////////// RETURN ////////////////////
  return <div>Experiences</div>;
}
