import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Pressable, SafeAreaView } from 'react-native'
import GameCardScreen from './catalog/GameCardScreen'
import { useFonts } from 'expo-font'
import ThemeContextProvider from './components/contexts/ThemeContext'
import FriendScreen from './catalog/FriendScreen'
import VideoCardScreen from './catalog/VideoCardScreen'
import ButtonScreen from './catalog/ButtonScreen'
import TopicCardScreen from './catalog/TopicCardScreen'
import Title from './components/atoms/Title/Title'
import theme from './components/config/theme'
import NewVideoStoryScreen from './catalog/NewVideoStoryScreen'
import GamePlayedStoryScreen from './catalog/GamePlayedStoryScreen'
import ThemeScreen from './catalog/ThemeScreen'
import AvatarScreen from './catalog/AvatarScreen'
import FriendCircleScreen from './catalog/FriendCircleScreen'
import FriendDotScreen from './catalog/FriendDotScreen'
import FriendOfflineRowScreen from './catalog/FriendOfflineRowScreen'
import FriendRowScreen from './catalog/FriendRowScreen'

type Views =
  | 'ROOT'
  | 'GAME_CARD'
  | 'FRIEND'
  | 'VIDEO_CARD'
  | 'BUTTON'
  | 'TOPIC_CARD'
  | 'NEW_VIDEO_STORY'
  | 'GAME_PLAYED_STORY'
  | 'THEME'
  | 'AVATAR'
  | 'FRIENDCIRCLE'
  | 'FRIENDDOT'
  | 'FRIENDOFFLINEROW'
  | 'FRIENDROW'

const App = () => {
  const [view, setView] = useState<Views>('ROOT')
  const [fontsLoaded] = useFonts({
    'Agrandir-Bold': require('./assets/fonts/Agrandir-Bold.otf'),
    'Agrandir-Medium': require('./assets/fonts/Agrandir-Medium.otf'),
    'Agrandir-Regular': require('./assets/fonts/Agrandir-Regular.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
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
          <Button onPress={() => setView('THEME')} title="Theme" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('GAME_CARD')} title="<GameCard />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('FRIEND')} title="<Friend />, <FriendGroup/>" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('VIDEO_CARD')} title="<VideoCard />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('BUTTON')} title="<Button />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('TOPIC_CARD')} title="<TopicCard />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('AVATAR')} title="<Avatar/>" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('FRIENDCIRCLE')} title="<FriendCircle/>" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('GAME_PLAYED_STORY')} title="<GamePlayedStory />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('FRIENDDOT')} title="<FriendDot/>" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('FRIENDOFFLINEROW')} title="<FriendOfflineRow/>" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('FRIENDROW')} title="<FriendRow/>" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('NEW_VIDEO_STORY')} title="<NewVideoStory />" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => setView('THEME')} title="Theme" />
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
    } else if (view === 'NEW_VIDEO_STORY') {
      screen = <NewVideoStoryScreen />
    } else if (view === 'GAME_PLAYED_STORY') {
      screen = <GamePlayedStoryScreen />
    } else if (view === 'THEME') {
      screen = <ThemeScreen />
    } else if (view === 'AVATAR') {
      screen = <AvatarScreen/>
    } else if (view === 'FRIENDCIRCLE') {
      screen = <FriendCircleScreen/>
    } else if (view === 'FRIENDDOT') {
      screen = <FriendDotScreen/>
    } else if (view === 'FRIENDOFFLINEROW') {
      screen = <FriendOfflineRowScreen/>
    } else if (view === 'FRIENDROW') {
      screen = <FriendRowScreen/>
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
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          {content}
        </View>
      </SafeAreaView>
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

export default App