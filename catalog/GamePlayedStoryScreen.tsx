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
      networkStatus:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    },
    {
      firstName:'Evan',
      networkStatus:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    },
    {
      firstName:'Analena',
      networkStatus:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    },
    {
      firstName:'Josh',
      networkStatus:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    }
  ],
  games:[
    {
      name:'How to fly a bicycle in Brook..?',
      imageUrl:'https://i.imgur.com/WNoRKtS.png',
      onThumbnailTapped: showAlert
    },
    {
      name: 'PHILIPS Tower Defense Simulator',
      imageUrl: 'https://i.imgur.com/NPKsA9r.png',
      onThumbnailTapped: showAlert
    },
  ],
  timeString:"For 2.5h today"
}

const storyProps1: GamePlayedStoryProps = {
  friends:[
    {
      firstName:'Josie',
      networkStatus:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    }
  ],
  games:[
    {
      name:'How to fly a bicycle in Brook..?',
      imageUrl:'https://i.imgur.com/WNoRKtS.png',
      onThumbnailTapped: showAlert
    },
    {
      name: 'PHILIPS Tower Defense Simulator',
      imageUrl: 'https://i.imgur.com/NPKsA9r.png',
    },
    {
      name:'How to fly a bicycle in Brook..?',
      imageUrl:'https://i.imgur.com/WNoRKtS.png'
    },
  ],
  timeString:"For 2.5h today"
}

const storyProps2: GamePlayedStoryProps = {
  friends:[
    {
      firstName:'Josie',
      networkStatus:'offline',
      imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    }
  ],
  games:[
    {
      name:'How to fly a bicycle in Brook..?',
      imageUrl:'https://i.imgur.com/WNoRKtS.png',
      onThumbnailTapped: showAlert
    }
  ],
  timeString:"For 2.5h today"
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
        },
        label: {
          fontSize: 10,
          marginBottom: 5,
          color: theme.colors.primarySand,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.storyContainer}>
          <GamePlayedStory {...storyProps} />
          <Text style={styles.label}>[With many users]</Text>
        </View>

        <View style={styles.storyContainer}>
          <GamePlayedStory {...storyProps1} />
          <Text style={styles.label}>[One user with maxWidth undefined]</Text>
        </View>

        <View style={styles.storyContainer}>
          <GamePlayedStory {...storyProps1} maxWidth={240}/>
          <Text style={styles.label}>[horizontal scroll view]</Text>
        </View>

        <View style={styles.storyContainer}>
          <GamePlayedStory {...storyProps2}/>
          <Text style={styles.label}>[One game]</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GamePlayedStoryScreen
