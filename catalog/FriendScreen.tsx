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
import FriendGroup, {
  FriendGroupItem,
} from '../components/molecules/Friend/FriendGroup'

const friendData: FriendProps = {
  imageUrl: 'https://i.imgur.com/LK7ymaN.png',
  name: 'Lily Woofers',
  message: 'where are you. what are you doing...?',
  activityImageUrl: 'https://i.imgur.com/vC81osj.png',
  activityType: 'playing',
}

const friendsOnlineOfflineSampleData: FriendGroupItem[] = [
  {
    firstName: 'Charlie',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Doug',
    imageUrl: friendData.imageUrl,
    networkStatus: 'offline',
  },
  {
    firstName: 'Devin',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Pranay',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Nihar',
    imageUrl: friendData.imageUrl,
    networkStatus: 'offline',
  },
  {
    firstName: 'Josie',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Evan',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
]

const friendsOnlineOnlineSampleData: FriendGroupItem[] = [
  {
    firstName: 'Charlie',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Doug',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Devin',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Pranay',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Nihar',
    imageUrl: friendData.imageUrl,
    networkStatus: 'offline',
  },
  {
    firstName: 'Josie',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Evan',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
]

const friendsOfflineOfflineSampleData: FriendGroupItem[] = [
  {
    firstName: 'Charlie',
    imageUrl: friendData.imageUrl,
    networkStatus: 'offline',
  },
  {
    firstName: 'Doug',
    imageUrl: friendData.imageUrl,
    networkStatus: 'offline',
  },
  {
    firstName: 'Devin',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Pranay',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Nihar',
    imageUrl: friendData.imageUrl,
    networkStatus: 'offline',
  },
  {
    firstName: 'Josie',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
  {
    firstName: 'Evan',
    imageUrl: friendData.imageUrl,
    networkStatus: 'online',
  },
]

const lastSeen = new Date(new Date().getTime() - 20 * 60 * 1000).toISOString()

const notificationSentOn = new Date(
  new Date().getTime() - 2 * 60 * 60 * 1000,
).toISOString()

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
              
            {"<Friend/>"} - #1 [Online, Playing a game, Unread Chat]
          </Text>
          <Friend
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            activityImageUrl={friendData.activityImageUrl}
            activityType={'playing'}
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
            messageSeen
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            activityImageUrl={friendData.activityImageUrl}
            activityType={'playing'}
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
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            activityImageUrl={friendData.activityImageUrl}
            activityType={'playing'}
          />
        </View>

        {/* #4
          • Group w/ different status of users
        */}
        <View style={[styles.compContainer]}>
          <Text style={styles.labelText}>
            #4 [Group w/ different status of users, online/offline]
          </Text>
          <FriendGroup friends={friendsOnlineOfflineSampleData} />
        </View>

        {/* #4.1
          • Group w/ different status of users
        */}
        <View style={[styles.compContainer]}>
          <Text style={styles.labelText}>
            #4.1 [Group w/ different status of users, online/online]
          </Text>
          <FriendGroup friends={friendsOnlineOnlineSampleData} />
        </View>

        {/* #4.2
          • Group w/ different status of users
        */}
        <View style={[styles.compContainer]}>
          <Text style={styles.labelText}>
            #4.2 [Group w/ different status of users, offline/offline]
          </Text>
          <FriendGroup friends={friendsOfflineOfflineSampleData} />
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
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            message={friendData.message}
            activityImageUrl={friendData.activityImageUrl}
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
            activityImageUrl={friendData.activityImageUrl}
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
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            activityImageUrl={friendData.activityImageUrl}
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
            activityImageUrl={friendData.activityImageUrl}
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
            #10.1 [Online, Not playing game, Chat history]
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
          />
        </View>

        {/* #11
          • Online
          • Watching a video
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#11 [Online, Watching a Video]</Text>
          <Friend
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            activityImageUrl={friendData.activityImageUrl}
            activityType="watching"
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
            friendInLava={false}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            activityImageUrl={friendData.activityImageUrl}
            activityType="playing"
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
            friendInLava={false}
            lastSeen={lastSeen}
            name={friendData.name}
            imageUrl={friendData.imageUrl}
            activityImageUrl={friendData.activityImageUrl}
          />
        </View>

        {/* #14
          • New Friend Request
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#14 [New friend request]</Text>
          <Friend
            notificationType="new-friend-request"
            name="Ethan SuperNoob"
            notificationSentOn={notificationSentOn}
            imageUrl={friendData.imageUrl}
            activityImageUrl={friendData.activityImageUrl}
          />
        </View>

        {/* #15
          • Chat
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#15 [Chat Notification]</Text>
          <Friend
            notificationType="chat"
            name="Lily Woofers 10"
            message="hey where are you?"
            imageUrl={friendData.imageUrl}
            notificationSentOn={notificationSentOn}
          />
        </View>

        {/* #16
          • Chat
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#16 [Chat Group]</Text>
          <FriendGroup
            messageSeen
            message="hey where are you?"
            notificationSentOn={notificationSentOn}
            friends={friendsOnlineOnlineSampleData}
          />
        </View>

        {/* #17.1
          • Call
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#17.1 [Call]</Text>
          <Friend
            name="Lily Woofers 10"
            notificationType="video"
            imageUrl={friendData.imageUrl}
            notificationSentOn={notificationSentOn}
          />
        </View>

        {/* #17.2
          • Call
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#17.2 [Group Call]</Text>
          <FriendGroup
            notificationType="video"
            notificationSentOn={notificationSentOn}
            friends={friendsOnlineOnlineSampleData}
          />
        </View>

        {/* #18
          • Call
        */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>#18 [Call]</Text>
          <Friend
            name="Lily Woofers 10"
            notificationType="new-friend-joined"
            notificationSentOn={notificationSentOn}
            imageUrl={friendData.imageUrl}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
