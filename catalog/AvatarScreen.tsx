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
  size: 48,
  username: 'joedoe',
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
          <Text style={styles.label}>1. [Avatar image with 48px]</Text>
            <Avatar {...avatarProps}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AvatarScreen
