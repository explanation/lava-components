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
import Avatar, {AvatarProps} from '../components/atoms/Avatar/Avatar'

const avatarProps: AvatarProps = {
  avatarUrl: 'https://i.imgur.com/LK7ymaN.png',
  username: 'Aden Bisop',
  variant: 'primaryLarge'
}
const avatarProps2: AvatarProps = {
  username: 'Joe Doe',
  variant: 'primaryLarge'
}

const AvatarScreen: React.FC = () => {
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
            <Avatar {...avatarProps} style={{marginRight:10}}/>
            <Avatar {...avatarProps2}/>
          </View>
        </View>
        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>2. [Avatar image with variant primarySmall]</Text>
          <View style={{flexDirection:'row'}}>
            <Avatar {...avatarProps} variant='primarySmall' style={{marginRight:10}}/>
            <Avatar {...avatarProps2} variant='primarySmall'/>
          </View>
        </View>
        <View style={styles.videoCardContainer}>
          <Text style={styles.label}>3. [Avatar image with variant secondary]</Text>
          <View style={{flexDirection:'row'}}>
            <Avatar {...avatarProps} variant='secondary' style={{marginRight:10}}/>
            <Avatar {...avatarProps2} variant='secondary'/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AvatarScreen
