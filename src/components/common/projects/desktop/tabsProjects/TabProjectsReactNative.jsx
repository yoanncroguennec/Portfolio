import { Typography } from "@mui/material";
// NEXT
import Link from "next/link";
// UTILS DATA
import { dataProjectsReactNative } from "../../../../../utils/assets/data/index";
// STYLES
import { Drop } from "./StylesTabsProjects";

export default function TabProjectsReactNative() {
  return dataProjectsReactNative?.map(
    ({
      borderRadius,
      color,
      imgProject,
      numberBox,
      nameProject,
      urlSite,
      iconsTechnosProject,
      linkGit,
      index,
    }) => {
      return (
        <div key={index}>
          <Drop borderRadius={borderRadius}>
            <div className='content'>
              <Typography
                variant='h4'
                className='numberBox'
                style={{ color: `${color}` }}
              >
                {numberBox}
              </Typography>
              <Typography>{nameProject}</Typography>
              <Link href={urlSite} target='_blank'>
                <Typography>Site Internet</Typography>
              </Link>
              <Link href={linkGit} target='_blank'>
                <Typography>Github</Typography>
              </Link>
              <div
                style={{
                  display: "flex",
                  flexWrap: "nowrap",
                }}
              >
                {iconsTechnosProject.map(({ icon }) => (
                  <>{icon}</>
                ))}
              </div>
            </div>
          </Drop>
        </div>
      );
    }
  );
}
