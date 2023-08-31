import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
// ICONS
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// UTILS ASSETS DATAS
import { dataLangagesSoftwares } from "../../../utils/assets/data/DataLangagesSoftwares";
import Image from "next/image";


export default function LanguagesSoftwares() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const BoxCard = styled(Card)(({ theme }) => ({
    borderRadius: 10,
    boxShadow:
      "inset 20px 20px 20px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05), 25px 35px 20px rgba(255, 255, 255, 0.9)",
    height: "520px",
    width: 400,
    [theme.breakpoints.down("sm")]: {
      height: "480px",
      width: 290,
      // marginLeft: "100px",
      // marginRight: "100px"
    },
  }));

  const BoxContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "7px",
    paddingLeft: "50px",
  }));

  const CardActionsBox = styled(CardActions)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  }));

  //////////////////// JS ////////////////////
  //////////////////// PAGINATIONS ////////////////////
  const [index, setIndex] = useState(0);

  const { title, img, data } = dataLangagesSoftwares[index];

  const checkNumber = (number) => {
    if (number > dataLangagesSoftwares.length - 1) {
      return 0;
    }
    if (number < 0) {
      return dataLangagesSoftwares.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div id='technologies'>
      <Image
        src='/assets/imgs/personnage2D/personnage.png'
        alt='personnage2D Contact'
        height={matches ? "150" : "300"}
        width={matches ? "150" : "300"}
        style={{ marginBottom: "-40px" }}
      />

      <BoxCard
        data-aos='fade-up'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <Image
          alt='techs'
          src={img}
          height={matches ? "80" : "120"}
          width={matches ? "300" : "400"}
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            {title}
          </Typography>
          {data.map((item, index) => {
            return (
              <BoxContent key={index}>
                <Image
                  alt='icon'
                  src={item.icon}
                  height={30}
                  width={30}
                  style={{ marginRight: "25px" }}
                />
                <Typography>{item.name}</Typography>
              </BoxContent>
            );
          })}
        </CardContent>
        <CardActionsBox>
          <FaChevronLeft
            onClick={prevPerson}
            size={40}
            style={{ cursor: "pointer" }}
          />
          <FaChevronRight
            onClick={nextPerson}
            size={40}
            style={{ cursor: "pointer" }}
          />
        </CardActionsBox>
      </BoxCard>
    </div>
  );
}
