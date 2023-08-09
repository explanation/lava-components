import React from 'react'
import {Pressable, ScrollView, StyleSheet, View} from "react-native"
import GameCard from '../NewGameCard/NewGameCard'
import FriendGroup from '../Friend/FriendGroup'
import Title from '../../atoms/Title/Title'
import FriendCircle, {FriendCircleProps} from '../Friend/FriendCircle'
import {FriendDot, FriendDotProps} from '../Friend/FriendDot'
import theme from '../../config/theme'

const MAXIMUM_WIDTH_OF_FEED_STORY = 296
export interface GamePlayedStoryProps {
    friends: FriendDotProps[]
    onFriendsTapped?: ()=>void
    games: { title: string, imageUrl: string; onTapped?: ()=> void}[]
    timeAgo: string
    minWidth?: number
    maxWidth?: number
}

const renderNames = (names: string[]) => 
    names.length < 4 ? names.join(", ") :
    names.length > 3 ? names.slice(0,3).join(", ") + " +" + (names.length -3) : names

export const GamePlayedStory = (props: GamePlayedStoryProps) => {
    return (
        <View style={[styles.container, {minWidth: props.minWidth ?? 296, maxWidth: (props.maxWidth) ?? props.games.length === 1 ? MAXIMUM_WIDTH_OF_FEED_STORY : undefined}]}>
            <View style={styles.friendsContent}>
                <View>
                    {
                        props.friends.length === 1 ?
                            <FriendDot
                                username={props.friends[0].username}
                                avatarUrl={props.friends[0].avatarUrl}
                                status={props.friends[0].status}
                                variant="secondary"
                                onPress={props.onFriendsTapped}/> :
                            <FriendGroup
                                friendCircles={props.friends.map((f) => {
                                    return {
                                        username: f.username,
                                        avatarUrl: f.avatarUrl,
                                        status: f.status,
                                        variant: 'primaryLarge'
                                    }
                                })}
                                variation="friends"/>
                    }
                </View>
                <View style={styles.rightContent}>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>{renderNames(props.friends.map(f => f.username || ''))}</Title>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>Played {props.games.length === 1 ? props.games[0].title : "Roblox"}</Title>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>{props.timeAgo}</Title>

                    <ScrollView contentContainerStyle={{maxWidth: props.maxWidth}} horizontal={true}>
                        {props.games.map((game, index) => (
                            <GameCard
                                key={game.title}
                                containerStyle={{marginTop: 16, marginRight: index === props.games.length -1 ? 0 : 16}}
                                variation={'active'}
                                placement={'game-feed-story'}
                                imageUrl={game.imageUrl}
                                name={game.title}
                                onPress={()=> game.onTapped?.()}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}


export default GamePlayedStory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: theme.colors.dark.bgSurface1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.35)'
    },
    friendsContent:{
        flexDirection: 'row'
    },
    rightContent: {
        marginLeft: 16,
        flex: 1
    },
    text: {
        color: '#FFFFFF',
        marginBottom: 3
    }
})

