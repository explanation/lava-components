import React from 'react'
import {Pressable, ScrollView, StyleSheet, View} from "react-native"
import GameCard from '../GameCard/GameCard'
import FriendGroup, {FriendCircle, FriendGroupItem} from '../Friend/FriendGroup'
import Title from '../../atoms/Title/Title'

export interface GamePlayedStoryProps {
    friends: FriendGroupItem[]
    games: {imageUrl: string; name:string, onThumbnailTapped?: ()=> void}[]
    timeString: string 
    maxWidth?: number
}

const renderNames = (names: string[]) => 
names.length === 2 ? names.join(" & ") : 
names.length === 3 ? names.slice(0,2).join(", ") + " & " + names[2]:
names.length > 3 ? names.slice(0,2).join(", ") + " & " + names[2] + " +" + (names.length -3) : names

export const GamePlayedStory = (props: GamePlayedStoryProps) => {
    const {
        friends,
        games,
        maxWidth,
        timeString
    } = props
    return (
        <View style={[styles.container]}>
            <Pressable>
                <View style={styles.friendsContent}>
                    <View>
                        {
                            friends.length === 1  ?
                                <FriendCircle 
                                    imageUrl={friends[0].imageUrl} 
                                    networkStatus={friends[0].networkStatus} 
                                    containerSize={54} 
                                    imageSize={54} 
                                    gap={0}
                                /> :
                                <FriendGroup
                                    friends={friends}
                                    showNames={false}
                                />
                        }
                    </View>
                    <View style={styles.rightContent}>
                        <Title variation="title4" numberOfLines={1}>{renderNames(friends.map(f => f.firstName))}</Title>
                        <Title variation="title4" numberOfLines={1}>Played {games.length === 1 ? games[0].name : "Roblox"}</Title>
                        <Title variation="title4" numberOfLines={1}>{timeString}</Title>

                        <ScrollView contentContainerStyle={{maxWidth}} horizontal={true}>
                            {games.map((game) => (
                                <GameCard
                                    key={game.name}
                                    containerStyle={{marginTop: 16, marginRight:16}}
                                    variation={'mini'}
                                    imageUrl={game.imageUrl}
                                    name={game.name}
                                    onPress={()=> game.onThumbnailTapped?.()}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Pressable>
            
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
    },
    friendsContent:{
        flexDirection: 'row'
    },
    rightContent: {
        marginLeft: 16
    },
    gameCardContent:{
        // flexDirection:'row'
    }
})

