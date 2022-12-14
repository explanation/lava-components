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
import Friend, { FriendProps } from '../components/molecules/Friend/Friend'

const friendData: FriendProps = {
  imageUrl: 'https://i.imgur.com/LK7ymaN.png',
  name: 'Lily Woofers',
  message: 'where are you. what are you doing?',
  lastPlayedGameUrl: 'https://i.imgur.com/vC81osj.png',
}

const lastSeen = new Date(new Date().getTime() - 20 * 60 * 1000).toISOString()

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
          backgroundColor: theme.colors.secondaryBk,
          marginTop: 10,
          paddingHorizontal: 100,
          paddingVertical: 50,
        },
        compContainer: {
          marginBottom: 35,
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
        {/* #1
          • Online
          • Playing a game
          • Unread Chat
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #1 [Online, Playing a game, Unread Chat]
          </Text>
          <Friend
            playing
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #2
          • Online
          • Playing a game
          • Last chat is read
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #2 [Online, Playing a game, Last chat is read]
          </Text>

          <Friend
            playing
            messageSeen
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #3
          • Online
          • Playing a game
          • In a call
        */}
        <View style={[styles.compContainer]}>
          <Text style={styles.labelText}>
            #3 [Online, Playing a game, In a Call]
          </Text>
          <Friend
            onCall
            playing
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #4
          • Group w/ different status of users
        */}
        <View style={[styles.compContainer]}>
          <Text style={styles.labelText}>
            #4 [Group w/ different status of users]*
          </Text>
          <Friend
            onCall
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #5
          • Offline
          • Last played game
          • Last Unread Chat
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            # 5 [Offline, Last played game, last unread chat]
          </Text>
          <Friend
            networkStatus="offline"
            playing={false}
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #6
          • Offline
          • Last played game
          • Last chat is read
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #6 [Offline, Last played game, Last chat is read]
          </Text>
          <Friend
            messageSeen
            networkStatus="offline"
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #7
          • Friend Request Sent
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#7 [Friend Request Sent]</Text>
          <Friend
            friendRequestSent
            name={friendData.name}
            imageUrl={friendData.imageUrl}
          />
        </View>

        {/* #8.1
          • Online
          • No chat history
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#8.1 [Online, No chat history]</Text>
          <Friend
            playing
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #8.2
          • Offline
          • No chat history
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#8.2 [Offline, No chat history]</Text>
          <Friend
            networkStatus="offline"
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #9.1
          • Online
          • Not playing game
          • No chat history
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #9.1 [Online, Not playing game, No chat history]
          </Text>
          <Friend name={friendData.name} imageUrl={friendData.imageUrl} />
        </View>

        {/* #9.2
          • Offline
          • Not playing game
          • No chat history
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #9.2 [Offline, Not playing game, No chat history]
          </Text>
          <Friend
            networkStatus="offline"
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
          />
        </View>

        {/* #10.1
          • Online
          • Not playing game
          • Chat history
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #10.1 [Online, Not playing game, Chat history]*
          </Text>
          <Friend
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
          />
        </View>

        {/* #10.2
          • Offline
          • Not playing game
          • Chat history
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #10.2 [Offline, Not playing game, Chat history]
          </Text>
          <Friend
            lastSeen={lastSeen}
            networkStatus="offline"
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #11
          • Online
          • Watching a video
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #11 [Offline, Not playing game, Chat history]*
          </Text>
          <Friend
            networkStatus="offline"
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #12
          • Online
          • Playing a game
          * Friend not in lava
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #12 [Online, Playing a game, Friend not in lava]
          </Text>
          <Friend
            playing
            friendInLava={false}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #13
          • Offline
          • Last Played Game
          * Friend not in lava
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            #13 [Offline, Playing a game, Friend not in lava]
          </Text>
          <Friend
            networkStatus="offline"
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            lastPlayedGameUrl={friendData.lastPlayedGameUrl}
          />
        </View>

        {/* #14
          • New Friend Request
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#14 [New Friend Request]</Text>
          <Friend
            newFriendRequest
            name={friendData.name}
            imageUrl={friendData.imageUrl}
          />
        </View>

        {/* #15.1
          • Chat notification
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#15.1 [Chat notification]</Text>
          <Friend networkStatus="offline" {...friendData} />
        </View>

        {/* #15.2
          • Chat notification group
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#15.2 [Chat notification group]</Text>
          <Friend networkStatus="offline" {...friendData} />
        </View>

        {/* #16.1
          • Call notification
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#16 [Call notification]</Text>
          <Friend networkStatus="offline" {...friendData} />
        </View>

        {/* #16.2
          • Call notification group
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#16.2 [Call notification group]</Text>
          <Friend networkStatus="offline" {...friendData} />
        </View>

        {/* #17
          • New friend joined
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#17 [New friend joined]</Text>
          <Friend networkStatus="offline" {...friendData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
