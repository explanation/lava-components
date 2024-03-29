import { useMemo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import useTheme from '../../hooks/useTheme'

export interface LabelProps {
  /** Label count:
   * example: 2
   */
  count?: number
  /**
   * Custom text for the label
   */
  text?: string
}

const Label: React.FC<LabelProps> = (props) => {
  const { count, text } = props
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: 'row',
          height: 22,
          width: 62,
          backgroundColor: theme.colors.primarySand,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.5,
          borderColor: theme.colors.secondaryContainers,
          borderRadius: theme.roundness.xs,
        },
        text: {
          color: theme.colors.secondaryBk,
          fontFamily: theme.fontFamily.Medium,
          fontSize: 14,
          fontWeight: '500',
          marginTop: 2,
        },
      }),
    [theme],
  )

    return (
        <View style={styles.container}>
            {count ?
                <Text style={styles.text}>{count < 10 ? count : '9+'} New</Text>
                :
                <Text style={styles.text}>{text}</Text>
            }
        </View>
    )
}

export default Label
