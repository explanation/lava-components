import React, { useMemo } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import useTheme from '../../hooks/useTheme'

export type ButtonVariation =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'play'
  | 'gravity'
  | 'transparent'
export type ButtonRoundness = 'flat' | 'rounded' | 'circular'

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void
  style?: ViewStyle
  textStyle?: TextStyle
  full?: boolean
  variation?: ButtonVariation
  /**
   * Border Radius
   * default: rounded
   */
  roundness?: ButtonRoundness
  icon?: React.ReactNode
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variation,
    style,
    full = false,
    roundness = 'rounded',
    onPress,
    icon,
    children,
  } = props
  const theme = useTheme()

  const backgroundColor = useMemo(() => {
    switch (variation) {
      case 'primary':
        return theme.colors.primarySand
      case 'secondary':
      case 'transparent':
        return 'transparent'
      case 'tertiary':
        return theme.colors.primarySand + '0D'
      case 'play':
        return theme.colors.tertiaryOnline
      case 'gravity':
        return theme.colors.gravity
      default:
        return theme.colors.primarySand
    }
  }, [theme])

  const textColor = useMemo(() => {
    switch (variation) {
      case 'primary':
        return theme.colors.secondaryBk
      case 'secondary':
      case 'gravity':
      case 'play':
        return theme.colors.primarySand
      case 'tertiary':
        return theme.colors.primarySand
      default:
        theme.colors.primarySand
    }
  }, [theme])

  const fontWeight = useMemo(() => {
    switch (variation) {
      case 'primary':
      case 'play':
      case 'gravity':
      case 'tertiary':
        return '700'
      default:
        return '500'
    }
  }, [theme])

  const borderColor = useMemo(() => {
    switch (variation) {
      case 'primary':
      case 'secondary':
        return theme.colors.primarySand
      case 'play':
        return theme.colors.tertiaryOnline
      default:
        return 'transparent'
    }
  }, [theme])

  const borderRadius = useMemo(() => {
    switch (roundness) {
      case 'rounded':
        return 17
      case 'circular':
        return '100%'
      case 'flat':
      default:
        return 0
    }
  }, [theme])

  const paddingHorizontal = useMemo(() => {
    let padding = undefined
    if (variation === 'transparent') {
      padding = 0
    } else if (roundness !== 'circular') {
      padding = theme.spacing.xxl
    } else {
      padding = theme.spacing.lg
    }
    return padding
  }, [theme])

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flexDirection: 'row',
          width: full ? '100%' : undefined,
        },
        container: {
          flex: full ? 1 : undefined,
          paddingHorizontal,
          paddingVertical: variation === 'transparent' ? 0 : theme.spacing.lg,
          borderRadius: borderRadius as number,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
          ...style,
        },
        text: {
          color: textColor,
          fontFamily:
            fontWeight === '500'
              ? theme.fontFamily.Medium
              : theme.fontFamily.Bold,
          fontSize: 14,
          fontWeight: fontWeight,
          letterSpacing: 0.96,
          lineHeight: 18,
        },
        icon: {
          marginRight: children ? theme.spacing.lg : 0,
        },
      }),
    [theme],
  )

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        {!!icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default Button
