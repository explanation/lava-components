import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function SearchBar() {

  return (
    <View style={styles.container}>
        <Text>This is a search bar</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000000'
    },
})
