import React from 'react'
import {Pressable, ScrollView, StyleSheet, View} from "react-native"
import GameCard from '../GameCard/GameCard'
import FriendGroup, {FriendCircle, FriendGroupItem} from '../Friend/FriendGroup'
import Title from '../../atoms/Title/Title'

const MAXIMUM_WIDTH_OF_FEED_STORY = 296

export interface GamePlayedStoryProps {
    friends: { firstName: string, imageUrl?: string, status: 'online' | 'offline' }[]
    onFriendsTapped?: ()=>void
    games: { title: string, imageUrl: string; onTapped?: ()=> void}[]
    timeAgo: string
    maxWidth?: number
}

const renderNames = (names: string[]) => 
    names.length < 4 ? names.join(", ") :
    names.length > 3 ? names.slice(0,3).join(", ") + " +" + (names.length -3) : names

export const GamePlayedStory = (props: GamePlayedStoryProps) => {
    return (
        <View style={[styles.container, {maxWidth: props.games.length === 1 ? MAXIMUM_WIDTH_OF_FEED_STORY : undefined}]}>
            <View style={styles.friendsContent}>
                <View>
                    {
                        props.friends.length === 1  ?
                            <Pressable onPress={props.onFriendsTapped}>
                                <FriendCircle 
                                    imageUrl={props.friends[0].imageUrl} 
                                    status={props.friends[0].status} 
                                    containerSize={54} 
                                    imageSize={54} 
                                    gap={0}
                                />
                            </Pressable> :
                            <View style={{marginTop: -10}}>
                                <FriendGroup
                                    friends={props.friends}
                                    showNames={false}
                                    onPress={props.onFriendsTapped}
                                />
                            </View>
                    }
                </View>
                <View style={styles.rightContent}>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>{renderNames(props.friends.map(f => f.firstName))}</Title>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>Played {props.games.length === 1 ? props.games[0].title : "Roblox"}</Title>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>{props.timeAgo}</Title>

                    <ScrollView contentContainerStyle={{maxWidth: props.maxWidth}} horizontal={true}>
                        {props.games.map((game, index) => (
                            <GameCard
                                key={game.title}
                                containerStyle={{marginTop: 28, marginRight: index === props.games.length -1 ? 0 : 16}}
                                variation={'mini'}
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
        backgroundColor: '#0F1017',
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
        marginBottom: 3
    }
})

