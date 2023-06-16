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
import FriendGroup, {FriendGroupProps} from '../components/molecules/Friend/FriendGroup'

const friendData: FriendGroupProps = {
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
    }
  ],
  variation:'feed'
}

const friendData1: FriendGroupProps = {
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
  variation:'feed'
}

export default function FriendScreen() {
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
            #1 [Friend Group for variant feed]
          </Text>
          <FriendGroup {...friendData}/>
        </View>
        <View>
          <Text style={styles.labelText}>
            #2 [Friend Group for variant offline]
          </Text>
          <FriendGroup {...friendData} variation='offline'/>
        </View>
        <View>
          <Text style={styles.labelText}>
            #3 [Friend Group for variant offline with more than 2 friends]
          </Text>
          <FriendGroup {...friendData} friendCircles={friendData1.friendCircles} variation='offline'/>
        </View>
        <View>
          <Text style={styles.labelText}>
            #4 [Friend Group for variant friends]
          </Text>
          <FriendGroup {...friendData1} variation='friends'/>
        </View>
        <View>
          <Text style={styles.labelText}>
            #5 [Friend Group for variant inbox]
          </Text>
          <FriendGroup {...friendData1} variation='inbox'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
