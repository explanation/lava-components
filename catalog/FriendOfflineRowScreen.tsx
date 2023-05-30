import React, { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native'
import useTheme from '../components/hooks/useTheme'
import {FriendOfflineRow, FriendOfflineRowProps} from '../components/molecules/Friend/FriendOfflineRow'

const friendData: FriendOfflineRowProps = {
  friendCircles: [
    {
      avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
      username: 'Lily Woofers',
      variant:'primaryLarge',
      status: 'online'
    },
    {
      avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
      username: 'Lily Woofers',
      variant:'primaryLarge',
      status: 'offline'
    },
    {
      avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
      username: 'Lily Woofers',
      variant:'primaryLarge',
      status: 'offline'
    }
  ],
  title:'friends are offline'
}

export default function FriendOfflineRowScreen() {
  const theme = useTheme()
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: '#242323',
          marginTop: 10,
          paddingHorizontal:  Platform.OS === "web" ? 100 : 40,
          paddingVertical: 50,
        },
        labelText: {
          color: theme.colors.primarySand,
          fontSize: 10,
          marginBottom: 5,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.labelText}>
            #1 [Friend offline row]
          </Text>
          <FriendOfflineRow {...friendData}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
