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

export type VideoCardVariation = 'feed' | 'secret'

export interface VideoCardProps {
  thumbnailUrl: string
  /**
   * Video duration in seconds
   */
  duration: number
  title: string
  variation?: VideoCardVariation
  creatorName: string
  views: number
  uploadedOn: string
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
  const {
    thumbnailUrl,
    duration,
    title,
    creatorName,
    views,
    uploadedOn,
    variation = 'feed',
  } = props

  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          maxWidth: 214,
        },
        thumbnailContainer: {
          borderRadius: theme.roundness.xs,
          borderColor: theme.colors.primarySand60,
          borderWidth: 0.5,
          width: 214,
        },
        thumbnail: {
          width: 214,
          height: 120,
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
          height: 11,
          position: 'relative',
          marginTop: theme.spacing.lg,
        },
        metaData: {
          marginTop: theme.spacing.lg,
          color: theme.colors.primarySand60,
        },
      }),
    [],
  )

  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.thumbnailOverlay} />
        <View style={styles.durationLabel}>
          <Title variation="subtitle3" style={styles.durationText}>
            {getVideoDuration(duration)}
          </Title>
        </View>
      </View>

      <Title numberOfLines={1} variation="subtitle2" style={styles.title}>
        {title}
      </Title>

      <Title variation="subtitle3" numberOfLines={1} style={styles.metaData}>
        {creatorName} • {getFormattedNumber(views)} views •{' '}
        {getTimeAgo(new Date(uploadedOn))}
      </Title>
    </View>
  )
}

export default VideoCard
