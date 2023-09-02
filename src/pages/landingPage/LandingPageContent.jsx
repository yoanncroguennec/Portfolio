import ScrollToTop from "react-scroll-to-top";
import { useMediaQuery, useTheme } from "@mui/material";
// LAYOUTS
import { Header } from "../../components/layouts/index";
// SCREENS
import LanguagesSoftwares from "./languagesSoftwares/LanguagesSoftwares";
import Experiences from "./experiences/Experiences";
import VideoProduction from "./videoProduction/VideoProduction";
import Hobbies from "./hobbies/Hobbies";
import Contact from "./contact/Contact";
// COMMONS
import {
  ListProjectsVSMobile,
  ListProjectsVSDesktop,
  ThemeButton,
} from "../../components/common/index";

export default function LandingPageContent({ triggerRef, sectionRef }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <ThemeButton />
      <Header />
      <section style={{ overflow: "hidden" }}>
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            style={{
              height: "100vh",
              width: "250vw",
              // width: "750vw",
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            {matches ? (
              <div style={{ width: "100vw" }}>
                <ListProjectsVSMobile />
              </div>
            ) : (
              <>
                <div
                  style={{
                    alignItems: "center",
                    // background: "red",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100vw",
                  }}
                >
                  <ListProjectsVSDesktop />
                </div>
              </>
            )}
            <div
              style={{
                alignItems: "center",
                // background: "red",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "80vw",
                [theme.breakpoints.down("sm")]: {
                  // background: "red",
                  width: "450vw",
                },
              }}
            >
              <LanguagesSoftwares />
            </div>
            <div
              style={{
                alignItems: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "150vw",
              }}
            >
              <Experiences />
            </div>
            <div
              style={{
                alignItems: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "150vw",
              }}
            >
              <VideoProduction />
            </div>
            <div
              style={{
                // alignItems: "center",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "150vw",
              }}
            >
              <Hobbies />
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <ScrollToTop smooth />
    </div>
  );
}
