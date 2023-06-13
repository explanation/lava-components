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
import GameCard from '../components/molecules/NewGameCard/NewGameCard'

const sampleGameData = {
  name: 'PHILIPS Tower Defense Simulator',
  imageUrl: 'https://static.robloxden.com/strapi/xsmall_robloxden_generated_bbf5fedc27f20aad7e9333b5c74904fa_149194039f.png',
  likesByFriends: 10,
  likesOnPlatform: 7200000,
}

export default function NewGameCardScreen() {
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
          flexDirection: 'column',
          borderRadius: 4,
          width: '100%',
          minWidth: 300,
          backgroundColor: 'black',
        },
        card: {
          margin: 10,
        },
        label: {
          fontSize: 10,
          marginTop: 5,
          marginBottom: 5,
          color: '#ffff'
        },
        lightLabel: {
          color: theme.colors.primarySand,
        },
        darkCardsContainer: {
          backgroundColor: theme.colors.secondaryBk,
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
            <Text style={styles.label}>[Card with idle state]</Text>
            <GameCard {...sampleGameData} onPress={showAlert} />
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>[Card with active state]</Text>
            <GameCard {...sampleGameData} variation='active' onPress={showAlert} />
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>[With no of games played]</Text>
            <GameCard {...sampleGameData} variation='active' noOfPlays={90} onPress={showAlert} />
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>[With no of likes]</Text>
            <GameCard {...sampleGameData} variation='active' noOfLikes={7200000} onPress={showAlert} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
