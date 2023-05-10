import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(
      'useTheme must be used within a ThemeContextProvider, Make sure to wrap your root file (App.tsx) with <ThemeContextProvider>',
    )
  }
  return context
}

export default useTheme
