import { FC, Fragment, useCallback, useMemo } from 'react'
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native'
import Title from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'
import { FriendNetworkStatus } from './Friend'

export interface FriendGroupItem {
  firstName: string
  imageUrl: string
  networkStatus: FriendNetworkStatus
}

export interface FriendProps {
  friends: FriendGroupItem[]
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
  const { friends } = props
  const theme = useTheme()

  const [friend1, friend2] = friends

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          paddingVertical: theme.spacing.xl,
        },
        imageWrapper: {
          alignItems: 'center',
          paddingRight: theme.spacing.xxl,
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
      <Title variation="subtitle1" numberOfLines={2} style={{ width: 213 }}>
        {names}
      </Title>
    </View>
  )
}

export default FriendGroup
