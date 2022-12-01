import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
} from 'react-native'
import useTheme from '../../hooks/useTheme'

export interface TextProps {
  /** Text color from the palette. eg. cta
   *
   * default: `cta`
   */
  color?: any
  /** Text's Content */
  children?: React.ReactNode
  /** And object of additional Styles
   *
   * eg: { fontSize: 24 }
   */
  style?: StyleProp<TextStyle>
}

const Text: React.FC<TextProps> = (props) => {
  const { color = 'neutral', style = {}, children } = props
  const theme = useTheme()

  const styles = StyleSheet.create({
    default: {
      ...theme.typography.text,
      ...(color && { color: theme.colors[color] }),
    },
  })

  return <NativeText style={[styles.default, style]}>{children}</NativeText>
}

export default Text
