import React, {Fragment, useMemo} from 'react'
import {
    View,
    StyleSheet,
    Pressable,
    ViewStyle,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../../atoms/Title/Title'
import useTheme from '../../hooks/useTheme'
import {LavaImage} from "../../atoms/LavaImage/LavaImage"
import LikeStat from '../LikeStat/LikeStat'

export interface GameCardProps {
    imageUrl?: string
    name: string
    onPress: () => void
    variation?: 'idle' | 'active'
    containerStyle?: ViewStyle
    noOfPlays?: number
    noOfLikes?: number
}

const variants = {
    active: {
        opacity: 1,
    },
    idle: {
        opacity: 0.5,
    },
}

const GameCard: React.FC<GameCardProps> = (props) => {
    const {
        imageUrl,
        name,
        onPress,
        variation = 'idle',
        containerStyle = {},
        noOfPlays = 0,
        noOfLikes = 0
    } = props

    const theme = useTheme()

    const styles = useMemo(
        () =>
            StyleSheet.create({
                wrapper: {
                    ...containerStyle,
                },
                container: {
                    backgroundColor: '#1B1F23',
                    borderWidth: 0.5,
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: theme.roundness.md,
                    alignSelf: 'baseline'
                },
                image: {
                    height: 128,
                    width: 128,
                    borderTopLeftRadius: theme.roundness.md,
                    borderTopRightRadius: theme.roundness.md,
                    borderBottomWidth: 0.5,
                    borderStyle: 'solid',
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomColor: 'rgba(234, 234, 223, 0.15)',
                    opacity: 0.8
                },
                name: {
                    width:112,
                    color: '#A6A6A6',
                },
                text:{
                    color: '#A6A6A6',
                },
                secondaryContent: {
                    paddingTop: 20,
                    flexDirection: 'row',
                    width: 112,
                    alignItems: 'center'
                }
            }),
        [theme],
    )

    return (
        <Pressable style={[styles.wrapper, styles.container]}>
           <View style={[variants[variation]]}>
                <LavaImage source={{uri: imageUrl}} style={styles.image}/>
                <View style={{padding:8}}>
                    <Title numberOfLines={2} variation="subtitle1" style={styles.name}>{name}</Title>
                    {noOfPlays > 0 && <View style={styles.secondaryContent}>
                        <Title numberOfLines={2} variation="subtitle3" style={styles.text}>You</Title>
                        <LavaImage source={require("./player.png")} style={{width:21, height: 16, marginLeft: 6, marginRight: 6}}/>
                        <Title numberOfLines={2} variation="subtitle3" style={styles.text}>90 times</Title>
                    </View>}
                    {noOfLikes > 0 && <View style={styles.secondaryContent}><LikeStat likes={noOfLikes}/></View>}
                </View>
            </View>
        </Pressable>
    )
}

export default GameCard
