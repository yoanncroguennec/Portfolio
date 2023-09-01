import { Typography } from "@mui/material";
// NEXT
import Link from "next/link";
// STYLES
import { Drop } from "./StylesTabsProjects";

export default function ContentTabsProjects({
  borderRadius,
  color,
  imgProject,
  numberBox,
  nameProject,
  urlSite,
  iconsTechnosProject,
  linkGit,
  index,
}) {
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
            {iconsTechnosProject.map(({ icon, index }) => (
              <div key={index}>{icon}</div>
            ))}
          </div>
        </div>
      </Drop>
    </div>
  );
}
