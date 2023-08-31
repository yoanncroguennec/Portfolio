// IMGS
import imgIllustratorCard1 from "../../../../public/assets/imgs/langagesSoftwares/langages1.png";
import imgIllustratorCard2 from "../../../../public/assets/imgs/langagesSoftwares/logiciels.png";
// ICONS
import iconBlender from "../../../../public/assets/icons/blender.png";
import iconCSS from "../../../../public/assets/icons/css.png";
import iconHTML from "../../../../public/assets/icons/html.png";
import iconJS from "../../../../public/assets/icons/js.png";
import iconNodeJS from "../../../../public/assets/icons/nodeJS.png";
import iconPowerPoint from "../../../../public/assets/icons/powerPoint.png";
import iconReactJS_Native from "../../../../public/assets/icons/reactJS_Native.png";
import iconSASS from "../../../../public/assets/icons/sass.png";
import iconVSCode from "../../../../public/assets/icons/vscode.png";
import iconWord from "../../../../public/assets/icons/word.png";

export const dataLangagesSoftwares = [
  {
    id: 1,
    title: 'Langages',
    img: imgIllustratorCard1,
    data: [
        {
            icon: iconHTML,
            name: "HTML",
        },
        {
            icon: iconCSS,
            name: "CSS",
        },
        {
            icon: iconSASS,
            name: "SASS",
        },
        {
            icon: iconJS,
            name: "JavaScript",
        },
        {
            icon: iconReactJS_Native,
            name: "React JS/Native",
        },
    ]
  },
  {
    id: 2,
    title: 'Logiciels',
    img: imgIllustratorCard2,
    data: [
        {
            icon: iconHTML,
            name: "Github",
        },
        {
            icon: iconVSCode,
            name: "Visual Studio Code",
        },
        {
            icon: iconNodeJS,
            name: "NodeJS",
        },
        {
            icon: iconHTML,
            name: "MongoDB",
        },
        {
            icon: iconBlender,
            name: "Blender",
        },
        {
            icon: iconWord,
            name: "Microsoft Word",
        },
        {
            icon: iconPowerPoint,
            name: "PowerPoint",
        },
    ]
  },
];
