import React, { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native'
import useTheme from '../components/hooks/useTheme'
import Friend from '../components/molecules/Friend/Friend'
import GameCard from '../components/molecules/GameCard/GameCard'

const commonFriendData = {
  imageUrl: 'https://i.imgur.com/LK7ymaN.png',
  name: 'Lily Woofers 10',
  status: 'Online, Playing',
  message: 'where are you. what are you doing?',
}

export default function FriendScreen() {
  const theme = useTheme()
  const showFriendAreaPressAlert = () => {
    Alert.alert('Friend is Pressed')
  }

  const showCurrentActivityPressAlert = () => {
    Alert.alert('Current Activity Pressed')
  }

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: theme.colors.background,
          marginTop: 10,
          paddingHorizontal: 100,
          paddingVertical: 50,
        },
        compContainer: {
          marginBottom: 20,
        },
        labelText: {
          color: theme.colors.neutral,
          fontSize: 10,
          marginBottom: 5,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/*
          • Online
          • Playing a game
          • Unread Chat
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            [Online, Playing a game, Unread Chat]
          </Text>
          <Friend {...commonFriendData} />
        </View>

        {/*
          • Online
          • Playing a game
          • Last chat is read
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            [Online, Playing a game, Last chat is read]
          </Text>
          <Friend {...commonFriendData} messageSeen />
        </View>

        {/*
          • Online
          • Playing a game
          • In a call
        */}
        <View style={[styles.compContainer]}>
          <Text style={styles.labelText}>
            [Online, Playing a game, In a Call]
          </Text>
          <Friend onCall {...commonFriendData} />
        </View>

        <View style={styles.compContainer}>
          <Friend
            networkStatus="offline"
            lastSeen={new Date(Date.now() - 1000 * 60 * 20)}
            {...commonFriendData}
          />
        </View>

        <View style={[styles.compContainer]}>
          <Friend onCall {...commonFriendData} />
        </View>

        <View style={[styles.compContainer]}>
          <Friend onCall {...commonFriendData} />
        </View>

        <View style={[styles.compContainer]}>
          <Friend onCall {...commonFriendData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
