import { TextStyle } from 'react-native'

export const colors = {
  dark: {
    // Brand colors
    sand: '#EAEADF',
    gravity: '#398FE4',
    bee: '#FFDF41',
    nebula: '#923589',

    // Primary Colors
    primarySand: '#EAEADF',
    primarySand60: '#EAEADF99',
    primarySand40: '#EAEADF66',

    // Secondary Colors
    secondaryContainers: '#161E2C',
    secondaryBk: '#13141C',
    secondaryGravity100: '#398FE4',

    // Tertiary Colors
    tertiaryNebulaDark: '#692663',
    tertiaryBeeDark: '#B8A236',
    tertiaryGravityDark: '#265180',
    tertiarySand20: '#EAEADF33',
    tertiarySand5: '#EAEADF0D',
    tertiaryOnline: '#0A741C',

    // Others
    pureBlack: '#000000',
    pureWhite: '#FFF',
  },
  light: {
    // Brand colors
    sand: '#EAEADF',
    gravity: '#398FE4',
    bee: '#FFDF41',
    nebula: '#923589',

    // Primary Colors
    primarySand: '#EAEADF',
    primarySand60: '#EAEADF99',
    primarySand40: '#EAEADF66',

    // Secondary Colors
    secondaryContainers: '#161E2C',
    secondaryBk: '#13141C',
    secondaryGravity100: '#398FE4',

    // Tertiary Colors
    tertiaryNebulaDark: '#692663',
    tertiaryBeeDark: '#B8A236',
    tertiaryGravityDark: '#265180',
    tertiarySand20: '#EAEADF33',
    tertiarySand5: '#EAEADF0D',
    tertiaryOnline: '#0A741C',

    // Others
    pureBlack: '#000000',
    pureWhite: '#FFF',
  },
}

export const fontFamily = {
  default: 'Agrandir',
  Bold: 'Agrandir-Bold',
  Medium: 'Agrandir-Medium',
  Regular: 'Agrandir-Regular',
}

export type TypographyItem = {
  fontFamily: TextStyle['fontFamily']
  fontSize: TextStyle['fontSize']
  fontWeight: TextStyle['fontWeight']
  color: TextStyle['color']
  lineHeight?: TextStyle['lineHeight']
}

export interface TypographyConfig {
  heading1: TypographyItem
  subtitle1: TypographyItem
  subtitle2: TypographyItem
  subtitle3: TypographyItem
  subtitle4: TypographyItem
  buttonLarge: TypographyItem
  base: TypographyItem
}

export const roundness = {
  xs: 1,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 10,
}

export const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
}

export const getTypography = (
  themeColors: typeof colors.dark,
): TypographyConfig => ({
  heading1: {
    fontFamily: fontFamily.Medium,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: themeColors.pureBlack,
  },
  subtitle1: {
    fontFamily: fontFamily.Medium,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: themeColors.pureBlack,
  },
  subtitle2: {
    fontFamily: fontFamily.Regular,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: themeColors.pureBlack,
  },
  subtitle3: {
    fontFamily: fontFamily.Regular,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '400',
    color: themeColors.pureBlack,
  },
  subtitle4: {
    fontFamily: fontFamily.Regular,
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 10,
    color: themeColors.pureBlack,
  },
  buttonLarge: {
    fontFamily: fontFamily.Bold,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
    color: themeColors.pureBlack,
  },
  base: {
    fontFamily: fontFamily.Regular,
    fontSize: 12,
    fontWeight: '400',
    color: themeColors.pureBlack,
  },
})

const theme = {
  colors,
  getTypography,
  roundness,
  spacing,
  fontFamily,
}

export default theme
