'use client'
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { Sun, Moon } from 'react-feather'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-md bg-gray-800/40">
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
