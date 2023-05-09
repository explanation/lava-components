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
import GamePlayedStory, {GamePlayedStoryProps} from '../components/molecules/GamePlayedStory/GamePlayedStory'
import {FriendAvatarType} from '../components/molecules/FriendAvatar/FriendAvatar'

const showAlert = () => {
  Alert.alert('Game is pressed!')
}

const commonVideoCardProps: GamePlayedStoryProps = {
  avatarImage: 'https://i.imgur.com/LK7ymaN.png',
  title: 'How to fly a bicycle in Brook..?',
  avatarUername: 'Maison',
  avatarStatus: 'online',
  gameBookImageUrl: 'https://i.imgur.com/NPKsA9r.png',
  gameBookTitle: 'PHILIPS Tower Defense Simulator',
  onBookTapped: showAlert,
  onStoryTapped: showAlert,
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
        videoCardContainer: {
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
        <View style={styles.videoCardContainer}>
          <GamePlayedStory {...commonVideoCardProps} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GamePlayedStoryScreen
