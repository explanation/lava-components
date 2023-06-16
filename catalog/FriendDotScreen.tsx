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
import {FriendDot, FriendDotProps} from '../components/molecules/Friend/FriendDot'

const avatarProps: FriendDotProps = {
  avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
  username: 'Aden Bisop',
  variant: 'primaryLarge',
  status: 'online'
}
const avatarProps2: FriendDotProps = {
  username: 'Joe Doe',
  variant: 'primaryLarge',
  status: 'offline'
}

const FriendDotScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          width: Platform.OS === 'web' ? undefined : Dimensions.get('screen').width,
          backgroundColor: '#242323',
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
          <Text style={styles.label}>1. [Avatar image with variant primaryLarge]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendDot {...avatarProps}/>
          </View>
        </View>
        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>1. [Avatar image with variant primarySmall]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendDot {...avatarProps} variant='primarySmall'/>
          </View>
        </View>
        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>1. [Avatar image with variant secondary]</Text>
          <View style={{flexDirection:'row'}}>
            <FriendDot {...avatarProps} variant='secondary'/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FriendDotScreen
