'use client';

import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext({
  theme: 'dark',
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Mark client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Read system / saved theme
  useEffect(() => {
    if (!mounted) return;

    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const finalTheme = saved ?? (prefersDark ? 'dark' : 'light');
    setTheme(finalTheme);

    document.documentElement.classList.toggle('dark', finalTheme === 'dark');
  }, [mounted]);

  // Persist theme
  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  if (!mounted) return null; // ⬅️ critical for SSR safety

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
