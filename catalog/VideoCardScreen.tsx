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
import VideoCard, {
  VideoCardProps,
} from '../components/molecules/VideoCard/VideoCard'

const commonVideoCardProps: VideoCardProps = {
  thumbnailUrl: 'https://i.imgur.com/WNoRKtS.png',
  title: 'How to fly a bicycle in Brook..?',
  creatorName: 'Maison',
  views: 10000,
  duration: 120,
  uploadedOn: new Date(
    new Date().getTime() - 1.5 * 60 * 60 * 1000,
  ).toISOString(),
}

const VideoCardScreen: React.FC = () => {
  const theme = useTheme()
  const showAlert = () => {
    Alert.alert('Game is pressed!')
  }

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.secondaryBk,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <VideoCard {...commonVideoCardProps} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default VideoCardScreen
