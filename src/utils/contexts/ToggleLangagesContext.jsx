import React, { createContext, useState } from 'react'
import dynamic from 'next/dynamic'
export const ToggleLanguagesContext = createContext();

export default function ToggleLanguagesProvider({children}) {

    // Repérer la langue du navigateur
    const supportedLang = ["EN", "FR"];
    // let browserLang = navigator.language.slice(0,2).toUpperCase();
    // console.log(browserLang);
    // Si n'est pas supporté il se configure en Anglais, car je l'ai mis par défaut car c'est la langue la plus parlée
    // if (supportedLang.indexOf(browserLang) === -1) {
    //     console.log("Not supported");
    //     browserLang = "EN"
    // }

    const [lang, setLang] = useState("FR")
    // console.log(lang);

    function toggleLang(changeLang) {
        setLang(changeLang)
    }

    return (
        <ToggleLanguagesContext.Provider value={{ lang, setLang, toggleLang }}>
            {children}
        </ToggleLanguagesContext.Provider>
    )
}
