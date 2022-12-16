import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import GameCardScreen from './catalog/GameCardScreen'
import { useFonts } from 'expo-font'
import ThemeContextProvider from './components/contexts/ThemeContext'
import FriendScreen from './catalog/FriendScreen'
import VideoCardScreen from './catalog/VideoCardScreen'
import ButtonScreen from './catalog/ButtonScreen'
import TopicCard from './components/molecules/TopicCard/TopicCard'
import TopicCardScreen from './catalog/TopicCardScreen'

type Views =
  | 'ROOT'
  | 'GAME_CARD'
  | 'FRIEND'
  | 'VIDEO_CARD'
  | 'BUTTON'
  | 'TOPIC_CARD'

export default function App() {
  const [view, setView] = useState<Views>('ROOT')
  const [fontsLoaded] = useFonts({
    'Agrandir-Bold': require('./assets/fonts/Agrandir-Bold.otf'),
    'Agrandir-Medium': require('./assets/fonts/Agrandir-Medium.otf'),
    'Agrandir-Regular': require('./assets/fonts/Agrandir-Regular.otf'),
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <View />
  }

  let content = <Fragment />

  if (view === 'ROOT') {
    content = (
      <View>
        <Text style={{ fontFamily: 'Agrandir-Bold' }}>
          Pick a Screen{'\n\n'}
        </Text>
        <View style={styles.button}>
          <Button onPress={() => setView('GAME_CARD')} title="<GameCard />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('FRIEND')} title="<Friend />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('TOPIC_CARD')} title="<TopicCard />" />
        </View>
      </View>
    )
  } else if (view === 'GAME_CARD') {
    content = <GameCardScreen />
  } else if (view === 'FRIEND') {
    content = <FriendScreen />
  } else if (view === 'VIDEO_CARD') {
    content = <VideoCardScreen />
  } else if (view === 'BUTTON') {
    content = <ButtonScreen />
  } else if (view === 'TOPIC_CARD') {
    content = <TopicCardScreen />
  } else {
    content = <View />
  }

  return (
    <ThemeContextProvider mode="light">
      <View style={styles.container} onLayout={onLayoutRootView}>
        {content}
      </View>
    </ThemeContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
  },
})
