'use client'

import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type='button'
      // className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <BsSunFill color='#FFFF00' size={45} />
      ) : (
        <BsFillMoonStarsFill color='#000' size={45} />
      )}
    </button>
  )
}

export default ThemeButton
