"use client"

import ScrollToTop from "react-scroll-to-top";
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AiFillPrinter } from "react-icons/ai";
import {PopupSharePortfolioViaSocialNetworks, ThemeButton} from "../index";
import Navbar from "../navbar/Navbar";

const actions = [
  // { icon: <FileCopyIcon />, name: "Copy" },
  {
    icon: <PopupSharePortfolioViaSocialNetworks />,
    name: "Partager Portfolio",
  },
  { icon: <Navbar />, name: "Menu" },
  { icon: <ThemeButton />, name: "Dark Mode" },
];

export default function MuiSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1, zIndex: 9999, cursor: "pointer", position: "fixed", bottom: "0", right: "150px" }}>
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        // sx={{ position: "fixed", bottom: 16, right: 16 }}
        // sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
