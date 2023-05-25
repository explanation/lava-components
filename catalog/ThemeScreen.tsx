import React, { useMemo } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  ColorValue,
  Platform,
  Dimensions,
} from 'react-native'
import useTheme from '../components/hooks/useTheme'
import Title from '../components/atoms/Title/Title'
import {colors} from '../components/config/theme'

const ThemeScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
            padding: 20,
            justifyContent: 'center',
            width: Platform.OS === 'web' ? undefined : Dimensions.get('screen').width,
            backgroundColor: theme.colors.secondaryBk,
        },
        content: {
          marginBottom: 20,
        },
        label: {
            fontSize: 10,
            marginBottom: 5,
            color: theme.colors.primarySand,
        },
        title: {
            fontSize: 16,
            marginBottom: 10,
            fontWeight:'500',
            color: theme.colors.primarySand,
        },
        font: {
            marginBottom:6
        },
        colorContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },
        colorContent: {
            height: 50,
            width: 50,
            borderRadius: 25,
            marginLeft: 8
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        cell: {
            flex: 1,
            fontSize: 16,
            textAlign: 'center',
            flexDirection:'row',
        },
        
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>[Fonts]</Text>
            <Title style={styles.font} variation='title1'>Title1</Title>
            <Title style={styles.font} variation='title2'>Title2</Title>
            <Title style={styles.font} variation='subtitle1'>Subtitle1</Title>
            <Title style={styles.font} variation='subtitle2'>Subtitle2</Title>
            <Title style={styles.font} variation='subtitle3'>Subtitle3</Title>
            <Title style={styles.font} variation='subtitle4'>Subtitle4</Title>
        </View>

        <View style={styles.content}>
            <Text style={styles.label}>[Colors]</Text>
            <View style={styles.colorContainer}>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <Text style={styles.label}>Variant</Text>
                    </View>
                    <View style={[styles.cell]}>
                        <View style={{width:60}}><Text style={[styles.label, {textAlign:'center'}]}>light</Text></View>
                        <View style={{width:60}}><Text style={[styles.label, {textAlign:'center'}]}>dark</Text></View>
                    </View>
                </View>
                {Object.keys(colors.light).map((colorKey) => 
                    <View style={styles.row} key={colorKey}>
                        <View style={styles.cell}>
                            <Text style={styles.label}>{colorKey}</Text>
                        </View>
                        <View style={styles.cell}>
                            <View style={[styles.colorContent, { backgroundColor: colors.light[colorKey as keyof typeof colors.light]}]}/>
                            <View style={[styles.colorContent, { backgroundColor: colors.dark[colorKey as keyof typeof colors.dark]}]}/>
                        </View>
                    </View>
                )}
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ThemeScreen
