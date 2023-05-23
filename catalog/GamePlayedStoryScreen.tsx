import React, { useMemo } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native'
import useTheme from '../components/hooks/useTheme'
import GamePlayedStory, {GamePlayedStoryProps} from '../components/molecules/GamePlayedStory/GamePlayedStory'

const showAlert = () => {
  alert('Game is pressed!')
}

const storyProps: GamePlayedStoryProps = {
  friends:[
    {
      firstName:'Josie',
      status:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    },
    {
      firstName:'Evan',
      status:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    },
    {
      firstName:'Analena',
      status:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    },
    {
      firstName:'Josh',
      status:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    }
  ],
  onFriendsTapped: showAlert,
  games:[
    {
      title:'Legends of Speed',
      imageUrl:'https://i.ytimg.com/vi/YtSlp3ANPHA/maxresdefault.jpg',
      onTapped: showAlert
    },
    {
      title: 'Tower Defense Simulator.',
      imageUrl: 'https://tr.rbxcdn.com/b46265f21b2f53eaa2bef11e8187c84a/512/512/Image/Png',
      onTapped: showAlert
    },
  ],
  timeAgo:"For 2.5 hrs today"
}

const storyProps1: GamePlayedStoryProps = {
  friends:[
    {
      firstName:'Josie',
      status:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    }
  ],
  games:[
    {
      title:'Legends of Speed',
      imageUrl:'https://www.play-games.com/files/img/roblox-online-1647528660.jpg',
      onTapped: showAlert
    },
    {
      title: 'Tower Defense Simulator.',
      imageUrl: 'https://i.imgur.com/NPKsA9r.png',
    },
    {
      title:'Legends of Speed',
      imageUrl:'https://www.play-games.com/files/img/pg-memory-roblox-1647521266.jpg'
    },
  ],
  timeAgo: "For 2.5 hrs today"
} 

const storyProps2: GamePlayedStoryProps = {
  friends:[
    {
      firstName:'Josie',
      status:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    }
  ],
  onFriendsTapped: showAlert,
  games:[
    {
      title:'Legends of Speed',
      imageUrl:'https://i.ytimg.com/vi/YtSlp3ANPHA/maxresdefault.jpg',
      onTapped: showAlert
    }
  ],
  timeAgo: "For 2.5 hrs today"
}


const GamePlayedStoryScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          backgroundColor: theme.colors.secondaryBk,
        },
        storyContainer: {
          marginBottom: 20,
          flex: 1,
          alignItems: 'baseline'
        },
        label: {
          fontSize: 10,
          marginBottom: 5,
          color: theme.colors.sand,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.storyContainer}>
          <Text style={styles.label}>[With many users]</Text>
          <GamePlayedStory {...storyProps} />
       </View>

        <View style={styles.storyContainer}>
          <Text style={styles.label}>[One user with maxWidth undefined]</Text>
          <GamePlayedStory {...storyProps1} />
        </View>

        <View style={styles.storyContainer}>
          <Text style={styles.label}>[horizontal scroll view]</Text>
          <GamePlayedStory {...storyProps1} maxWidth={220}/>
        </View>

        <View style={styles.storyContainer}>
          <Text style={styles.label}>[One game]</Text>
          <GamePlayedStory {...storyProps2}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GamePlayedStoryScreen
