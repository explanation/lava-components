import React, { useMemo } from 'react'
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import useTheme from '../../hooks/useTheme'

export type TitleVariation =
  | 'title1'
  | 'title2'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'subtitle4'

export interface TitleProps extends TextProps {
  /** Title's variation
   * Possible values: "title1" | "title2" | "subtitle1" | "subtitle2" | "subtitle3" | "subtitle4"
   */
  variation: TitleVariation
  /** Title's Content */
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
          ...theme.typography[variation],
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
