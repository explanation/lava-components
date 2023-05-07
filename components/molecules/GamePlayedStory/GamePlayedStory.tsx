import React from 'react'
import {StyleSheet, Text, View, ViewStyle} from "react-native"
import {TouchableRipple} from "react-native-paper"
import GameCard from '../GameCard/GameCard'
import {FriendAvatar, FriendAvatarType} from '../FriendAvatar/FriendAvatar'

interface GamePlayedStoryProps {
    title: string
    style?: ViewStyle
    gameBookImageUrl: string | undefined
    gameBookTitle: string
    onBookTapped: () => void
    onStroyTapped: () => void
    avatarImage: string | undefined
    avatarUername: string
    avatarStatus: FriendAvatarType
}

export const GamePlayedStory: React.FC<GamePlayedStoryProps> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableRipple onPress={props.onStroyTapped}>
                <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'flex-start'}}>
                    <FriendAvatar
                        avatarImage={props.avatarImage}
                        initials={props.avatarImage ? undefined : props.avatarUername.split(' ').map((s) => s[0]).join('')}
                        type={props.avatarStatus}
                    />
                    <View style={{flex: 1, marginLeft: 10, marginTop: 10}}>
                        <Text style={{color: 'white', fontSize: 13}}>
                            {props.title}
                        </Text>
                    </View>
                </View>
            </TouchableRipple>
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

