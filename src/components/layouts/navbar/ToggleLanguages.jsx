import Image from 'next/image';
import React, { useState, useContext } from "react";
// UTILS CONTEXTS
import { ToggleLanguagesContext } from '../../../utils/contexts/ToggleLangagesContext'
// UTILS IMGS
// import FrenchFlag from "../../../utils/assets/icons/countryFlags/France.png"
// import EnglishFlag from "../../../utils/assets/icons/countryFlags/UnitedKingdom.png"


export default function ToggleLanguages() {

    // Context toggle langages
    const [first, setfirst] = useState(false)
    const { lang, setLang, toggleLang } = useContext(ToggleLanguagesContext)
    console.log(toggleLang);

    return (
      <>
        {/* It's two function anonymous */}
        {first ? (
          <Image
            alt="UnitedKingdom"
            src="/assets/icons/countryFlags/UnitedKingdom.png"
            height={70}
            onClick={() => setfirst(!first)}
            width={70}
          />
        ) : (
          <Image
            alt="France"
            src="/assets/icons/countryFlags/France.png"
            height={70}
            onClick={() => setfirst(!first)}
            width={70}
          />
        )}

        {/* <Image
          src="/assets/icons/countryFlags/France.png"
          height={70}
          onClick={() => toggleLang("FR")}
          width={70}
        />
        <Image
          src="/assets/icons/countryFlags/UnitedKingdom.png"
          height={70}
          onClick={() => toggleLang("EN")}
          width={70}
        /> */}
        {/* <img onClick={() => toggleLang('FR')} src={FrenchFlag} alt="Drapeau Français" style={{ width: "50px"}} />
            <img onClick={() => toggleLang('EN')} src={EnglishFlag} alt="Drapeau Anglais" style={{ width: "50px"}} /> */}
      </>
    );
}
