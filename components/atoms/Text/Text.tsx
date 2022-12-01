import React from 'react'
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
} from 'react-native'
import useTheme from '../../hooks/useTheme'

export interface TextProps {
  /** Text's Content */
  children?: React.ReactNode
  /** And object of additional Styles
   *
   * eg: { fontSize: 24 }
   */
  style?: StyleProp<TextStyle>
}

const Text: React.FC<TextProps> = (props) => {
  const { style = {}, children } = props
  const theme = useTheme()

  const styles = StyleSheet.create({
    default: {
      ...theme.typography.base,
      color: theme.colors.neutral,
    },
  })

  return <NativeText style={[styles.default, style]}>{children}</NativeText>
}

export default Text
