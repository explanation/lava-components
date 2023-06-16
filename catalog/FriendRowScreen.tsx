import React, { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native'
import useTheme from '../components/hooks/useTheme'
import {FriendRow, FriendRowProps} from '../components/molecules/Friend/FriendRow'

const friendRowProps: FriendRowProps = {
    friendCircles:[
        {
            avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
            username: 'Aden Bisop',
            variant: 'primaryLarge',
            status: 'offline'
        },
        {
            avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
            username: 'Lily Woofers',
            variant:'primaryLarge',
            status: 'offline'
        }
    ],
    activity: ''
}

const friendRowProps1: FriendRowProps = {
    friendCircles:[
        {
            avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
            username: 'Aden Bisop',
            variant: 'primaryLarge',
            status: 'online'
        }
    ],
    inRoblox: true,
    gameImageUrl: 'https://i.imgur.com/NPKsA9r.png',
    activity: 'Playing'
}


const FriendRowScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          width: Platform.OS === 'web' ? undefined : Dimensions.get('screen').width,
          backgroundColor: '#1B1F23',
        },
        videoCardContainer: {
          marginBottom: 20,
        },
        label: {
          fontSize: 10,
          marginBottom: 16,
          color: theme.colors.primarySand,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>1. [Friend with game and activity]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendRow {...friendRowProps1}/>
          </View>
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>2. [Friend with video and activity]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendRow {...friendRowProps1} videoImageUrl='https://i.imgur.com/WNoRKtS.png' gameImageUrl=''/>
          </View>
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>3. [Friend with online status]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendRow {...friendRowProps1} gameImageUrl='' activity='' inRoblox={false}/>
          </View>
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>4. [2 friends with names]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendRow {...friendRowProps}/>
          </View>
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>5. [more than 2 friends with names]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendRow {...friendRowProps} friendCircles={[...friendRowProps.friendCircles, {
            avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
            username: 'Lily Woofers',
            variant:'primaryLarge',
            status: 'offline'
        }]}/>
          </View>
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>6. [Friend with last seen]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendRow 
              {...friendRowProps1} 
              friendCircles={[{...friendRowProps1.friendCircles[0], status: 'offline'}]} 
              gameImageUrl='' 
              activity='' 
              lastSeen='24 mins ago'
              inRoblox={false}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default FriendRowScreen
