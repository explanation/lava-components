import React, { Fragment, useMemo } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import Title from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'
import {
  getFormattedNumber,
  getTimeAgo,
  getVideoDuration,
} from '../../utils/numbers'

export type VideoCardVariation = 'feed' | 'secrets' | 'game-preview'

export interface VideoCardProps {
  thumbnailUrl: string
  /**
   * Video duration in seconds
   */
  duration?: number
  title?: string
  variation?: VideoCardVariation
  creatorName?: string
  views?: number
  uploadedOn?: string
  onPress?: () => void
  onNext?: () => void
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
  const {
    thumbnailUrl,
    duration = 0,
    title,
    creatorName,
    views = 0,
    uploadedOn,
    onPress,
    onNext,
    variation = 'feed',
  } = props

  const theme = useTheme()

  const maxWidth = useMemo(() => {
    switch (variation) {
      case 'feed':
      case 'secrets':
        return 214
      case 'game-preview':
        return 495
      default:
        return 0
    }
  }, [])

  const thumbnailWidth = useMemo(() => {
    switch (variation) {
      case 'feed':
      case 'secrets':
        return 214
      case 'game-preview':
        return 481
      default:
        return 0
    }
  }, [])

  const thumbnailHeight = useMemo(() => {
    switch (variation) {
      case 'feed':
      case 'secrets':
        return 120
      case 'game-preview':
        return 270
      default:
        return 0
    }
  }, [])

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: maxWidth,
        },
        thumbnailContainer: {
          width: '100%',
        },
        thumbnail: {
          borderRadius: theme.roundness.xs,
          borderColor: theme.colors.primarySand60,
          borderWidth: 0.5,
          width: thumbnailWidth,
          height: thumbnailHeight,
        },
        thumbnailOverlay: {
          position: 'absolute',
          width: 214,
          height: 120,
          zIndex: 1,
          backgroundColor: theme.colors.secondaryBk + '26',
        },
        durationLabel: {
          width: 40,
          height: 16,
          backgroundColor: theme.colors.secondaryBk,
          position: 'absolute',
          bottom: theme.spacing.sm,
          right: theme.spacing.sm,
          borderRadius: theme.roundness.xs,
          justifyContent: 'center',
          alignItems: 'center',
        },
        durationText: {
          height: 10.38,
          width: 33.61,
          textAlign: 'center',
        },
        title: {
          height: variation === 'feed' ? 14 : 30,
          position: 'relative',
          marginTop: theme.spacing.lg,
        },
        metaData: {
          marginTop: theme.spacing.lg - 3,
          color: theme.colors.primarySand60,
        },
        playIconContainer: {
          top: '50%',
          left: '50%',
          height: '100%',
          position: 'absolute',
        },
        playIcon: {
          width: 72,
          height: 72,
          transform: 'translate(-50%, -50%)' as any,
          // boxShadow: '-1px 0px 4px rgba(0, 0, 0, 0.78)' as any,
        },
        nextIconContainer: {
          right: 0,
          top: '50%',
          height: '100%',
          position: 'absolute',
        },
        nextIcon: {
          width: 28,
          height: 28,
          transform: 'translateY(-50%)' as any,
        },
      }),
    [],
  )

  const handlePress = () => {
    if (onPress && typeof onPress === 'function') {
      onPress()
    }
  }

  const handleNext = () => {
    if (onNext && typeof onNext === 'function') {
      onNext()
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />

        {variation === 'game-preview' && (
          // <View style={styles.iconContainer}>
          <Pressable
            onPress={handlePress}
            style={({ pressed }) => [
              styles.playIconContainer,
              { opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Image source={require('./play@3x.png')} style={styles.playIcon} />
          </Pressable>
          // </View>
        )}

        {(variation === 'feed' || variation === 'secrets') && (
          <Fragment>
            <View style={styles.thumbnailOverlay} />
            <View style={styles.durationLabel}>
              <Title variation="subtitle3" style={styles.durationText}>
                {getVideoDuration(duration!)}
              </Title>
            </View>
          </Fragment>
        )}
      </View>

      {variation === 'game-preview' && (
        <Pressable
          onPress={handleNext}
          style={({ pressed }) => [
            styles.nextIconContainer,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Image source={require('./next@3x.png')} style={styles.nextIcon} />
        </Pressable>
      )}

      {(variation === 'feed' || variation === 'secrets') && (
        <Fragment>
          <Title
            numberOfLines={variation === 'feed' ? 1 : 2}
            variation="subtitle2"
            style={styles.title}
          >
            {title}
          </Title>

          <Title
            variation="subtitle3"
            numberOfLines={1}
            style={styles.metaData}
          >
            {creatorName} • {getFormattedNumber(views).replace(' ', '')} views •{' '}
            {getTimeAgo(new Date(uploadedOn!))}
          </Title>
        </Fragment>
      )}
    </View>
  )
}

export default VideoCard
