import React from 'react'
import {Pressable, StyleSheet, Text, View, ViewStyle} from "react-native"
import GameCard from '../GameCard/GameCard'
import {FriendNetworkStatus} from '../Friend/Friend'
import FriendCircle from '../Friend/FriendCircle'

export interface GamePlayedStoryProps {
    title: string
    style?: ViewStyle
    gameBookImageUrl: string | undefined
    gameBookTitle: string
    onBookTapped: () => void
    onStoryTapped: () => void
    avatarImage: string | undefined
    avatarUername: string
    avatarStatus: FriendNetworkStatus
}

export const GamePlayedStory = (props: GamePlayedStoryProps) => {
    return (
        <View style={[styles.container, props.style]}>
            <Pressable onPress={props.onStoryTapped}>
                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'flex-start'}}>
                    <FriendCircle
                        imageUrl={props.avatarImage}
                        networkStatus={'online'}
                        imageSize={60 * 0.8}
                        gap={0}
                        containerSize={60 * 0.8}

                    />
                    <View style={{flex: 1, marginLeft: 10, marginTop: 10}}>
                        <Text style={{color: 'white', fontSize: 13}}>
                            {props.title}
                        </Text>
                    </View>
                </View>
            </Pressable>
            <GameCard
                containerStyle={{marginLeft: 71, marginTop: -26}}
                variation={'mini'}
                imageUrl={props.gameBookImageUrl}
                name={props.gameBookTitle}
                onPress={props.onBookTapped}
            />
        </View>
    )
}

export default GamePlayedStory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 7,
        padding: 8,
        backgroundColor: 'rgba(22,30,44,1)',
        borderRadius: 8,
    },
})

