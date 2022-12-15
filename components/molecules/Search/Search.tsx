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
        defaultWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.tertiarySand5,
          borderBottomColor: theme.colors.tertiarySand20,
          borderBottomWidth: 1,
        },
        defaultContainer: {
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
        defaultTextInput: {
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
        voiceSearchIcon: {
          width: 50,
          height: 50,
          marginRight: 14,
        },
        youtubeContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          width: 640,
          backgroundColor: 'blue',
        },
        youtubeTextInput: {
          width: '100%',
        },
      }),
    [theme],
  )

  const handlePress = () => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(inputText)
    }
  }

  if (variation === 'YouTube') {
    return (
      <View style={styles.defaultWrapper}>
        <View style={styles.defaultContainer}>
          <Image
            source={require('./youtube@3x.png')}
            style={styles.youtubeIcon}
          />
          <TextInput
            defaultValue={text}
            style={styles.defaultTextInput}
            placeholder={placeholder}
            onChangeText={setInputText}
            onSubmitEditing={handlePress}
            placeholderTextColor={theme.colors.primarySand40}
          />
        </View>

        <Pressable
          onPress={handlePress}
          style={({ pressed }) => [
            styles.search,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Image
            source={require('./search@3x.png')}
            style={styles.searchIcon}
            resizeMode="cover"
          />
        </Pressable>
      </View>
    )
  } else {
    return (
      <View style={styles.youtubeContainer}>
        <Image
          source={require('./voice-search@3x.png')}
          style={styles.voiceSearchIcon}
        />
        <TextInput placeholder={placeholder} style={styles.youtubeTextInput} />
      </View>
    )
  }
}

export default Search
