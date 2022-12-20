import React, { useMemo } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  GestureResponderEvent,
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
export type ButtonSize = 'default' | 'large'
export type IconPosition = 'left' | 'right'

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void
  style?: ViewStyle
  textStyle?: TextStyle
  iconStyle?: ViewStyle
  full?: boolean
  variation?: ButtonVariation
  size?: ButtonSize
  /**
   * Border Radius
   * default: rounded
   */
  roundness?: ButtonRoundness
  icon?: React.ReactNode
  iconPosition?: IconPosition
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
    textStyle,
    iconStyle,
    size = 'default',
    iconPosition = 'left',
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
        return theme.colors.primarySand60
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
        if (variation === 'secondary' && icon) return 18
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
          ...((variation === 'primary' || variation === 'secondary') &&
            roundness === 'rounded' && {
              minWidth: 110,
              height: 34,
            }),
          ...(roundness === 'circular' && {
            width: 42,
            height: 42,
          }),
          ...((variation === 'tertiary' ||
            variation === 'gravity' ||
            variation === 'play') &&
            roundness === 'rounded' && {
              width: 134,
              height: 34,
            }),
          ...(size === 'large' && {
            width: 152,
            height: 49,
            borderRadius: 24.5,
          }),
          ...style,
        },
        text: {
          color: textColor,
          fontFamily:
            fontWeight === '500'
              ? theme.fontFamily.Medium
              : theme.fontFamily.Bold,
          fontSize:
            variation === 'primary' || variation === 'secondary' ? 14 : 12,
          fontWeight: fontWeight,
          letterSpacing: 0.96,
          lineHeight: 18,
          ...((variation === 'primary' || variation === 'secondary') && {
            height: 16,
            minWidth: 82,
            textAlign: 'center',
          }),
          ...(size === 'large' && {
            fontSize: 22,
            lineHeight: 28.6,
            marginTop: 4,
            color:
              variation === 'tertiary'
                ? theme.colors.primarySand60
                : theme.colors.pureWhite,
          }),
          ...textStyle,
        },
        icon: {
          [iconPosition === 'left' ? 'marginRight' : 'marginLeft']: children
            ? theme.spacing.lg
            : 0,
          ...(size === 'large' && {
            [iconPosition === 'left' ? 'marginRight' : 'marginLeft']:
              theme.spacing.xxl,
          }),
          ...iconStyle,
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
        {!!icon && iconPosition === 'left' && (
          <View style={styles.icon}>{icon}</View>
        )}
        <Text style={styles.text}>{children}</Text>
        {!!icon && iconPosition === 'right' && (
          <View style={styles.icon}>{icon}</View>
        )}
      </Pressable>
    </View>
  )
}

export default Button
