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
import GameCard from '../components/molecules/GameCard/GameCard'
import Search from '../components/molecules/Search/Search'

const sampleGameData = {}

const SearchScreen: React.FC = () => {
  const theme = useTheme()

  const handleYoutubeSearch = (text: string) => {
    Alert.alert('YouTube Search ', text)
  }

  const handleDefaultSearch = (text: string) => {
    Alert.alert('Default Search ', text)
  }

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          backgroundColor: theme.colors.secondaryBk,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Search
          variation="YouTube"
          placeholder="Search with YouTube"
          text="Roblox Adopt Me New Secrets 2022"
          onSearch={handleYoutubeSearch}
        />

        <View style={{ marginTop: 10 }}>
          <Search
            placeholder="Search Up Games, Codes, Secrets, Friends and more..."
            text=""
            onSearch={handleDefaultSearch}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen
