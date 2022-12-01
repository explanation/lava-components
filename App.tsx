import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import SearchBarScreen from './catalog/SearchBarScreen'
import { useFonts } from 'expo-font'
import ThemeContextProvider, {
  ThemeContext,
} from './components/contexts/ThemeContext'

export default function App() {
  const [view, setView] = useState<'screen' | 'root'>('screen')
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

  if (view === 'root') {
    content = (
      <View>
        <Text style={{ fontFamily: 'Agrandir-Bold' }}>
          Pick a Screen{'\n\n'}
        </Text>
        <Button onPress={() => setView('screen')} title="View Cards" />
      </View>
    )
  } else {
    content = <SearchBarScreen />
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
})
