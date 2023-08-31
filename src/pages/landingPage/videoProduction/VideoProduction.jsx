import React from "react";
import {
  Typography,
  useMediaQuery,
  useTheme,
  styled,
  Box,
} from "@mui/material";
import ReactPlayer from "react-player";
import Link from "next/link";

// STYLES
const RootVideoProduction = styled(Box)(({ theme }) => ({
  alignItems: "center",
  background: "#000",
  borderRadius: "15px",
  boxShadow:
    "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(255, 255, 255, 0.9)",
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "25px",
  width: "80vw",
  [theme.breakpoints.down("sm")]: {
    // alignItems: "normal",

    width: "95vw",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export default function VideoProduction() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const externalSource = "https://www.youtube.com/watch?v=kvNYRokAmD4";
  const internalSource = "";

  function videoEnded() {
    alert("La vidéo est terminée");
  }
  return (
    <RootVideoProduction id='audiovisualProductions'>
      <Typography align='center' variant={matches ? "h6" : "h5"}>
        Court Métrage musical contre les violences conjugales.
      </Typography>
      <Typography>
        Inspirée de l&apos;histoire vraie de mon ex-compagne décédée suite aux
        actes de barbaries de son nouveau compagnon.
      </Typography>
      <Typography>
        J&apos;étais producteur, scénariste, auteur, interprète du
        court-métrage.
      </Typography>
      <Link href='https://www.youtube.com/embed/kvNYRokAmD4' style={{ color: '#FFF', cursor: "pointer", textDecoration: "none"}}>
        <Typography variant="h6">Court-métrage (YouTube)</Typography>
      </Link>

      <Content>
        <div>
          <iframe
            width={matches ? "350" : "520"}
            height={matches ? "200" : "350"}
            src='https://www.youtube.com/embed/kvNYRokAmD4'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          />
        </div>
        <div>
          <Typography align='left'>
            Témoin ou victictime de violence conjugales, n&apos;hésitez pas un
            instant
            <a
              href='tel:+17'
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {" "}
              17
            </a>{" "}
            ou
            <a
              href='tel:+3919'
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {" "}
              3919
            </a>{" "}
            (Anonyme/gratuit)
          </Typography>
          <br />
          <Typography variant={matches ? "" : "h6"} align='left'>
            14,5 % des femmes et 3,9 % des hommes âgés victimes de violences
            conjugales
          </Typography>
          <Typography align='left'>
            <strong>
              Seules 12 % des victimes ont porté plainte pour viol
              (qu&apos;elles aient ensuite maintenu ou retiré cette plainte)
            </strong>
          </Typography>
          <br />

          {matches ? (
            ""
          ) : (
            <Typography align='left'>
              <strong>Juste un petit mot :</strong> C&apos;est important de
              porter ou de maintenir sa plainte contre viol/violence conjugale.
              Même si c&apos;est difficile mentalement et physiquement, ça peut
              sauver des vies.
              <br />
              Car si son ancienne compagne au tueur de mon ex Cosette aurai
              porter plainte, mon ex Cosette serait encore en vie. Je ne lui en
              veux pas mais je veux dire par là c&apos;est que comme ça on
              luttera contre tous types de violences, qui est encore un sujet
              tabou et que c&apos;est pourris finiront en prison.
            </Typography>
          )}
        </div>
      </Content>
    </RootVideoProduction>
  );
}
