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
import NewVideoStory, {NewVideoStoryProps} from '../components/molecules/NewVideoStory/NewVideoStory'

const showAlert = () => {
  Alert.alert('Game is pressed!')
}

const newVideoStoryProps: NewVideoStoryProps = {
  title: 'Has a new secret Bicycle Hack',
  book: {
    imageUrl: 'https://i.imgur.com/NPKsA9r.png',
    title: 'Brookhaven',
  },
  onTapped: showAlert,
  video: {
    imageUrl: 'https://i.imgur.com/WNoRKtS.png',
    title: 'Bicycle Hack'
  }, 
}

const NewVideoStoryScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: 20,
          justifyContent: 'center',
          backgroundColor: '#1E1E1E',
        },
        storyContainer: {
          marginBottom: 20,
          flex: 1,
          alignItems: 'baseline'
        },
        label: {
          fontSize: 10,
          marginBottom: 5,
          color: theme.colors.sand,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.storyContainer}>
          <Text style={styles.label}>[With Verfied]</Text>
          <NewVideoStory {...newVideoStoryProps} showVerified={true}/>
        </View>
        <View style={styles.storyContainer}>
          <Text style={styles.label}>[Without Verfied]</Text>
          <NewVideoStory {...newVideoStoryProps} />
        </View>
        <View style={styles.storyContainer}>
          <Text style={styles.label}>[With custom width]</Text>
          <NewVideoStory {...newVideoStoryProps} width={360}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewVideoStoryScreen
