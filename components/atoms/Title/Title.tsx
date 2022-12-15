import React, { useMemo } from 'react'
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import { TypographyConfig } from '../../config/theme'
import useTheme from '../../hooks/useTheme'

export type HeadingVariation =
  | 'heading1'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'

export interface TitleProps extends TextProps {
  /** Heading's variation
   * Possible values: "heading1" | "subtitle1" | "subtitle2" | "subtitle3" | "subtitle4"
   */
  variation: HeadingVariation
  /** Heading's Content */
  children?: React.ReactNode
  style?: StyleProp<TextStyle>
}

const Title: React.FC<TitleProps> = (props) => {
  const { variation, style = {}, children, ...restProps } = props
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        default: {
          ...theme.typography[variation as keyof TypographyConfig],
        },
      }),
    [theme],
  )

  return (
    <Text style={[styles.default, style]} {...restProps}>
      {children}
    </Text>
  )
}

export default Title
