import { useRef } from "react";
import BtnControlMusic from "./btns/btnControlMusic/BtnControlMusic";
import MuiSpeedDial from "./btns/Mui_SpeedDial";

export default function MainLayout({ children }) {
  // "useRef" : Permet de faire référence à un élément DOM, dont il va retourner un objet modifiable dont la propriété "current" est initialiser avec l'argument fourni
  let cursorRef = useRef();
  function mousePosition(e) {
    // Renvoit un objet nommé "cursorRef", possédant la "key" : "current", on rajoutte ".current"
    // console.log(cursorRef.current);
    // e get position cursor
    // Exemples d'attribut ("rel", "href", "src")
    cursorRef.current.setAttribute(
      "style",
      `top:${e.pageY - 20}px; left:${e.pageX - 20}px;`
    );
  }
  function mouseClick() {
    cursorRef.current.classList.add("expand");

    setTimeout(() => {
      cursorRef.current.classList.remove("expand")
    }, 500)
  }

  return (
    // "onMouseMove" : Événements HTML de souris
    <div onMouseMove={mousePosition} onclick={mouseClick}>
      <div className='cursor-perso' ref={cursorRef} />
      
      <MuiSpeedDial />
      {/* <BtnControlMusic /> */}
      {children}
    </div>
  );
}
