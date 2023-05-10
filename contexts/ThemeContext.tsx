import { createContext, FC, useMemo } from 'react'
import theme, {
  colors,
  fontFamily,
  getTypography,
  roundness,
  spacing,
  TypographyConfig,
} from '../config/theme'

interface IThemeContext {
  typography: TypographyConfig
  fontFamily: typeof fontFamily
  roundness: typeof roundness
  spacing: typeof spacing
  colors: typeof colors.dark
}

// Setting default theme config to dark
export const ThemeContext = createContext<IThemeContext>({
  fontFamily: fontFamily,
  colors: colors.dark,
  roundness: roundness,
  spacing: spacing,
  typography: getTypography(colors.dark),
})

interface ThemeContextProviderProps {
  children?: React.ReactNode
  mode?: 'dark' | 'light'
  /**
   * Override theme object
   */
  theme?: IThemeContext
}

const ThemeContextProvider: FC<ThemeContextProviderProps> = (props) => {
  const { children, mode = 'dark', theme: overrideTheme } = props

  const theme = useMemo(() => {
    return (
      overrideTheme || {
        fontFamily,
        roundness,
        spacing,
        colors: colors[mode],
        typography: getTypography(colors[mode]),
      }
    )
  }, [mode])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

ThemeContextProvider.defaultProps = {
  mode: 'dark',
}

export default ThemeContextProvider
