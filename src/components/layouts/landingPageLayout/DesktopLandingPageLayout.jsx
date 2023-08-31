import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery, useTheme } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
// LAYOUTS
import { Header } from "../index";
// SCREENS


export default function DesktopLandingPageLayout() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  // const [darkMode] = useContext(DarkModeContext);
  // console.log("from wrapper", darkMode);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-310vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <div>
      <Header />
      DesktopLandingPageLayout
      <ScrollToTop smooth />
    </div>
  );
}
