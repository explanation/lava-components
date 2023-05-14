import {useCallback, useMemo} from 'react'
import {Image, Pressable, StyleSheet, View} from 'react-native'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import Text from '../../atoms/Text/Text'
import useTheme from '../../hooks/useTheme'
import {FriendNetworkStatus} from './Friend'
import {getTimeAgo} from '../../utils/numbers'
import {intervalMapping} from '../../config/date'

export type FriendGroupNotificationType = 'chat' | 'video'

export interface FriendGroupItem {
    firstName: string
    imageUrl?: string
    status: FriendNetworkStatus
    onPress?: () => void
}

export interface FriendProps {
    friends: FriendGroupItem[]
    message?: string
    messageSeen?: boolean
    notificationType?: FriendGroupNotificationType
    /**
     * ISO Date format
     * eg: 2022-12-08T10:41:29.921Z
     */
    notificationSentOn?: string
    onAsidePress?: () => void
    onPress?: () => void
    showNames?: boolean
}

type FriendCircleProps = Pick<FriendGroupItem, 'imageUrl' | 'status'> & {
    imageSize: number
    containerSize: number
    gap: number
    onPress?: () => void
}

export const FriendCircle: React.FC<FriendCircleProps> = (props) => {

    const theme = useTheme()

    const imageContainerBorderColor = useMemo(() => {
        return props.status === 'offline'
            ? theme.colors.primarySand40
            : theme.colors.tertiaryOnline
    }, [])

    const styles = useMemo(
        () =>
            StyleSheet.create({
                imageContainer: {
                    height: props.containerSize + props.gap + 2,
                    width: props.containerSize + props.gap + 2,
                    borderRadius: props.containerSize,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.colors.secondaryContainers,
                    borderWidth: 2,
                    borderColor: imageContainerBorderColor,
                },
                image: {
                    width: props.imageSize,
                    height: props.imageSize,
                    borderRadius: props.imageSize,
                },
            }),
        [],
    )
    return (
       <Pressable onPress={props.onPress}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: props.imageUrl}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
       </Pressable>
    )
}

const FriendGroup: React.FC<FriendProps> = ({friends = [], showNames = true, ...props}) => {
    const theme = useTheme()

    const [friend1, friend2] = friends

    const handleAsidePress = useCallback(() => {
        if (props.onAsidePress && typeof props.onAsidePress === 'function') {
            props.onAsidePress()
        }
    }, [])

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                    paddingVertical: theme.spacing.xl,
                    maxWidth: 290,
                },
                imageWrapper: {
                    alignItems: 'center',
                    paddingRight: theme.spacing.xxxl,
                },
                friend2: {
                    marginTop: -7,
                    backgroundColor: theme.colors.secondaryBk,
                    width: 36,
                    height: 36,
                    borderRadius: 36,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                remainingFriendsCount: {
                    position: 'absolute',
                    right: 1,
                    bottom: 0,
                },
                messageContainer: {
                    marginTop: theme.spacing.xxl,
                    flexDirection: 'row',
                    alignItems: 'center',
                    minWidth: 127,
                    height: 12,
                },
                message: {
                    color: props.messageSeen
                        ? theme.colors.primarySand60
                        : theme.colors.primarySand,
                },
                notificationSentOn: {
                    height: 12,
                    position: 'absolute',
                    top: theme.spacing.sm,
                    right: theme.spacing.xs,
                    color: theme.colors.primarySand60,
                },
            }),
        [],
    )

    const names = useMemo(
        () => friends.map((friend) => friend.firstName).join(', '),
        [],
    )

    return (
        <Pressable
            onPress={props.onPress}
            style={({pressed}) => [
                styles.container,
                {opacity: pressed ? 0.8 : 1},
            ]}
        >
            <View style={styles.imageWrapper}>
                <FriendCircle
                    gap={2}
                    imageSize={36}
                    containerSize={40}
                    imageUrl={friend1.imageUrl}
                    status={friend1.status}
                    onPress={friend1.onPress}
                />

                <View style={styles.friend2}>
                    <FriendCircle
                        gap={2}
                        imageSize={24}
                        containerSize={28}
                        imageUrl={friend2.imageUrl}
                        status={friend2.status}
                    />
                </View>

                {(friends.length - 2 > 0) && <Title variation="subtitle1" style={styles.remainingFriendsCount}>
                    + {friends.length - 2}
                </Title>}
            </View>

            <View style={{marginRight: 'auto'}}>
                {showNames && <Title
                    variation="subtitle1"
                    numberOfLines={2}
                    style={{width: props.notificationType ? 178 : 213}}
                >
                    {names}
                </Title>}

                {props.message && (
                    <View style={styles.messageContainer}>
                        <Text>“</Text>
                        <Title
                            variation="subtitle2"
                            numberOfLines={1}
                            style={styles.message}
                        >
                            {props.message}
                        </Title>
                        <Text>”</Text>
                    </View>
                )}
            </View>

            {props.notificationType && (
                <Title variation="subtitle3" style={styles.notificationSentOn}>
                    {getTimeAgo(
                        new Date(!!props.notificationSentOn ? props.notificationSentOn : 0),
                        intervalMapping,
                    ).replace(' ago', '')}
                </Title>
            )}

            {props.notificationType && (
                <Button
                    onPress={handleAsidePress}
                    variation="gravity"
                    roundness="circular"
                    icon={
                        <Image
                            resizeMode="contain"
                            style={{width: 20, height: 20}}
                            source={
                                props.notificationType === 'chat'
                                    ? require('./assets/chat.png')
                                    : require('./assets/VideoCall.png')
                            }
                        />
                    }
                />
            )}
        </Pressable>
    )
}

export default FriendGroup
