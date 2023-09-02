// import React from 'react'
// import ThemeButton from "../components/common/btn/ThemeButton"
// export default function index() {
//   return (
//     <div>
//       <ThemeButton />
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
//       minima.
//     </div>
//   );
// }



import { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  MobileLandingPageLayout,
  DesktopLandingPageLayout,
} from "../components/layouts/index";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // TITLE WEBSITE
  useEffect(() => {
    document.title = "CROGUENNEC YOANN - Portfolio";
  }, []);

  return matches ? <MobileLandingPageLayout /> : <DesktopLandingPageLayout />;
}
