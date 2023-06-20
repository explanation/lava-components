import React, {Fragment, useMemo, useRef} from 'react'
import {Image, Pressable, StyleSheet, View, ViewStyle,} from 'react-native'
import Title from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'
import {getFormattedNumber, getTimeAgo, getVideoDuration,} from '../../utils/numbers'
import {LavaImage} from "../../atoms/LavaImage/LavaImage"

export type VideoCardVariation =
    | 'feed'
    | 'secrets'
    | 'related'
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
    onPress?: (event: any) => void
    onNext?: () => void
    showPlayButton?: boolean
    isVerified?: boolean
    style?: ViewStyle
    playable?: boolean
    videoComponent?: React.ReactNode
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
        isVerified = false,
        variation = 'feed',
        playable = false,
        videoComponent: renderVideoComponent = null
    } = props

    const theme = useTheme()

    const maxWidth = useMemo(() => {
        switch (variation) {
            case 'feed':
                return 303
            case 'secrets':
                return 278
            case 'related':
                return 178
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
                return 303
            case 'secrets':
                return 278
            case 'related':
                return 178
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
                return 170
            case 'secrets':
                return 156
            case 'related':
                return 100
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
                    flex:1,
                    height:thumbnailHeight
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
                    height: 12.38,
                    width: 33.61,
                    textAlign: 'center',
                    color: 'white',
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
                    width: variation === 'game-preview' ? 72 : 40,
                    height: variation === 'game-preview' ? 72 : 40,
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

    const handleNext = () => {
        if (onNext && typeof onNext === 'function') {
            onNext()
        }
    }

    return (
        <Pressable
            style={({pressed}) => [
                styles.container,
                props.style,
                {opacity: pressed ? 0.8 : 1},
            ]}
            onPress={onPress}
        >
            <View style={styles.thumbnailContainer}>
                {
                   <View style={{display: playable ? 'flex' : 'none'}}>
                    {renderVideoComponent}
                   </View>
                }
                    <View style={{display: !playable ? 'flex' : 'none'}}>
                        <LavaImage source={{uri: thumbnailUrl}} style={styles.thumbnail}/>
                    </View>

                {(variation === 'game-preview' ||
                    variation === 'game-preview-mini') || showPlayButton && (
                    <View style={styles.playIconContainer}>
                        <LavaImage source={require('./play.png')} style={styles.playIcon}/>
                    </View>
                )}

                {(variation === 'feed' || variation === 'secrets' || variation == 'related') && !showPlayButton &&
                    <Fragment>
                        <View style={styles.thumbnailOverlay}/>
                        {props.duration != undefined && (props.duration > 0) &&
                            <View style={styles.durationLabel}>
                                <Title variation="subtitle3" style={styles.durationText}>
                                    {getVideoDuration(props.duration)}
                                </Title>
                            </View>
                        }
                    </Fragment>
                }
            </View>

            {variation === 'game-preview' && (
                <Pressable
                    onPress={handleNext}
                    style={({pressed}) => [
                        styles.nextIconContainer,
                        {opacity: pressed ? 0.8 : 1},
                    ]}
                >
                    <Image source={require('./next.png')} style={styles.nextIcon}/>
                </Pressable>
            )}

            {(variation === 'feed' ||
                variation === 'secrets' ||
                variation === 'related' ||
                variation === 'game-thumbnail') && (
                <Fragment>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Title
                            numberOfLines={
                                variation === 'feed' ||
                                variation === 'game-thumbnail' ||
                                variation === 'secrets' ||
                                variation === 'related'
                                    ? 2 // this was 1 but temporarily changing to 2 until we have a better design fix
                                    : 2
                            }
                            variation="subtitle2"
                            style={{
                                flex: 1,
                                ...styles.title,
                                ...(variation === 'game-thumbnail' && styles.gameThumbnailTitle),
                            }}
                        >
                            {title}
                        </Title>

                        {isVerified &&
                        <Image
                            style={{width: 30, height: 30, marginTop: theme.spacing.md, marginStart: theme.spacing.md}}
                            resizeMode={'contain'}
                            source={require('./verified.png')} />
                        }
                    </View>

                    <Title
                        variation="subtitle3"
                        numberOfLines={1}
                        style={{
                            ...styles.metaData,
                            ...(variation === 'game-thumbnail' && styles.gameThumbnailTitle),
                        }}
                    >
                        {creatorName}{' '}
                        {props.views && props.views > 0 &&
                        `• ${getFormattedNumber(props.views).replace(' ', '')} views • `}
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

