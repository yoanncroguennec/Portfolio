"use client";

import { Box, styled, useTheme, Tab, Tabs, withStyles } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { SyntheticEvent, useState } from "react";
//
import {
  TabProjectsNextJS,
  TabProjectsReactJS,
  TabProjectsReactNative,
} from "../index";
// ICONS
import { SiNextdotjs, SiReact } from "react-icons/si";
const colorIconNext = "#000";
const colorIconReact = "#0000FF";
const sizeIcon = 40;
import { Drop } from "./StylesTabsProjects";


// IMPORT "TIPPY" => SHOW TOOLTIP
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// AOS
// import AOS from "aos";
// import "aos/dist/aos.css";
//

// STYLES
const RootProjects = styled(Box)(({ theme }) => ({
  // background: "blue",
  height: "100vh",
  width: "100vw",
}));



export default function ListProjectsVSDesktop() {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

  const theme = useTheme();

  // STYLES
  const BoxProjects = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1300px",
    margin: "70px auto 0",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
    },
  }));

  const [value, setValue] = useState("1");

  function handleChange(e: SyntheticEvent, newValue: string) {
    setValue(newValue);
  }


  return (
    <RootProjects id='myProjects'>
      <TabContext value={value}>
        <Drop
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "450px",
            margin: "0 auto",
            paddingTop: "55px"
          }}
        >
          <TabList
            // aria-label='Tabs Exemple'
            aria-label='disabled tabs example'
            onChange={handleChange}
            textColor='secondary'
            // centered
            indicatorColor='primary'
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab
              icon={<SiNextdotjs color={colorIconNext} size={sizeIcon} />}
              iconPosition='start'
              label='Next JS'
              value='1'
            />
            <Tab
              icon={<SiReact color={colorIconReact} size={sizeIcon} />}
              iconPosition='start'
              label='React JS'
              value='2'
            />
            <Tab
              disabled
              icon={<SiReact color={colorIconReact} size={sizeIcon} />}
              iconPosition='start'
              label='React Native'
              value='3'
            />
            {/* <Tab label='Tab four' value='4' />
            <Tab label='Tab five' value='5' />
            <Tab label='Tab six' value='6' /> */}
          </TabList>
        </Drop>

        <TabPanel value='1'>
          <BoxProjects>
            <TabProjectsNextJS />
          </BoxProjects>
        </TabPanel>
        <TabPanel value='2'>
          <BoxProjects>
            <TabProjectsReactJS />
          </BoxProjects>
        </TabPanel>
        <TabPanel value='3'>
          <BoxProjects>
            <TabProjectsReactNative />
          </BoxProjects>
        </TabPanel>
        {/* <TabPanel value='4'>Panel four</TabPanel>
        <TabPanel value='5'>Panel five</TabPanel>
        <TabPanel value='6'>Panel six</TabPanel> */}
      </TabContext>
    </RootProjects>
  );
}
