import { useMemo } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Text from '../../atoms/Text/Text'
import Title from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'

interface FriendProps {
  imageUrl: string
  name: string
  status: string
  message?: string
  networkStatus?: 'online' | 'offline'
  messageSeen?: boolean
  lastSeen?: Date
  onCall?: boolean
}

const Friend: React.FC<FriendProps> = (props) => {
  const {
    imageUrl,
    name,
    status,
    message,
    networkStatus = 'online',
    messageSeen,
    lastSeen,
    onCall,
  } = props
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        imageContainer: {
          height: 55,
          width: 55,
          borderRadius: 55,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          borderColor: '#0A741C',
          marginRight: 10,
        },
        image: {
          width: 46,
          height: 46,
          borderRadius: 46,
        },
        name: {
          color: theme.colors.neutral,
          lineHeight: 10,
        },
        detailsContainer: {
          paddingVertical: 3,
        },
        status: {
          marginTop: 6,
          color: theme.colors.neutral,
        },
        message: {
          marginTop: 2,
          color: theme.colors.neutral,
          width: 127,
        },
        divider: {
          width: 0.5,
          height: '100%',
          backgroundColor: theme.colors.neutral + 'A0',
          marginHorizontal: 12,
        },
        currentActivityContainer: {
          height: 71,
          width: 71,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          borderColor: '#0DA126',
          borderWidth: 2,
        },
        currentActivityImage: {
          height: 56,
          width: 56,
        },
      }),
    [],
  )

  // Status Content
  let statusContent = ''
  if (networkStatus === 'online') {
    statusContent = status
  } else {
    statusContent = '20 min ago'
  }

  // Message Content
  let messageContent = ''
  if (onCall) {
    messageContent = 'In a Call'
  } else {
    messageContent = `“${message}”`
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          {
            borderColor:
              networkStatus === 'online'
                ? '#0A741C'
                : theme.colors.neutral + 'A0',
          },
        ]}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Title variation="subtitle1" style={styles.name}>
          {name}
        </Title>

        <Title
          variation="subtitle2"
          style={[
            styles.status,
            {
              color:
                networkStatus === 'online'
                  ? theme.colors.neutral
                  : theme.colors.neutral + '99',
            },
          ]}
        >
          {statusContent}
        </Title>

        <Title
          variation="subtitle2"
          numberOfLines={1}
          style={[
            styles.message,
            {
              color: messageSeen
                ? theme.colors.neutral + '99'
                : theme.colors.neutral,
            },
          ]}
        >
          {messageContent}
        </Title>
      </View>

      <View style={styles.divider} />

      <View
        style={[
          styles.currentActivityContainer,
          {
            borderColor: networkStatus === 'online' ? '#0DA126' : 'transparent',
          },
        ]}
      >
        <Image
          source={{ uri: 'https://i.imgur.com/vC81osj.png' }}
          style={styles.currentActivityImage}
        />
      </View>
    </View>
  )
}

export default Friend
