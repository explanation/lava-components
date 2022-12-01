import { TextStyle } from 'react-native'

export const colors = {
  dark: {
    neutral: '#EAEADF',
    cta: '#398FE4',
    background: '#13141C',
    cards: '#161E2C',
    online: '#0A741C',
    text: '#aaa',
    pureBlack: '#000000',
    pureWhite: '#fff',
    brandYellow: '#FFDF41',
    brandPurple: '#923589',
    purpleDark: '#6C2B68',
    ctaDark: '#265180',
    yellow: '#FFDF41',
    yellowLight: '#FFDF4150',
    yellowDark: '#FFDF4170',
  },
  light: {
    neutral: '#EAEADF',
    cta: '#398FE4',
    background: '#13141C',
    cards: '#161E2C',
    online: '#0A741C',
    text: '#aaa',
    pureBlack: '#000000',
    pureWhite: '#fff',
    brandYellow: '#FFDF41',
    brandPurple: '#923589',
    purpleDark: '#6C2B68',
    ctaDark: '#265180',
    yellow: '#FFDF41',
    yellowLight: '#FFDF4150',
    yellowDark: '#FFDF4170',
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
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
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
