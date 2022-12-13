import React, { useMemo } from 'react'

import { StyleSheet, View, Image, TextInput } from 'react-native'
import useTheme from '../../hooks/useTheme'

export type SearchVariation = 'Default' | 'YouTube'

export interface SearchProps {
  text?: string
  placeholder?: string
  variation?: SearchVariation
  onSearch: (text: string) => void
}

const Search: React.FC<SearchProps> = (props) => {
  const theme = useTheme()
  const { text = '', placeholder = '', variation = 'Default' } = props

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {},
        textInput: {},
      }),
    [theme],
  )

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.primarySand}
      />
    </View>
  )
}

export default Search
