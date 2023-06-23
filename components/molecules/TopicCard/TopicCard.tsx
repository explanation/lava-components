import React, { useMemo } from 'react'
import { Image, StyleSheet, Pressable, View, ViewStyle } from 'react-native'
import Label from '../../atoms/Label/Label'
import Text from '../../atoms/Text/Text'
import Title, { TitleVariation } from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'

export type TopicCardVariation = 'full' | 'mini' | 'icon' | 'active' | 'idle'
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

  const variants = {
    active: {
      wrapper:{
        backgroundColor: '#1B1F23',
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: theme.roundness.md,
        alignSelf: 'baseline'
      },
      container: {
        opacity: 1,
        
      },
      thumbnail: {
        height: 128,
        width: 128,
        borderTopLeftRadius: theme.roundness.md,
        borderTopRightRadius: theme.roundness.md,
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomColor: 'rgba(234, 234, 223, 0.15)',
        opacity: 0.8
      },
      title: {
        marginTop: 0,
        padding: 9
      }
    },
    idle: {
      wrapper:{
        backgroundColor: '#1B1F23',
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: theme.roundness.md,
        alignSelf: 'baseline'
      },
      container: {
        opacity: 0.5,
      },
      thumbnail: {
        height: 128,
        width: 128,
        borderTopLeftRadius: theme.roundness.md,
        borderTopRightRadius: theme.roundness.md,
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomColor: 'rgba(234, 234, 223, 0.15)',
        opacity: 0.8
      },
      title: {
        marginTop: 0,
        padding: 9
      }
    },
    full: {
      wrapper:{},
      container: {
        width: 152,
        opacity: 1,
        padding: theme.spacing.xl,
        flexDirection: 'column',
        backgroundColor: theme.colors.secondaryContainers,
        boxShadow: '1px 0px 5px rgba(0, 0, 0, 0.4)',
      },
      thumbnail: {
        width: 132,
        height: 99,
      },
      title: {}
    },
    mini: {
      wrapper:{},
      container: {
        width: 132,
        opacity: 1,
        padding: 0,
        flexDirection: 'column',
        backgroundColor: 'transparent'
      },
      thumbnail: {
        width: 132,
        height: 99,
      },
      title: {}
    },
    icon: {
      wrapper:{},
      container: {
        width: 224,
        opacity: 1,
        padding: 0,
        flexDirection: 'row',
        backgroundColor: 'transparent'
      },
      thumbnail: {
        width: 52,
        height: 36,
        marginRight: 8
      },
      title: {
        height: callout ? 12 : 14,
        maxWidth: 164,
        marginTop: 0,
      }
    }
  }

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          borderRadius: theme.roundness.sm,
        },
        thumbnail: {
          borderWidth: 0.5,
          borderRadius: theme.roundness.xs,
          borderColor: theme.colors.primarySand60,
          ...variants[variation].thumbnail
        },
        title: {
          position: 'relative',
          marginTop: theme.spacing.lg,
          color: '#A6A6A6',
          ...variants[variation].title
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
      style={variants[variation].wrapper as ViewStyle}
    >
      <View style={[
        styles.container,
        variants[variation].container as ViewStyle
      ]}>
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
      </View>
    </Pressable>
  )
}

export default TopicCard
