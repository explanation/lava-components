import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import GameCardScreen from './catalog/GameCardScreen'
import { useFonts } from 'expo-font'
import ThemeContextProvider from './components/contexts/ThemeContext'
import FriendScreen from './catalog/FriendScreen'
import VideoCardScreen from './catalog/VideoCardScreen'
import ButtonScreen from './catalog/ButtonScreen'
import TopicCardScreen from './catalog/TopicCardScreen'
import Title from './components/atoms/Title/Title'
import theme from './components/config/theme'

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
          <Button onPress={() => setView('VIDEO_CARD')} title="<VideoCard />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('BUTTON')} title="<Button />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('TOPIC_CARD')} title="<Button />" />
        </View>
      </View>
    )
  } else {
    let screen = <View />
    if (view === 'GAME_CARD') {
      screen = <GameCardScreen />
    } else if (view === 'FRIEND') {
      screen = <FriendScreen />
    } else if (view === 'VIDEO_CARD') {
      screen = <VideoCardScreen />
    } else if (view === 'BUTTON') {
      screen = <ButtonScreen />
    } else if (view === 'TOPIC_CARD') {
      screen = <TopicCardScreen />
    } else {
      screen = <View />
    }
    content = (
      <View>
        <Pressable
          onPress={() => setView('ROOT')}
          style={{
            backgroundColor: theme.colors.dark.secondaryBk,
            paddingVertical: 20,
            paddingLeft: 20,
          }}
        >
          <Title
            variation="subtitle1"
            style={{ color: theme.colors.dark.gravity }}
          >
            {'<'} View All Components
          </Title>
        </Pressable>
        {screen}
      </View>
    )
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
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10,
  },
})
