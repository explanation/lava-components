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

const showAlert = () => {
  Alert.alert('Game is pressed!')
}

const commonVideoCardProps: VideoCardProps = {
  thumbnailUrl: 'https://i.imgur.com/WNoRKtS.png',
  title: 'How to fly a bicycle in Brook..?',
  creatorName: 'Maison',
  views: 10000,
  duration: 120,
  uploadedOn: new Date(
    new Date().getTime() - 1.5 * 60 * 60 * 1000,
  ).toISOString(),
  onPress: showAlert,
}

const VideoCardScreen: React.FC = () => {
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
          marginBottom: 10,
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
          <Text style={styles.label}>1. [Feed Vdo Card]</Text>
          <VideoCard {...commonVideoCardProps} />
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>[Secrets Vdo Card]</Text>
          <VideoCard
            {...commonVideoCardProps}
            variation="secrets"
            title="How to fly a bicycle its a long question of 2 lines ?"
          />
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>[Game Preview Vdo Card]</Text>
          <VideoCard
            {...commonVideoCardProps}
            variation="game-preview"
            thumbnailUrl="https://i.imgur.com/6J8Wmfh.png"
            title="How to fly a bicycle its a long question of 2 lines ?"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VideoCardScreen
