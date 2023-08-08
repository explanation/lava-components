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
    placement: 'game'|'topic'
    imageUrl?: string
    name: string
    onPress: () => void
    variation?: 'idle' | 'active'
    containerStyle?: ViewStyle
    hasPlayed?: boolean
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
        placement,
        imageUrl,
        name,
        onPress,
        variation = 'idle',
        containerStyle = {},
        noOfPlays = 0,
        noOfLikes = 0,
        hasPlayed = false
    } = props

    const theme = useTheme()

    const styles = useMemo(
        () =>
            StyleSheet.create({
                wrapper: {
                    ...containerStyle,
                },
                container: {
                    height: placement == 'game' ? 168 : 140,
                    width: 100,
                    backgroundColor: '#1B1F23',
                    borderWidth: 0.5,
                    borderStyle: 'solid',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: theme.roundness.md,
                },
                image: {
                    height: 100,
                    width: 100,
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
                    color: '#FFFFFFCC',
                },
                text:{
                    color: '#FFFFFFCC',
                },
                secondaryContent: {
                    flexDirection: 'row',
                    alignItems: 'center'
                }
            }),
        [theme],
    )

    return (
        <Pressable style={[styles.wrapper, styles.container]} onPress={onPress}>
            <View style={[{flex: 1, }, variants[variation]]}>
                <LavaImage source={{uri: imageUrl}} style={styles.image}/>
                <View style={{flex: 1, padding:theme.spacing.lg}}>
                    <Title numberOfLines={2} variation="subtitle3" style={styles.name}>{name}</Title>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        {noOfPlays > 0 && <View style={styles.secondaryContent}>
                            <Title numberOfLines={1} variation="subtitle4" style={styles.text}>You</Title>
                            <LavaImage source={require("./player.png")} contentFit={'contain'} style={{marginHorizontal: 4, width: 16, height: 12}}/>
                            <Title numberOfLines={1} variation="subtitle4" style={styles.text}>{noOfPlays} times</Title>
                        </View>}
                        {hasPlayed && <View style={styles.secondaryContent}>
                            <Title numberOfLines={1} variation="subtitle4" style={styles.text}>Recently</Title>
                            <LavaImage source={require("./player.png")} contentFit={'contain'} style={{marginStart: 4, width: 16, height: 12}}/>
                        </View>}
                        {noOfLikes > 0 && <View style={styles.secondaryContent}><LikeStat likes={noOfLikes}/></View>}
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default GameCard
