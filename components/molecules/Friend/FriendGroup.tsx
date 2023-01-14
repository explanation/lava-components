import { useCallback, useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import Text from '../../atoms/Text/Text'
import useTheme from '../../hooks/useTheme'
import { FriendNetworkStatus } from './Friend'
import { getTimeAgo } from '../../utils/numbers'
import { intervalMapping } from '../../config/date'

export type FriendGroupNotificationType = 'chat' | 'video'

export interface FriendGroupItem {
  firstName: string
  imageUrl: string
  networkStatus: FriendNetworkStatus
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
  onAsidePress?: () => {}
}

type FriendCircleProps = Pick<FriendGroupItem, 'imageUrl' | 'networkStatus'> & {
  imageSize: number
  containerSize: number
  gap: number
}

const FriendCircle: React.FC<FriendCircleProps> = (props) => {
  const { imageUrl, networkStatus, imageSize, containerSize, gap } = props

  const theme = useTheme()

  const imageContainerBorderColor = useMemo(() => {
    return networkStatus === 'offline'
      ? theme.colors.primarySand40
      : theme.colors.tertiaryOnline
  }, [])

  const styles = useMemo(
    () =>
      StyleSheet.create({
        imageContainer: {
          height: containerSize + gap + 2,
          width: containerSize + gap + 2,
          borderRadius: containerSize,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.secondaryContainers,
          borderWidth: 2,
          borderColor: imageContainerBorderColor,
        },
        image: {
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize,
        },
      }),
    [],
  )
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  )
}

const FriendGroup: React.FC<FriendProps> = (props) => {
  const {
    friends = [],
    message,
    notificationSentOn,
    onAsidePress,
    notificationType,
    messageSeen,
  } = props
  const theme = useTheme()

  const [friend1, friend2] = friends

  const handleAsidePress = useCallback(() => {
    if (onAsidePress && typeof onAsidePress === 'function') {
      onAsidePress()
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
          right: 0,
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
          color: messageSeen
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
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <FriendCircle
          gap={2}
          imageSize={36}
          containerSize={40}
          imageUrl={friend1.imageUrl}
          networkStatus={friend1.networkStatus}
        />

        <View style={styles.friend2}>
          <FriendCircle
            gap={2}
            imageSize={24}
            containerSize={28}
            imageUrl={friend2.imageUrl}
            networkStatus={friend2.networkStatus}
          />
        </View>

        <Title variation="subtitle1" style={styles.remainingFriendsCount}>
          + {friends.length - 2}
        </Title>
      </View>

      <View style={{ marginRight: 'auto' }}>
        <Title
          variation="subtitle1"
          numberOfLines={2}
          style={{ width: notificationType ? 178 : 213 }}
        >
          {names}
        </Title>

        {message && (
          <View style={styles.messageContainer}>
            <Text>“</Text>
            <Title
              variation="subtitle2"
              numberOfLines={1}
              style={styles.message}
            >
              {message}
            </Title>
            <Text>”</Text>
          </View>
        )}
      </View>

      {notificationType && (
        <Text style={styles.notificationSentOn}>
          {getTimeAgo(
            new Date(!!notificationSentOn ? notificationSentOn : 0),
            intervalMapping,
          ).replace(' ago', '')}
        </Text>
      )}

      {notificationType && (
        <Button
          onPress={handleAsidePress}
          variation="gravity"
          roundness="circular"
          icon={
            <Image
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
              source={
                notificationType === 'chat'
                  ? require('./assets/chat.png')
                  : require('./assets/VideoCall.png')
              }
            />
          }
        />
      )}
    </View>
  )
}

export default FriendGroup
