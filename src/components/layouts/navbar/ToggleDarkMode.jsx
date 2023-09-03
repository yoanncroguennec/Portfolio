import React, { useContext, useState } from 'react'
// UTILS CONTEXTS
import { DarkModeContext } from '../../../utils/contexts/DarkModeContext';
// ICONS
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs"


export default function ToggleDarkMode() {

  const [darkMode, setDarkMode] = useContext(DarkModeContext)
  const [toggle, setToggle] = useState(false);
    
    return (
        <div>
          {!darkMode
            ? <BsSun onClick={() => setDarkMode(true)} size={30} />
            : <BsFillMoonStarsFill onClick={() => setDarkMode(false)} size={30} />
          }
        </div>
    )
}
