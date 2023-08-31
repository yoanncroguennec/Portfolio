import React, { useContext, useState } from "react";
import { hobbies } from "@/utils/assets/data/hobbies/DataHobbies";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { DarkModeContext } from "@/utils/contexts/DarkModeContext";
import Image from "next/image";

export default function Hobbies() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [active, setActive] = useState(0);

  // ****************** DARK MODE ****************** //
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div style={{ }}>
      <Typography
        // align='center'
        style={{
          color: darkMode ? "#000" : "#FFF",
          fontFamily: "'Dancing Script', cursive",
          margin: "15px",
        }}
        variant={matches ? "h4" : "h3"}
      >
        Mes passions :
      </Typography>
      <div className='container'>
        {hobbies.map((img, index) => (
          <div
            className={active === index ? "card active" : "card"}
            key={index}
          >
            <Image
              alt=''
              src={img.imgUrl}
              className='img'
              onClick={() => setActive(index)}
              height={750}
              width={850}
            />
            <Typography
              className='heading'
              style={{ textShadow: "1px 1px 10px #000" }}
              variant={matches ? "h5" : "h2"}
            >
              {img.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
