import React, { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
} from 'react-native'
import useTheme from '../components/hooks/useTheme'
import FriendCircle, {FriendCircleProps} from '../components/molecules/Friend/FriendCircle'

const friendCircleProps: FriendCircleProps = {
    imageUrl: 'https://i.imgur.com/LK7ymaN.png',
    imageSize: 48,
    networkStatus: 'online',
    gap:0,
    containerSize:60
}

const FriendCircleScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          width: Platform.OS === 'web' ? undefined : Dimensions.get('screen').width,
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
          <Text style={styles.label}>1. [FriendCircle with online newtwork status]</Text>
            <FriendCircle {...friendCircleProps}/>
        </View>
        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>2. [FriendCircle with offline newtwork status]</Text>
            <FriendCircle {...friendCircleProps} networkStatus='offline'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FriendCircleScreen
