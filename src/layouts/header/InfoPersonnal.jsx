import React, { useContext } from "react";
// import { ToggleLanguagesContext } from "../../../utils/contexts/ToggleLangagesContext";
// ICONS
import { AiOutlineCar } from "react-icons/ai";
import {
  BiUser,
  BiLocationPlus,
  BiPhoneCall,
  BiMailSend,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import { PiGlobeHemisphereWestLight } from "react-icons/pi";
import { dataHeaderLanguages } from "../../../utils/assets/data/languages/Header";

export default function InfoPersonnal() {
  // Context toggle langages
  // const { lang } = useContext(ToggleLanguagesContext);

  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "350px",
        zIndex: 999,
      }}
    >
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiUser size={32} />
        </div>
          Reconnu RQTH
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiUser color='#FFF' size={32} />
        </div>
        37 ans
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiLocationPlus size={32} />
        </div>
        Saint-Brieuc (22000)
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiPhoneCall size={32} />
        </div>
        <a
          href='tel:+33765827083'
          style={{
            textDecoration: "none",
            color: "#FFF",
            cursor: "pointer",
          }}
        >
          07 65 82 70 83
        </a>
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiMailSend size={32} />
        </div>
        <a
          href='mailto:yoann.croguennec@gmail.com'
          style={{
            color: "#FFF",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          yoann.croguennec@gmail.com
        </a>
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiUser size={32} />
        </div>
        {/* {dataHeaderLanguages[lang].title} */}
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <AiOutlineCar size={32} />
        </div>
        Permis B
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiLogoLinkedinSquare color='#0080FF' size={32} />
        </div>
        <a
          href='https://www.linkedin.com/in/yoann-croguennec/'
          style={{
            color: "#FFF",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          https://www.linkedin.com/in/yoann-croguennec/
        </a>
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BiLogoGithub size={32} />
        </div>
        <a
          href='https://github.com/yoanncroguennec'
          style={{
            color: "#FFF",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          https://github.com/yoanncroguennec
        </a>
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <PiGlobeHemisphereWestLight size={32} />
        </div>
        Disponible immédiatement
      </div>
      <div
        style={{
          alignItems: "center",
          color: "#FFF",
          display: "flex",
          flexWrap: "nowrap",
          padding: "3px 10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <PiGlobeHemisphereWestLight size={32} />
        </div>
        Recherche sur toute la france
      </div>
    </div>
  );
}
