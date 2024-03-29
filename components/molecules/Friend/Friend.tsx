import { Fragment } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'
import Title from '../../atoms/Title/Title'
import { intervalMapping } from '../../config/date'
import useTheme from '../../hooks/useTheme'
import { getTimeAgo } from '../../utils/numbers'
import Avatar from "../../atoms/Avatar/Avatar"

export type FriendNetworkStatus = 'online' | 'offline'
export type ActivityType = 'playing' | 'watching' | 'talking'
export type NotificationType =
  | 'new-friend-request'
  | 'chat'
  | 'video'
  | 'new-friend-joined'

export interface FriendProps {
  imageUrl?: string
  name: string
  message?: string
  status?: FriendNetworkStatus
  inRoblox?: boolean
  messageSeen?: boolean
  /**
   * ISO Date format
   * eg: 2022-12-08T10:41:29.921Z
   */
  lastSeen?: string
  lastSeenLabel?: string
  onCall?: boolean
  friendRequestSent?: boolean
  /**
   * ISO Date format
   * eg: 2022-12-08T10:41:29.921Z
   */
  notificationType?: NotificationType
  /**
   * ISO Date format
   * eg: 2022-12-08T10:41:29.921Z
   */
  notificationSentOn?: string
  activityImageUrl?: string
  activityType?: ActivityType
  joinFriend?: boolean
  friendInLava?: boolean
  /**
   * Invoked when the user presses the middle section of the component
   */
  onPress?: () => void
  onProfilePress?: () => void
  onAsidePress?: () => void
  onLongPress?: () => void
  /**
   * Used for "New Friend Request" variation
   */
  onIgnorePress?: () => void
  /**
   * Used for "New Friend Request" variation
   */
  onAcceptPress?: () => void
}

const Friend: React.FC<FriendProps> = (props) => {
  const {
    imageUrl,
    name,
    message,
    status = 'online',
    inRoblox: isInRoblox = false,
    friendRequestSent = false,
    notificationType,
    notificationSentOn,
    messageSeen,
    lastSeen,
    lastSeenLabel,
    onCall,
    activityImageUrl,
    friendInLava = true,
    activityType,
    joinFriend = undefined,
    onPress,
    onProfilePress,
    onAsidePress,
    onLongPress,
    onIgnorePress,
    onAcceptPress,
  } = props
  const theme = useTheme()

  const imageContainerBorderColor = () => {
    let borderColor = null
    if (friendRequestSent || notificationType === 'new-friend-request') {
      borderColor = theme.colors.primarySand
    } else if (status === 'offline') {
      borderColor = theme.colors.primarySand40
    } else {
      borderColor = theme.colors.tertiaryOnline
    }
    return borderColor
  }

  const nameVisible = () => {
    return notificationType === 'new-friend-request' ? false : true
  }

  const dividerVisible = () => {
    return !friendRequestSent && activityImageUrl && !notificationType
  }

  const statusVisible = () => {
    return (
      notificationType !== 'chat' &&
      notificationType !== 'video' &&
      notificationType !== 'new-friend-joined'
    )
  }

  const handleAsidePress = () => {
    if (onAsidePress && typeof onAsidePress === 'function') {
      onAsidePress()
    }
  }

  const handleIgnorePress = () => {
    if (onIgnorePress && typeof onIgnorePress === 'function') {
      onIgnorePress()
    }
  }

  const handleAcceptPress = () => {
    if (onAcceptPress && typeof onAcceptPress === 'function') {
      onAcceptPress()
    }
  }

  const handleProfilePress = () => {
    if (onProfilePress && typeof onProfilePress === 'function') {
      onProfilePress()
    }
  }

  const handlePress = () => {
    if (onPress && typeof onPress === 'function') {
      onPress()
    }
  }

  const handleLongPress = () => {
    if (onLongPress && typeof onLongPress === 'function') {
      onLongPress()
    }
  }

  const badgeIcon = () => {
    let image = null
    if (friendRequestSent || notificationType === 'new-friend-request') {
      image = require('./assets/FriendRequest.png')
    } else if (notificationType === 'chat') {
      image = require('./assets/chat-bubble.png')
    } else if (notificationType === 'video') {
      image = require('./assets/video-bubble.png')
    } else if (friendInLava) {
      image = require('./assets/LBadge.png')
    }
    return image
  }

  const styles =
    () =>
      StyleSheet.create({
        wrapper: {
          paddingVertical: notificationType ? theme.spacing.xxxl : undefined,
        },
        container: {
          paddingVertical: theme.spacing.xl,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative'
        },
        imageWrapper: {
          paddingRight: 5,
          marginRight: notificationType === 'new-friend-request' ? 9 : 5,
        },
        imageContainer: {
          height:
            58 -
            (friendRequestSent || notificationType === 'new-friend-request'
              ? 3
              : 0),
          width:
            58 -
            (friendRequestSent || notificationType === 'new-friend-request'
              ? 3
              : 0),
          borderRadius: 52,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.secondaryContainers,
          borderWidth:
            friendRequestSent || notificationType === 'new-friend-request'
              ? 0.5
              : 3,
          borderColor: imageContainerBorderColor(),
        },
        image: {
          width: 44,
          height: 44,
          borderRadius: 44,
        },
        lBadge: {
          width: 23,
          height: 23,
          position: 'absolute',
          right: 0,
          bottom: 0,
        },
        name: {
          color: theme.colors.primarySand,
          position: 'relative',
          height:
            notificationType === 'video' ||
            notificationType === 'new-friend-joined'
              ? undefined
              : 14,
          maxWidth: 175,
        },
        detailsContainer: {
          paddingVertical: 3,
          justifyContent: 'center',
          marginRight: !dividerVisible ? 20 : undefined,
          flex: 1,
        },
        statusContainer: {
          flexDirection: 'row',
          marginTop: nameVisible() ? 5 : 0,
        },
        status: {
          maxWidth: 170,
          color:
            status === 'online'
              ? theme.colors.primarySand
              : theme.colors.primarySand60,
        },
        robloxImage: {
          marginLeft: theme.spacing.md,
          width: 14,
          height: 14,
        },
        messageContainer: {
          marginTop: onCall ? theme.spacing.md : 8,
          flexDirection: 'row',
          alignItems: 'center',
          width: (activityImageUrl || joinFriend) ? 127 : undefined,
          maxWidth: 206,
          minWidth: 127,
          height: 12,
        },
        message: {
          color: messageSeen
            ? theme.colors.primarySand60
            : theme.colors.primarySand,
        },
        onCall: {
          color: theme.colors.primarySand,
          marginRight: theme.spacing.md,
          lineHeight: 14,
        },
        videoCallImage: {
          width: 13.62,
          height: 8.53,
          marginBottom: theme.spacing.xs,
        },
        divider: {
          width: 0.5,
          height: '100%',
          backgroundColor: theme.colors.primarySand40,
          marginHorizontal: 12,
        },
        currentActivityContainer: {
          height: activityType === 'playing' ? 66 : 42,
          width: 66,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 2,
          borderColor:
            status === 'online'
              ? theme.colors.tertiaryOnline
              : 'transparent',
        },
        currentActivityImage: {
          height: activityType === 'playing' ? 56 : 32,
          width: 56,
          borderWidth: 0.5,
          borderColor: theme.colors.primarySand40,
          borderRadius: theme.roundness.sm,
        },
        playImage: {
          position: 'absolute',
          width: 24,
          height: 24,
        },
        resendImage: {
          width: 42,
          height: 42,
        },
        footerContainer: {
          marginTop: theme.spacing.xxl,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        notificationSentOn: {
          height: 12,
          position: 'absolute',
          top: theme.spacing.sm,
          right: theme.spacing.xs,
          color: theme.colors.primarySand60,
        },
      })

  // Status Content
  let statusContent = ''
  let statusContentDetail = undefined
  if (friendRequestSent) {
    statusContent = 'Friend Request Sent'
  } else if (notificationType === 'new-friend-request') {
    statusContent = `${name} sent a friend request`
  } else if (status === 'online') {
    statusContent = 'Online'
    if (activityType === 'playing') statusContentDetail = ', Playing'
    if (activityType === 'watching') statusContentDetail = ', Watching'
    if (activityType === 'talking') statusContentDetail = ', Talking'
  } else {
    // TODO: Fix with typescript
    if (__DEV__ && !lastSeen && !lastSeenLabel) {
      console.log(
        'In the Friend.tsx lava-component, you set `status` to offline but `lastSeen` was undefined. Maybe this is an old user missing data.',
      )
    }
    if (lastSeen) {
        statusContent = getTimeAgo(new Date(!!lastSeen ? lastSeen : 0))
    } else if (lastSeenLabel) {
        statusContent = lastSeenLabel
    }
  }

  // Message Content
  let messageContent = null
  if (onCall) {
    messageContent = (
      <Fragment>
        <Title variation="subtitle2" numberOfLines={1} style={styles().onCall}>
          In a Call
        </Title>
        <Image
          source={require('./assets/VideoCall.png')}
          style={styles().videoCallImage}
        />
      </Fragment>
    )
  } else if (message) {
    messageContent = (
      <Fragment>
        <Text>“</Text>
        <Title variation="subtitle2" numberOfLines={1} style={styles().message}>
          {message}
        </Title>
        <Text>”</Text>
      </Fragment>
    )
  }

  let asideContent = <Fragment />

  if (friendRequestSent && onAsidePress) {
    asideContent = (
      <View>
        <Image
          source={require('./assets/Resend.png')}
          style={styles().resendImage}
        />
      </View>
    )
  } else if (notificationType === 'chat') {
    asideContent = (
      <Button
        onPress={handleAsidePress}
        variation="gravity"
        roundness="circular"
        icon={
          <Image
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
            source={require('./assets/chat.png')}
          />
        }
      />
    )
  } else if (notificationType === 'video') {
    asideContent = (
      <Button
        onPress={handleAsidePress}
        variation="gravity"
        roundness="circular"
        icon={
          <Image
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
            source={require('./assets/VideoCall.png')}
          />
        }
      />
    )
  } else if (notificationType === 'new-friend-joined') {
    asideContent = (
      <Button
        onPress={handleAsidePress}
        variation="gravity"
        roundness="circular"
        icon={
          <View
            style={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 18, marginTop: 2 }}>👋</Text>
          </View>
        }
      />
    )
  } else if (notificationType === 'new-friend-request') {
    asideContent = <Fragment />
  } else if (activityImageUrl) {
    asideContent = (
      <Fragment>
        <View style={styles().currentActivityContainer}>
          <Image
            source={{ uri: activityImageUrl }}
            style={styles().currentActivityImage}
          />
          {activityType === 'watching' && (
            <Image
              source={require('./assets/play.png')}
              style={styles().playImage}
            />
          )}
        </View>
      </Fragment>
    )
  } else if (joinFriend) {
      asideContent = (
          <View style={[styles().currentActivityContainer, {borderWidth: 0}]}>
              <Button
                  style={{backgroundColor: theme.colors.tertiaryOnline}}
                  onPress={handleAsidePress}
                  roundness={'flat'}
                  variation={'gravity'}
              >Join</Button>
          </View>
      )
  }

    let nameContent = name
  if (notificationType === 'video') {
    nameContent = `You missed a call from ${name}. Call back!`
  } else if (notificationType === 'new-friend-joined') {
    nameContent = `${name} has started using Lava.\nSay Hi!`
  }

  return (
    <View style={styles().wrapper}>
      <View style={styles().container}>
        <Pressable
          onPress={handleProfilePress}
          onLongPress={handleLongPress}
          style={({ pressed }) => [
            styles().imageWrapper,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <View style={[styles().imageContainer]}>
            <Avatar
              username={name}
              avatarUrl={imageUrl}
              variant='primaryLarge'
              />
          </View>

          {badgeIcon && <Image source={badgeIcon()} style={styles().lBadge} />}
        </Pressable>

        <Pressable
          onPress={handlePress}
          onLongPress={handleLongPress}
          style={({ pressed }) => [
            styles().detailsContainer,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          {nameVisible() && (
            <Title numberOfLines={3} variation="subtitle1" style={styles().name}>
              {nameContent}
            </Title>
          )}

          {statusVisible() && (
            <View style={styles().statusContainer}>
              <Title
                variation={
                  notificationType === 'new-friend-request'
                    ? 'subtitle1'
                    : 'subtitle2'
                }
                style={styles().status}
              >
                {statusContent}
              </Title>
              {isInRoblox && (statusContentDetail == undefined || statusContentDetail == ', Playing') &&
                <Image
                  source={require('./assets/Roblox.png')}
                  style={styles().robloxImage}
                />}
              {statusContentDetail &&
              <Title
                variation={'subtitle2'}
                style={styles().status}
              >
                {statusContentDetail}
              </Title>}
            </View>
          )}

          {messageContent && (
            <View style={styles().messageContainer}>{messageContent}</View>
          )}
        </Pressable>

        {dividerVisible() && <View style={styles().divider} />}

        <Pressable
          onPress={handleAsidePress}
          onLongPress={handleLongPress}
          style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
        >
          {asideContent}
        </Pressable>
      </View>

      {notificationType === 'new-friend-request' && (
        <View style={styles().footerContainer}>
          <Button
            onPress={handleIgnorePress}
            variation="tertiary"
            iconPosition="right"
            icon={
              <Image
                resizeMode="contain"
                style={{ width: 10, height: 10 }}
                source={require('./assets/close.png')}
              />
            }
          >
            Ignore
          </Button>

          <Button
            onPress={handleAcceptPress}
            variation="gravity"
            iconPosition="right"
            icon={
              <Image
                resizeMode="contain"
                style={{ width: 12, height: 12 }}
                source={require('./assets/tick.png')}
              />
            }
          >
            Accept
          </Button>
        </View>
      )}

      {notificationType && (
        <Title variation="subtitle3" style={styles().notificationSentOn}>
          {getTimeAgo(
            new Date(!!notificationSentOn ? notificationSentOn : 0),
            intervalMapping,
          ).replace(' ago', '')}
        </Title>
      )}
    </View>
  )
}

export default Friend
