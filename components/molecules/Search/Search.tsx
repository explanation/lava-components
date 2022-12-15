import React, { useMemo, useState } from 'react'

import { StyleSheet, View, Image, TextInput, Pressable } from 'react-native'
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
  const [inputText, setInputText] = useState('')
  const { text = '', placeholder = '', variation = 'Default', onSearch } = props

  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.tertiarySand5,
        },
        container: {
          padding: theme.spacing.md,
          paddingRight: 0,
          flexDirection: 'row',
          alignItems: 'center',
          width: 520,
          height: '100%',
        },
        youtubeIcon: {
          width: 101,
          height: 28,
          marginRight: theme.spacing.xl,
        },
        textInput: {
          height: '100%',
          width: '100%',
          color: theme.colors.primarySand,
          outlineStyle: 'none',
        },
        search: {
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          paddingHorizontal: 12,
        },
        searchIcon: {
          width: 16,
          height: 16,
        },
      }),
    [theme],
  )

  const handlePress = () => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(inputText)
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('./youtube@3x.png')}
          style={styles.youtubeIcon}
        />
        <TextInput
          defaultValue={text}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={setInputText}
          onSubmitEditing={handlePress}
          placeholderTextColor={theme.colors.primarySand40}
        />
      </View>

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [styles.search, { opacity: pressed ? 0.8 : 1 }]}
      >
        <Image
          source={require('./search@3x.png')}
          style={styles.searchIcon}
          resizeMode="cover"
        />
      </Pressable>
    </View>
  )
}

export default Search
