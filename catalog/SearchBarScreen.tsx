import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function SearchBarScreen() {

  return (
    <View style={styles.container}>
        <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
