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

const sampleGameData = {
  name: 'PHILIPS Tower Defense Simulator',
  imageUrl: 'https://i.imgur.com/NPKsA9r.png',
  likesByFriends: 10,
  likesOnPlatform: 7200000,
}

export default function GameCardScreen() {
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
        },
        cardsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderRadius: 4,
          width: '100%',
          backgroundColor: theme.colors.neutral,
        },
        card: {
          margin: 10,
        },
        label: {
          fontSize: 10,
          marginTop: 5,
        },
        lightLabel: {
          color: theme.colors.neutral,
        },
        darkCardsContainer: {
          backgroundColor: theme.colors.background,
          marginTop: 10,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <GameCard {...sampleGameData} onPress={showAlert} />
            <Text style={styles.label}>[Full]</Text>
          </View>

          <View style={styles.card}>
            <GameCard
              {...sampleGameData}
              onPress={showAlert}
              notificationsCount={2}
            />
            <Text style={styles.label}>[Full with Notification]</Text>
          </View>

          <View style={styles.card}>
            <GameCard
              {...sampleGameData}
              onPress={showAlert}
              name="PHILIPS Tower Defense Simulator: Beta Version"
            />
            <Text style={styles.label}>[Full with Long Text]</Text>
          </View>
        </View>

        <View style={[styles.cardsContainer, styles.darkCardsContainer]}>
          <View style={styles.card}>
            <GameCard
              {...sampleGameData}
              variation="mini"
              onPress={showAlert}
            />
            <Text style={[styles.label, styles.lightLabel]}>[Mini]</Text>
          </View>

          <View style={styles.card}>
            <GameCard
              {...sampleGameData}
              variation="icon"
              onPress={showAlert}
              name="Adopt me"
            />
            <Text style={[styles.label, styles.lightLabel]}>[Icon]</Text>
          </View>

          <View style={styles.card}>
            <GameCard
              {...sampleGameData}
              variation="icon"
              onPress={showAlert}
              name="Adopt me"
              callout="Has a new secret!"
            />
            <Text style={[styles.label, styles.lightLabel]}>
              [Icon with Callout]
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
