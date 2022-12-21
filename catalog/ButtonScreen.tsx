import React, { useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native'
import Button from '../components/atoms/Button/Button'
import Title from '../components/atoms/Title/Title'
import useTheme from '../components/hooks/useTheme'

const commonButtonProps = {
  onPress: () => {
    console.log('Button is pressed')
  },
}

const ButtonScreen: React.FC = () => {
  const theme = useTheme()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: theme.colors.secondaryBk,
          marginTop: 10,
          paddingHorizontal: 100,
          paddingVertical: 50,
        },
        compContainer: {
          marginBottom: 35,
        },
        labelText: {
          color: theme.colors.primarySand,
          fontSize: 10,
          marginBottom: 5,
        },
        row: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
        },
        marginRight: {
          marginRight: 10,
        },
        waveIcon: {
          width: 20,
          height: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        actionText: {
          color: theme.colors.primarySand,
          marginTop: 6,
        },
      }),
    [theme],
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Play Game btn */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>
            [Play Game btn, Defaults to available container's width]
          </Text>
          <Button
            {...commonButtonProps}
            full
            variation="play"
            roundness="flat"
            icon={
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
                source={require('../assets/icons/play@2x.png')}
              />
            }
          />

          <View style={{ width: 200 }}>
            <Text style={[styles.labelText, { marginTop: 10 }]}>
              [200px width]
            </Text>
            <Button
              {...commonButtonProps}
              full
              variation="play"
              roundness="flat"
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                  source={require('../assets/icons/play@2x.png')}
                />
              }
            />
          </View>
        </View>

        {/* Friend List btn */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Friend List btn]</Text>

          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="secondary"
              style={styles.marginRight}
              iconStyle={{ marginRight: 2 }}
              textStyle={{ marginTop: 1 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 9.05, height: 12.12 }}
                  source={require('../assets/icons/friend@2x.png')}
                />
              }
            >
              + Find Friends
            </Button>

            <Button
              {...commonButtonProps}
              variation="secondary"
              textStyle={{ marginTop: 1 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 21.58, height: 12.12 }}
                  source={require('../assets/icons/friend-group@3x.png')}
                />
              }
            >
              Group call, chat
            </Button>
          </View>

          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="circular"
              style={styles.marginRight}
              textStyle={{ marginTop: 2 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/icons/resend@2x.png')}
                />
              }
            />

            <Button {...commonButtonProps} variation="play">
              Join to play
            </Button>
          </View>

          <View style={[styles.row, { marginTop: 10 }]}>
            <Button
              {...commonButtonProps}
              variation="secondary"
              iconStyle={{ marginRight: 1 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 9.5, height: 12.2 }}
                  source={require('../assets/icons/friend@2x.png')}
                />
              }
            >
              + Add Friend
            </Button>
          </View>
        </View>

        {/* Inbox btn */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Inbox btn]</Text>
          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="circular"
              style={styles.marginRight}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 17.92, height: 17.23 }}
                  source={require('../assets/icons/chat@2x.png')}
                />
              }
            />

            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="circular"
              style={styles.marginRight}
              icon={
                <View style={styles.waveIcon}>
                  <Text style={{ fontSize: 20 }}>👋</Text>
                </View>
              }
            />

            <Button
              {...commonButtonProps}
              variation="tertiary"
              style={styles.marginRight}
              textStyle={{ marginTop: 1 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 8, height: 8 }}
                  source={require('../assets/icons/close@2x.png')}
                />
              }
            >
              Ignore
            </Button>

            <Button
              {...commonButtonProps}
              variation="gravity"
              style={styles.marginRight}
              textStyle={{ marginTop: 1 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 12, height: 12 }}
                  source={require('../assets/icons/tick@2x.png')}
                />
              }
            >
              Accept
            </Button>
          </View>
        </View>

        {/* Game Card Section btn */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Game Card Section btn]</Text>
          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="primary"
              style={styles.marginRight}
            >
              Button
            </Button>

            <Button variation="secondary" {...commonButtonProps}>
              Button
            </Button>
          </View>
        </View>

        {/* Close */}
        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Close]</Text>
          <Button
            {...commonButtonProps}
            icon={
              <Image
                resizeMode="contain"
                style={{ width: 22, height: 22 }}
                source={require('../assets/icons/close-thin@3x.png')}
              />
            }
            variation="transparent"
          />
        </View>

        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Chevron]</Text>
          <Button
            {...commonButtonProps}
            icon={
              <Image
                resizeMode="contain"
                style={{ width: 9.63, height: 4.38 }}
                source={require('../assets/icons/chevron-down@3x.png')}
              />
            }
            variation="transparent"
          />
        </View>

        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Video Call]</Text>
          <View style={[styles.row, { alignItems: 'flex-start' }]}>
            <Pressable
              onPress={commonButtonProps.onPress}
              style={({ pressed }) => [
                styles.marginRight,
                {
                  alignItems: 'center',
                  opacity: pressed ? 0.8 : 1,
                },
              ]}
            >
              <Button
                {...commonButtonProps}
                variation="gravity"
                roundness="circular"
                style={{
                  borderColor: theme.colors.primarySand,
                  width: 40.97,
                  height: 40,
                }}
                icon={
                  <Image
                    resizeMode="contain"
                    style={{ width: 23.11, height: 13.73 }}
                    source={require('../assets/icons/video@2x.png')}
                  />
                }
              />
              <Title variation="title2" style={styles.actionText}>
                Tap here to call
              </Title>
            </Pressable>

            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="circular"
              style={{ ...styles.marginRight, width: 40.97, height: 40 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 23.11, height: 13.73 }}
                  source={require('../assets/icons/video@2x.png')}
                />
              }
            />
          </View>
        </View>

        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Like]</Text>
          <Button
            {...commonButtonProps}
            icon={
              <Image
                resizeMode="contain"
                style={{ width: 8, height: 8 }}
                source={require('../assets/icons/game-card-like@3x.png')}
              />
            }
            variation="transparent"
          />

          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              style={{ ...styles.marginRight, marginTop: 10 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 14, height: 14 }}
                  source={require('../assets/icons/rating-like@3x.png')}
                />
              }
              variation="transparent"
            />

            <Button
              {...commonButtonProps}
              style={{ ...styles.marginRight, marginTop: 10 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 14, height: 14 }}
                  source={require('../assets/icons/rating-like-partial@3x.png')}
                />
              }
              variation="transparent"
            />

            <Button
              {...commonButtonProps}
              style={{ ...styles.marginRight, marginTop: 10 }}
              icon={
                <Image
                  resizeMode="contain"
                  style={{ width: 14, height: 14 }}
                  source={require('../assets/icons/rating-like-outline@3x.png')}
                />
              }
              variation="transparent"
            />
          </View>
        </View>

        <View style={styles.compContainer}>
          <Text style={styles.labelText}>[Onboarding Buttons]</Text>

          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="secondary"
              roundness="circular"
              style={{
                borderWidth: 3,
                height: 91,
                width: 91,
              }}
              textStyle={{
                fontFamily: theme.fontFamily.Bold,
                fontSize: 30,
                lineHeight: 39,
                height: 39,
              }}
            >
              1
            </Button>
          </View>
          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="secondary"
              roundness="circular"
              style={{
                borderWidth: 4,
                height: 61,
                width: 227,
                borderRadius: 30.5,
              }}
              textStyle={{
                fontFamily: theme.fontFamily.Bold,
                fontSize: 30,
                lineHeight: 39,
                height: 39,
              }}
            >
              Teenager
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="tertiary"
              roundness="rounded"
              size="large"
              style={{ marginRight: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/chevron-left@3x.png')}
                  style={{ width: 10, height: 18 }}
                  resizeMode="contain"
                />
              }
            >
              Back
            </Button>

            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="rounded"
              size="large"
              iconPosition="right"
              style={{ marginRight: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/chevron-right@3x.png')}
                  style={{ width: 10, height: 18 }}
                  resizeMode="contain"
                />
              }
            >
              Next
            </Button>

            <Button
              {...commonButtonProps}
              variation="tertiary"
              roundness="rounded"
              size="large"
              style={{ marginRight: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/close-solid@3x.png')}
                  style={{ width: 14, height: 14 }}
                  resizeMode="contain"
                />
              }
            >
              Skip
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="tertiary"
              roundness="rounded"
              size="large"
              style={{ marginRight: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/close-solid@3x.png')}
                  style={{ width: 14, height: 14 }}
                  resizeMode="contain"
                />
              }
            >
              No
            </Button>

            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="rounded"
              size="large"
              style={{ marginRight: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/rating-like@3x.png')}
                  style={{ width: 21.88, height: 21 }}
                  resizeMode="contain"
                />
              }
            >
              Yes
            </Button>

            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="rounded"
              size="large"
              style={{ marginRight: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/rating-like@3x.png')}
                  style={{ width: 21.88, height: 21 }}
                  resizeMode="contain"
                />
              }
            >
              OK
            </Button>
          </View>

          <View style={styles.row}>
            <Button
              {...commonButtonProps}
              variation="gravity"
              roundness="rounded"
              size="large"
              style={{ marginTop: 10 }}
              icon={
                <Image
                  source={require('../assets/icons/rating-like@3x.png')}
                  style={{ width: 21.88, height: 21 }}
                  resizeMode="contain"
                />
              }
            >
              Allow
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ButtonScreen
