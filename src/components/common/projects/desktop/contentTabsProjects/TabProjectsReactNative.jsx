// COMMONS
import { ContentTabsProjects } from "../../../index";
// UTILS DATA
import { dataProjectsReactNative } from "../../../../../utils/assets/data/index";

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
