import {
  reactJS,
} from "@/utils/assets/data/projects/mobile/DataProjectsNextJS";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
// ICONS
import { FaChevronLeft, FaChevronRight, FaReact, FaSass } from "react-icons/fa";
import { Drop } from './Styles';

export default function Reactjs() {
  // ****************** PAGINATIONS ****************** //
  const [index, setIndex] = useState(0);

  const {
    borderRadiusReactJS,
    colorReactJS,
    numberBoxReactJS,
    nameProjectReactJS,
    imgProjectReactJS,
    iconsTechnosProjectReactJS,
    nameURlSiteReactJS,
    urlSiteReactJS,
    nameURLGitReactJS,
    linkGitReactJS,
  } = reactJS[index];

  const checkProjectsReactJS = (number) => {
    if (number > reactJS.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reactJS.length - 1;
    }
    return number;
  };
  const nextProjectsReactJS = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkProjectsReactJS(newIndex);
    });
  };
  const prevProjectsReactJS = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkProjectsReactJS(newIndex);
    });
  };

  return (
    <Drop borderRadius={borderRadiusReactJS}>
      <div className='content'>
        <Typography
          variant='h4'
          className='numberBox'
          style={{ color: `${colorReactJS}` }}
        >
          {numberBoxReactJS}
        </Typography>
        <Typography>{nameProjectReactJS}</Typography>
        <Link href={urlSiteReactJS} target='_blank'>
            <Typography>Site Internet</Typography>
          </Link>
        <Link href={linkGitReactJS} target='_blank'>
            <Typography>Github</Typography>
          </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          <FaReact color='#0080FF' size={45} style={{ marginRight: "15px" }} />
          <FaSass color='#FC0FC0' size={45} style={{ marginRight: "15px" }} />
        </div>
      </div>
      <FaChevronLeft
        onClick={prevProjectsReactJS}
        size={40}
        style={{ cursor: "pointer" }}
      />
      <FaChevronRight
        onClick={nextProjectsReactJS}
        size={40}
        style={{ cursor: "pointer" }}
      />
    </Drop>
  );
}
