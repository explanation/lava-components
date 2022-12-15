import { Fragment, useCallback, useMemo } from 'react'
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native'
import Text from '../../atoms/Text/Text'
import Title from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'
import { getTimeAgo } from '../../utils/numbers'

export interface FriendProps {
  imageUrl: string
  name: string
  message?: string
  networkStatus?: 'online' | 'offline'
  playing?: boolean
  messageSeen?: boolean
  /**
   * ISO Date format
   * eg: 2022-12-08T10:41:29.921Z
   */
  lastSeen?: string
  onCall?: boolean
  friendRequestSent?: boolean
  lastPlayedGameUrl?: string
  friendInLava?: boolean
  newFriendRequest?: boolean
  onAsidePress?: () => void
}

const Friend: React.FC<FriendProps> = (props) => {
  const {
    imageUrl,
    name,
    message,
    networkStatus = 'online',
    playing = false,
    friendRequestSent = false,
    messageSeen,
    lastSeen,
    onCall,
    onAsidePress,
    lastPlayedGameUrl,
    friendInLava = true,
  } = props
  const theme = useTheme()

  const imageContainerBorderColor = useMemo(() => {
    let borderColor = null
    if (friendRequestSent) {
      borderColor = theme.colors.primarySand
    } else if (networkStatus === 'offline') {
      borderColor = theme.colors.primarySand40
    } else {
      borderColor = theme.colors.tertiaryOnline
    }
    return borderColor
  }, [])

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          paddingVertical: theme.spacing.xxl,
          // backgroundColor: 'blue',
        },
        imageWrapper: {
          paddingHorizontal: 5,
          marginRight: 5,
        },
        imageContainer: {
          // containerHeight (52) + gapBetweenImageAndContainer (4)
          height: 56,
          width: 56,
          borderRadius: 56,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: friendRequestSent ? 0.5 : 3,
          borderColor: imageContainerBorderColor,
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
          lineHeight: 8,
        },
        detailsContainer: {
          paddingVertical: 3,
          justifyContent: 'center',
          marginRight: 'auto',
        },
        statusContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        status: {
          marginTop: 6,
          marginRight: theme.spacing.md,
          color:
            networkStatus === 'online'
              ? theme.colors.primarySand
              : theme.colors.primarySand60,
        },
        robloxImage: {
          width: 14,
          height: 14,
          marginTop: theme.spacing.sm,
        },
        messageContainer: {
          marginTop: onCall ? theme.spacing.xs : theme.spacing.sm,
          flexDirection: 'row',
          alignItems: 'center',
          width: 127,
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
          height: 71,
          width: 71,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 2,
          borderColor:
            networkStatus === 'online'
              ? theme.colors.tertiaryOnline
              : 'transparent',
        },
        currentActivityImage: {
          height: 56,
          width: 56,
        },
        resendImage: {
          width: 42,
          height: 42,
        },
      }),
    [],
  )

  // Status Content
  let statusContent = ''
  if (friendRequestSent) {
    statusContent = 'Friend Request sent'
  } else if (networkStatus === 'online') {
    statusContent = 'Online'
    if (playing) {
      statusContent += ', Playing'
    }
  } else {
    // TODO: Fix with typescript
    if (__DEV__ && !lastSeen) {
      console.warn(
        'You must provide `lastSeen` when `networkStatus` is offline',
      )
    }
    statusContent = getTimeAgo(new Date(!!lastSeen ? lastSeen : ''))
  }

  // Message Content
  let messageContent = null
  if (onCall) {
    messageContent = (
      <Fragment>
        <Title variation="subtitle2" numberOfLines={1} style={styles.onCall}>
          In a Call
        </Title>
        <Image
          source={require('./assets/VideoCall@3x.png')}
          style={styles.videoCallImage}
        />
      </Fragment>
    )
  } else if (message) {
    messageContent = (
      <Fragment>
        <Text>“</Text>
        <Title variation="subtitle2" numberOfLines={1} style={styles.message}>
          {message}
        </Title>
        <Text>”</Text>
      </Fragment>
    )
  }

  let asideContent = <Fragment />

  if (friendRequestSent) {
    asideContent = (
      <View>
        <Image
          source={require('./assets/Resend@3x.png')}
          style={styles.resendImage}
        />
      </View>
    )
  } else if (lastPlayedGameUrl) {
    asideContent = (
      <Fragment>
        <View style={styles.currentActivityContainer}>
          <Image
            source={{ uri: lastPlayedGameUrl }}
            style={styles.currentActivityImage}
          />
        </View>
      </Fragment>
    )
  }

  const handleAsidePress = useCallback(() => {
    if (onAsidePress && typeof onAsidePress === 'function') {
      onAsidePress()
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <View style={[styles.imageContainer]}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        {friendInLava && (
          <Image
            source={
              friendRequestSent
                ? require('./assets/FriendRequest@3x.png')
                : require('./assets/LBadge@3x.png')
            }
            style={styles.lBadge}
          />
        )}
      </View>

      <View style={styles.detailsContainer}>
        <Title variation="subtitle1" style={styles.name}>
          {name}
        </Title>

        <View style={styles.statusContainer}>
          <Title variation="subtitle2" style={styles.status}>
            {statusContent}
          </Title>
          {playing && (
            <Image
              source={require('./assets/Roblox@3x.png')}
              style={styles.robloxImage}
            />
          )}
        </View>

        {!friendRequestSent && (
          <View style={styles.messageContainer}>{messageContent}</View>
        )}
      </View>

      {!friendRequestSent && lastPlayedGameUrl && (
        <View style={styles.divider} />
      )}

      <Pressable
        onPress={handleAsidePress}
        style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      >
        {asideContent}
      </Pressable>
    </View>
  )
}

export default Friend
