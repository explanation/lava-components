import React, { useMemo } from 'react'
import { Image, StyleSheet, Pressable, View } from 'react-native'
import Label from '../../atoms/Label/Label'
import Text from '../../atoms/Text/Text'
import Title, { TitleVariation } from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'

export type TopicCardVariation = 'full' | 'mini' | 'icon'

export interface TopicCardProps {
  thumbnailUrl: string
  notificationCount?: number
  title?: string
  onPress?: () => void
  variation?: TopicCardVariation
  callout?: string
}

const TopicCard: React.FC<TopicCardProps> = (props) => {
  const {
    thumbnailUrl,
    title,
    notificationCount,
    onPress,
    variation = 'full',
    callout,
  } = props

  const theme = useTheme()

  const maxWidth = useMemo(() => {
    switch (variation) {
      case 'full':
        return 152
      case 'mini':
        return 132
      case 'icon':
        return 224
      default:
        return 0
    }
  }, [])

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          maxWidth: maxWidth,
          padding: variation === 'full' ? theme.spacing.xl : 0,
          borderRadius: theme.roundness.sm,
          flexDirection: variation === 'icon' ? 'row' : 'column',
          alignItems: 'center',
          backgroundColor:
            variation === 'full'
              ? theme.colors.secondaryContainers
              : 'transparent',
          boxShadow:
            variation === 'full' ? '1px 0px 5px rgba(0, 0, 0, 0.4)' : undefined,
        },
        thumbnail: {
          width: variation === 'icon' ? 52 : 132,
          height: variation === 'icon' ? 36 : 99,
          borderWidth: 0.5,
          borderRadius: theme.roundness.xs,
          borderColor: theme.colors.primarySand60,
          marginRight: variation === 'icon' ? 8 : 0,
        },
        title: {
          position: 'relative',
          height: variation === 'icon' ? (callout ? 12 : 14) : 28,
          maxWidth: variation === 'icon' ? 164 : 132,
          marginTop: variation === 'icon' ? 0 : theme.spacing.lg,
        },
        notificationLabelContainer: {
          position: 'absolute',
          top: 0,
          right: 0,
        },
        callout: {
          marginTop: 4,
        },
      }),
    [],
  )

  const handlePress = () => {
    if (onPress && typeof onPress === 'function') {
      onPress()
    }
  }

  const titleVariation: TitleVariation = useMemo(() => {
    switch (variation) {
      case 'full':
      case 'mini':
        return 'subtitle2'
      case 'icon':
        if (callout) return 'subtitle1'
        return 'title2'
      default:
        return 'subtitle2'
    }
  }, [])

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />

      <View>
        <Title
          numberOfLines={variation === 'full' || variation === 'mini' ? 2 : 1}
          style={styles.title}
          variation={titleVariation}
        >
          {title}
        </Title>

        {callout && <Text style={styles.callout}>{callout}</Text>}
      </View>

      {notificationCount && (
        <View style={styles.notificationLabelContainer}>
          <Label count={notificationCount!} />
        </View>
      )}
    </Pressable>
  )
}

export default TopicCard
