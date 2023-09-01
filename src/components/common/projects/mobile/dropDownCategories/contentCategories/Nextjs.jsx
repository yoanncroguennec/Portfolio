import React, { useState } from "react";
import { Typography } from "@mui/material";
// NEXT
import Link from "next/link";
// UTILS DATA
import { nextJS } from "@/utils/assets/data/index";
// ICONS
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Drop } from "./Styles";

export default function Nextjs() {
  // ****************** PAGINATIONS ****************** //
  const [index, setIndex] = useState(0);

  const {
    borderRadiusNextJS,
    colorNextJS,
    numberBoxNextJS,
    nameProjectNextJS,
    imgProjectNextJS,
    iconsTechnosProjectNextJS,
    nameURlSiteNextJS,
    urlSiteNextJS,
    iconsTechnosProject,
    nameURLGitNextJS,
    linkGitNextJS,
  } = nextJS[index];

  const checkProjectsNextJS = (number) => {
    if (number > nextJS.length - 1) {
      return 0;
    }
    if (number < 0) {
      return nextJS.length - 1;
    }
    return number;
  };
  const nextProjectsNextJS = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkProjectsNextJS(newIndex);
    });
  };
  const prevProjectsNextJS = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkProjectsNextJS(newIndex);
    });
  };

  return (
    <Drop borderRadius={borderRadiusNextJS}>
      <div className='content'>
        <Typography
          variant='h4'
          className='numberBox'
          style={{ color: `${colorNextJS}` }}
        >
          {numberBoxNextJS}
        </Typography>
        <Typography>{nameProjectNextJS}</Typography>
        <Link href={urlSiteNextJS} target='_blank'>
          <Typography>Site Internet</Typography>
        </Link>
        <Link href={linkGitNextJS} target='_blank'>
          <Typography>Github</Typography>
        </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          {iconsTechnosProjectNextJS?.map(({ icon }) => (
            <>{icon}</>
          ))}
        </div>
      </div>
      <FaChevronLeft
        onClick={prevProjectsNextJS}
        size={40}
        style={{ cursor: "pointer" }}
      />
      <FaChevronRight
        onClick={nextProjectsNextJS}
        size={40}
        style={{ cursor: "pointer" }}
      />
    </Drop>
  );
}
