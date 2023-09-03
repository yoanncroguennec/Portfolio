'use client'

import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@mui/material'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div
      style={{
        // zIndex: 3000,
        // top: "500px",
        cursor: "pointer",
        // position: "fixed",
      }}
    >
      <Button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <BsSunFill color='#FFFF00' size={45} />
        ) : (
          <BsFillMoonStarsFill color='#000' size={45} />
        )}
      </Button>
    </div>
  );
}

export default ThemeButton
