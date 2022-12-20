import React, { useMemo } from 'react'

import { StyleSheet, View, Image } from 'react-native'
import Text from '../../atoms/Text/Text'
import { getFormattedNumber } from '../../utils/numbers'
import useTheme from '../../hooks/useTheme'

export interface LikeStatProps {
  /** Number of likes
   *
   * Example: 2300
   */
  likes: number
  /** Suffix Text
   *
   * Example: friends => 2.3K friends
   */
  suffix?: string
}

const LikeStat: React.FC<LikeStatProps> = (props) => {
  const theme = useTheme()
  const { likes, suffix } = props

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 0,
        },
        likes: {
          ...theme.typography.subtitle3,
          marginLeft: theme.spacing.sm,
          opacity: 0.6,
        },
        suffix: {
          ...theme.typography.subtitle3,
          opacity: 0.6,
        },
      }),
    [theme],
  )

  return (
    <View style={styles.container}>
      <Image
        source={require('./like.png')}
        style={{ height: 8, width: 8, marginBottom: 3 }}
      />
      <Text
        style={[styles.likes, !!suffix && { marginRight: theme.spacing.sm }]}
      >
        {getFormattedNumber(likes)}
      </Text>
      {!!suffix && <Text style={styles.suffix}>{suffix}</Text>}
    </View>
  )
}

export default LikeStat
