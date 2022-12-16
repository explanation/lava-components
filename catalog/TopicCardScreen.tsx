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
import TopicCard, {
  TopicCardProps,
} from '../components/molecules/TopicCard/TopicCard'

const showAlert = () => {
  Alert.alert('Game is pressed!')
}

const commonTopicCardProps: TopicCardProps = {
  thumbnailUrl: 'https://i.imgur.com/4DZcxPj.png',
  title: 'Roblox is a title that fits in 2 lines',
  onPress: showAlert,
}

const TopicCardScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          backgroundColor: '#58595e',
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
          <Text style={styles.label}>1. [Topic Card]</Text>
          <TopicCard {...commonTopicCardProps} notificationCount={2} />
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>2. [Topic card without notification]</Text>
          <TopicCard {...commonTopicCardProps} />
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>3. [Mini]</Text>
          <TopicCard {...commonTopicCardProps} variation="mini" />
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>4. [icon]</Text>
          <TopicCard
            {...commonTopicCardProps}
            title="Adopt Me"
            variation="icon"
          />
        </View>

        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>4. [icon with callout]</Text>
          <TopicCard
            {...commonTopicCardProps}
            variation="icon"
            title="Brookehaven"
            callout="Has a  new secret!"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TopicCardScreen
