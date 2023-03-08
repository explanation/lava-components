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

export type VideoCardVariation =
  | 'feed'
  | 'secrets'
  | 'game-preview'
  | 'game-preview-mini'
  | 'playing'
  | 'game-thumbnail'
  | 'minimized'

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
  showPlayButton?: boolean
  style?: ViewStyle
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
  const {
    thumbnailUrl,
    title,
    creatorName,
    uploadedOn,
    onPress,
    onNext,
    showPlayButton = false,
    variation = 'feed',
  } = props

  const theme = useTheme()

  const maxWidth = useMemo(() => {
    switch (variation) {
      case 'feed':
        return 214
      case 'secrets':
        return 278
      case 'game-preview':
        return 495
      case 'game-preview-mini':
        return 160
      case 'playing':
        return 570
      case 'minimized':
        return 80
      case 'game-thumbnail':
        return 168
      default:
        return 0
    }
  }, [])

  const thumbnailWidth = useMemo(() => {
    switch (variation) {
      case 'feed':
        return 214
      case 'secrets':
        return 278
      case 'game-preview':
        return 481
      case 'game-preview-mini':
        return 160
      case 'playing':
        return 570
      case 'minimized':
        return 80
      case 'game-thumbnail':
        return 168
      default:
        return 0
    }
  }, [])

  const thumbnailHeight = useMemo(() => {
    switch (variation) {
      case 'feed':
        return 120
      case 'secrets':
        return 156
      case 'game-preview':
        return 270
      case 'game-preview-mini':
        return 90
      case 'playing':
        return 320
      case 'minimized':
        return 45
      case 'game-thumbnail':
        return 94
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
          width: maxWidth,
          height: thumbnailHeight,
          zIndex: 1,
          backgroundColor: theme.colors.secondaryBk,
          opacity: 0.15,
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
          position: 'relative',
          marginTop: theme.spacing.lg,
        },
        gameThumbnailTitle: {
          height: 10,
          fontSize: 9,
          lineHeight: 11.7,
          marginTop: theme.spacing.sm,
        },
        gameThumbnailMetadata: {
          fontSize: 9,
          lineHeight: 11.7,
        },
        metaData: {
          marginTop: 2,
          color: theme.colors.primarySand60,
        },
        playIconContainer: {
          height: '100%',
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        },
        playIcon: {
          borderRadius: 72,
          width: variation === 'game-preview' ? 72 : 30,
          height: variation === 'game-preview' ? 72 : 30,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        },
        nextIconContainer: {
          right: 0,
          height: '100%',
          justifyContent: 'center',
          position: 'absolute',
        },
        nextIcon: {
          width: 28,
          height: 28,
          borderRadius: 28,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
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
    <Pressable
      style={({ pressed }) => [
        styles.container,
        props.style,
        { opacity: pressed ? 0.8 : 1 },
      ]}
      onPress={handlePress}
    >
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />

        {(variation === 'game-preview' ||
          variation === 'game-preview-mini') || showPlayButton && (
          <View style={styles.playIconContainer}>
            <Image source={require('./play.png')} style={styles.playIcon} />
          </View>
        )}

        {(variation === 'feed' || variation === 'secrets') && (
          <Fragment>
            <View style={styles.thumbnailOverlay} />
            {props.duration && (
              <View style={styles.durationLabel}>
                <Title variation="subtitle3" style={styles.durationText}>
                  {getVideoDuration(props.duration)}
                </Title>
              </View>
            )}
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
          <Image source={require('./next.png')} style={styles.nextIcon} />
        </Pressable>
      )}

      {(variation === 'feed' ||
        variation === 'secrets' ||
        variation === 'game-thumbnail') && (
        <Fragment>
          <Title
            numberOfLines={
              variation === 'feed' ||
              variation === 'game-thumbnail' ||
              variation === 'secrets'
                ? 1
                : 2
            }
            variation="subtitle2"
            style={{
              ...styles.title,
              ...(variation === 'game-thumbnail' && styles.gameThumbnailTitle),
            }}
          >
            {title}
          </Title>

          <Title
            variation="subtitle3"
            numberOfLines={1}
            style={{
              ...styles.metaData,
              ...(variation === 'game-thumbnail' && styles.gameThumbnailTitle),
            }}
          >
            {creatorName}{' '}
            {props.views &&
              `• ${getFormattedNumber(props.views).replace(' ', '')} views`}
            {uploadedOn &&
              uploadedOn.length > 0 &&
              getTimeAgo(new Date(uploadedOn!))}
          </Title>
        </Fragment>
      )}
    </Pressable>
  )
}

export default VideoCard
