import { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
// import {
//   MobileLandingPageLayout,
//   DesktopLandingPageLayout,
// } from "../components/layouts/index";
import MobileLandingPageLayout from "./landingPage/landingPageLayout/MobileLandingPageLayout";
import DesktopLandingPageLayout from "./landingPage/landingPageLayout/DesktopLandingPageLayout";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // TITLE WEBSITE
  useEffect(() => {
    document.title = "CROGUENNEC YOANN - Portfolio";
  }, []);

  return matches ? <MobileLandingPageLayout /> : <DesktopLandingPageLayout />;
}
