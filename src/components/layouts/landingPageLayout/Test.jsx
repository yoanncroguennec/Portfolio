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


export default function Test() {
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
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
      voluptas?
    </div>
  );
}
