import React, {Fragment, useMemo} from 'react'
import {
    View,
    StyleSheet,
    Pressable,
    ViewStyle,
    TextStyle,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../atoms/Title/Title'
import Label from '../../atoms/Label/Label'
import Text from '../../atoms/Text/Text'
import useTheme from '../../hooks/useTheme'
import LikeStat from '../LikeStat/LikeStat'
import {LavaImage} from "../../atoms/LavaImage/LavaImage"

export interface GameCardProps {
    /** Game's thumbnail url
     *
     * Example: https://domain.com/images/image.png
     */
    imageUrl?: string
    /** Game's name/title
     *
     * Example: PHILIPS Tower Defense Simulator
     */
    name: string
    /** Number of likes by friends
     *
     * Example: 10
     */
    likesByFriends?: number
    /** Likes on the platform:
     *
     * Example: 7200000
     */
    likesOnPlatform?: number
    /** New Notifications Count:
     *
     * Example: 5
     * Default: 0
     */
    notificationsCount?: number
    /** New Notification label
     *
     * Example: 'Codes
     * Default: undefined
     */
    notificationLabel?: string
    /** Callout
     *
     * Used in mini version
     */
    callout?: string
    bottomMessage?: string
    /** on Tap/Click/Press function */
    onPress: () => void
    /** Card Variation
     *
     * Example: icon
     * Default: full
     */
    variation?: 'full' | 'icon' | 'mini'
    /**
     * Container Styles, Could be used for apply margin
     */
    containerStyle?: ViewStyle
    /**
     * Title/Name Styles, Could be used changing colors
     */
    titleStyle?: TextStyle
}

const GameCard: React.FC<GameCardProps> = (props) => {
    const {
        imageUrl,
        name,
        likesByFriends,
        likesOnPlatform,
        notificationsCount = 0,
        notificationLabel,
        callout,
        bottomMessage,
        onPress,
        variation = 'full',
        containerStyle = {},
        titleStyle = {},
    } = props
    const theme = useTheme()

    const styles = useMemo(
        () =>
            StyleSheet.create({
                wrapper: {
                    ...containerStyle,
                },
                container: {
                    position: 'relative',
                    padding: theme.spacing.lg,
                    borderRadius: theme.roundness.sm,
                    backgroundColor: theme.colors.secondaryContainers,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                },
                imageContainer: {
                    paddingHorizontal: theme.spacing.lg,
                    paddingTop: theme.spacing.lg,
                },
                footerContainer: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: theme.spacing.xl,
                },
                bottomMessageContainer: {
                    height: 26,
                    marginTop: theme.spacing.sm,
                },
                image: {
                    height: 120,
                    width: 120,
                    borderRadius: theme.roundness.xs,
                    borderWidth: 0.5,
                    marginRight: 8,
                    borderColor: theme.colors.primarySand60,
                },
                minImage: {
                    height: 100,
                    width: 100,
                    borderRadius: theme.roundness.md,
                    borderWidth: 0.5,
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                iconImage: {
                    width: 38,
                    height: 38,
                    borderRadius: theme.roundness.xs,
                    borderWidth: 0.5,
                    marginRight: 8,
                    borderColor: theme.colors.primarySand60,
                },
                iconImageWithCallout: {
                    width: 32,
                    height: 32,
                    marginRight: 10,
                    borderRadius: theme.roundness.xs,
                    borderWidth: 1,
                    borderColor: theme.colors.primarySand60,
                },
                name: {
                    width: 120,
                    height: 32,
                    color: theme.colors.primarySand,
                    marginTop: theme.spacing.xl,
                    ...titleStyle,
                },
                miniName:{
                    width:100,
                    color: 'rgba(166, 166, 166, 1)',
                    marginTop: theme.spacing.md,
                    ...titleStyle,
                },
                notificationLabelContainer: {
                    position: 'absolute',
                    top: 1,
                    right: 1,
                },
                gradient: {
                    top:0,
                    left:0,
                    height: 102,
                    width: 102,
                    position: 'absolute',
                    zIndex: 14,
                    borderRadius: theme.roundness.md,
                    transform: [{rotate:'90deg'}]
                },
                miniContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
                }
            }),
        [theme],
    )

    let content = <Fragment/>

    if (variation === 'full') {
        content = (
            <View style={styles.container}>
                {/* Card Main */}
                <View style={styles.imageContainer}>
                    <LavaImage source={{uri: imageUrl}} style={styles.image}/>
                    <Title numberOfLines={2} variation="subtitle2" style={styles.name}>
                        {name}
                    </Title>
                </View>

                {/* Card Footer */}
                {likesOnPlatform || likesOnPlatform && <View style={styles.footerContainer}>
                    <LikeStat likes={likesByFriends!} suffix="friends"/>
                    <LikeStat likes={likesOnPlatform!}/>
                </View>}

                {bottomMessage && <View style={styles.bottomMessageContainer}>
                    {bottomMessage.trim().length > 0 &&
                    <View style={{
                        height: 0.5,
                        marginVertical: theme.spacing.md,
                        backgroundColor: theme.colors.primarySand,
                        opacity: 0.1
                    }}/>}
                    <Title style={{color: theme.colors.primarySand60}} variation={'subtitle3'}>{bottomMessage}</Title>
                </View>}

                {notificationsCount > 0 && (
                    <View style={styles.notificationLabelContainer}>
                        <Label count={notificationsCount}/>
                    </View>
                )}
                {notificationLabel && (
                    <View style={styles.notificationLabelContainer}>
                        <Label text={notificationLabel}/>
                    </View>
                )}
            </View>
        )
    } else if (variation === 'mini') {
        content = (
            <View>
                <LinearGradient 
                    colors={['#0F1017', 'rgba(0, 0, 0, 0)']}
                    start={{ x: 0.1, y: 0.87 }}
                    locations={[0.0277, 0.5961]}
                    style={styles.gradient}
                />
                <LavaImage source={{uri: imageUrl}} style={styles.minImage}/>
                <Title numberOfLines={2} variation="subtitle3" style={styles.miniName}>{name}</Title>
            </View>
        )
    } else if (variation === 'icon') {
        if (callout) {
            content = (
                <View style={styles.miniContainer}>
                    <LavaImage
                        source={{uri: imageUrl}}
                        style={styles.iconImageWithCallout}
                    />
                    <View>
                        <Title variation="subtitle1">{name}</Title>
                        <Text>{callout}</Text>
                    </View>
                </View>
            )
        } else {
            content = (
                <View style={styles.miniContainer}>
                    <LavaImage source={{uri: imageUrl}} style={styles.iconImage}/>
                    <Title style={{flexShrink: 1}} variation="subtitle1">{name}</Title>
                </View>
            )
        }
    } else {
        console.warn(
            'Invalid Card variation, Should be one of `full` | `icon` | `mini`',
        )
        return <View/>
    }

    const handlePress = () => {
        if (onPress && typeof onPress === 'function') {
            onPress()
        }
    }

    return (
        <Pressable
            onPress={handlePress}
            style={({pressed}) => [styles.wrapper, {opacity: pressed ? 0.8 : 1}]}
        >
            {content}
        </Pressable>
    )
}

export default GameCard
