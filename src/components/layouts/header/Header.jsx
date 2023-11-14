import React, { useContext } from "react";
import {
  Typography,
  styled,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
// ANIMATIONS
// A REVOIR ANIMATION SCROOL CONFLIT DEPENDANCE "@mui/styles" vieille
// NEXT
import { Freehand } from "@next/font/google";
// UTILS CONTEXTS
import { ToggleLanguagesContext } from "../../../utils/contexts/ToggleLangagesContext";
// DATA
import { dataHeaderLanguages } from "../../../utils/assets/data/languages/Header";
import Image from "next/image";
import InfoPersonnal from "./InfoPersonnal";
import Link from "next/link";


const textTopHeader = [
  "CROGUENNEC Yoann",
  "DÉV JUNIOR FRONT-END",
  "& BACK-END",
  "React JS & Native",
];

const roboto = Freehand({
  subsets: ["latin"],
  weight: ["400"],
  // weight: ["400", "700"],
});

//////////////////// EXPORT FUNCTION ////////////////////
export default function Header() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const Hero = styled(Box)(() => ({
    height: `${matches ? "150vh" : "100vh"}`,
    width: "100%",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::after": {
      width: "100vw",
      height: `${matches ? "150vh" : "100vh"}`,
      content: '""',
      position: "absolute",
      // marginTop: "70px",
      zIndex: 1,
      top: "0",
      left: "0",
      background: "rgba(0, 0, 0, 0.2)",
    },
  }));

  const ContainerHeader = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      // background: "red",
    },
  }));

  const Content = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const BoxTypeWriter = styled(Box)(({ theme }) => ({
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    color: "#FFF",
    margin: "40px",
    padding: "30px",
    width: "550px",
    
    [theme.breakpoints.down("sm")]: {
      height: "150px",
      margin: "10px",
      overflow: "scroll",
      width: "250px",
      zIndex: 999,
    },
  }));

  //////////////////// JS ////////////////////
  // Context toggle langages
  // const { lang } = useContext(ToggleLanguagesContext);

  //////////////////// RETURN ////////////////////
  return (
    <>
      <Hero id='header'>
        <ContainerHeader>
          <video
            autoPlay
            loop
            muted
            src='/assets/videos/header/BgVideoHeader_xvvhmu.mp4'
            // src={
            //   "https://res.cloudinary.com/dky2vpnyr/video/upload/v1680543687/MyPortfolio/BgVideoHeader_xvvhmu.mp4"
            // }
            style={{
              height: `${matches ? "150vh" : "100vh"}`,
              objectFit: "cover",
              position: "absolute",
              top: 0,
              width: "100%",
              zIndex: "-1",
            }}
          />

          {textTopHeader.map((text, index) => (
            <Typography
              className={roboto.classesName}
              key={index}
              variant={matches ? "h6" : "h4"}
              color='#FFF'
              style={{ textShadow: "2px 2px 3px #FF0000" }}
            >
              {text}
            </Typography>
          ))}

          <Content>
            <InfoPersonnal />

            <BoxTypeWriter>
              <Typography variant='subtitle1'>
                {" "}
                <Typewriter
                  cursor
                  cursorStyle='_'
                  deleteSpeed={50}
                  delaySpeed={10}
                  typeSpeed={20}
                  words={[
                    `Je m’appelle Yoann Croguennec, j’ai 37 ans, ayant obtenu un diplôme en tant que développeur web et web mobile, de niveau V, au sein du centre de formation «Callac Soft Collège». A la suite, j’ai continué à m’auto-former en React JS et Native pendant 1 an 1/2, auprès de Site Internet (Udemy, ...) et Youtubeur (SDZ, PrimFX, Waked XY, Les teachers du net, ...), qui m’ont permis de développer mes compétences en tant que développeur web. Puis je suis rentré au centre de formation « Le Réacteur » (75010), afin de renforcer mes connaissances mais également de comprendre certaines parties que j’avais du mal à assimiler. Après, j'ai continué à m'auto-former en Next JS, tout en réalisant différents types de Projets, cités dans mon CV..`,
                  ]}
                  // words={[
                  //   `${dataHeaderLanguages[lang].scrollingText1}`,
                  //   `${dataHeaderLanguages[lang].scrollingText2}`,
                  // ]}
                />
              </Typography>
            </BoxTypeWriter>

            <Image
              src='/assets/imgs/header/photoProfil.png'
              alt='Photo Profil'
              height={matches ? 150 : 200}
              width={matches ? 150 : 200}
            />
          </Content>

          <Link
            href='/cv_pdf/CV_PDF'
            style={{ cursor: "pointer", zIndex: 999 }}
          >
            <Typography variant={matches ? "h6" : "h5"} color='#FFF'>
              CV en PDF
            </Typography>
          </Link>
          <Typography variant={matches ? "h6" : "h5"} color='#FFF'>
            OU EN QR CODE
          </Typography>
          <div className='f'>
            <Image
              src='/assets/imgs/header/cv_pdf_codeQR.png'
              alt='Photo Profil'
              height={matches ? 80 : 100}
              width={matches ? 80 : 100}
            />
          </div>
        </ContainerHeader>
      </Hero>
    </>
  );
}
