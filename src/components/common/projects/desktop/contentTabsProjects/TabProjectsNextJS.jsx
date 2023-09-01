// COMMONS
import { ContentTabsProjects } from "../../../index";
// UTILS DATA
import { dataProjectsNextJS } from "../../../../../utils/assets/data";

export default function TabProjectsNextJS() {
  return dataProjectsNextJS?.map(
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
    }) => (
      <ContentTabsProjects
        borderRadius={borderRadius}
        color={color}
        imgProject={imgProject}
        numberBox={numberBox}
        nameProject={nameProject}
        urlSite={urlSite}
        iconsTechnosProject={iconsTechnosProject}
        linkGit={linkGit}
        index={index}
      />
    )
  );
}
  