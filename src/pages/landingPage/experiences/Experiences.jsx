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
  return (
    <RootExperiences id='experienceTraining'>
      <Typography
        align='center'
        style={{
        //   color: darkMode ? "#000" : "#FFF",
          fontFamily: "'Dancing Script', cursive",
          margin: "15px",
        }}
        variant={matches ? "h4" : "h3"}
      >
        Expériences & Formations
      </Typography>
      <BoxCard>
        <Timeline position='alternate'>
          <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
              Mars 2023 - A aujourd&apos;hui
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='secondary' variant='outlined' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              AutoFormation Next JS (Clone Netflix/Airbnb, Application Crud et
              authentification)
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
              Janvier 2023 - Mars 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='secondary' variant='outlined' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Formation React JS/Native,
              <br />
              Le réacteur (Paris, 75010)
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
              2020-2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='secondary' variant='outlined' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Formation Développpeur Web et Web mobile
              <br />
              Callac Soft Collège (Callac, 22160)
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
              2012 - 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='secondary' variant='outlined' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Employé - Auxiliaire de vie
              <br />
              Adhap Services (Saint-Brieuc, 22000)
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
              2014
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='secondary' variant='outlined' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Producteur/Scénariste Audiovisuelle à son compte
              <br />
              Réalisation d’un court-métrage contre les Violences Conjugales
              <br /> (Saint-Brieuc, 22000)
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </BoxCard>
    </RootExperiences>
  );
}
