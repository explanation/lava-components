import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SearchBarScreen from './screens/SearchBarScreen'


export default function App() {
  const [path, setPath] = useState<string | null>(null)

  return (
    <View style={styles.container}>

        {path == null &&
        <View>
            <Text>Pick a Screen{"\n\n"}</Text>
            <Button
                onPress={() => setPath('search')}
                title="Search"
              />
        </View>}

        {path == 'search' &&
            <SearchBarScreen />
        }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
