// 

import {View, StyleSheet, Pressable, ViewStyle} from "react-native"
import {FriendDotProps} from "./FriendDot"
import FriendGroup from "./FriendGroup"
import Title from "../../atoms/Title/Title"
import {LavaImage} from "../../atoms/LavaImage/LavaImage"

export type FriendOfflineRowProps =  {
    friendCircles: FriendDotProps[]
    title: string
    onPress?: () => void
    style?: ViewStyle 
}


export const FriendOfflineRow = (props: FriendOfflineRowProps) => {
    return(
        <Pressable onPress={props.onPress}>
            <View style={[styles.container, props.style]}>
                <FriendGroup friendCircles={props.friendCircles} variation="offline"/>
                <Title variation="subtitle1" style={styles.text} numberOfLines={1}>{props.title}</Title>
                <LavaImage source={require("./assets/chevron.png")} style={{width: 10, height: 6, marginTop: -2}}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    text: {
        marginHorizontal: 6
    }
})