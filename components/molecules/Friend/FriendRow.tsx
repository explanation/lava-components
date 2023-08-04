//

import {Pressable, StyleSheet, View} from "react-native"
import {FriendDot, FriendDotProps} from "./FriendDot"
import FriendGroup from "./FriendGroup"
import Title from "../../atoms/Title/Title"
import {LavaImage} from "../../atoms/LavaImage/LavaImage"
import {LinearGradient} from "expo-linear-gradient"
import {TouchableRipple} from "react-native-paper"

export type FriendRowProps =  {
    friendCircles: FriendDotProps[]
    inRoblox?: boolean
    activity?: string
    lastSeen?: string
    gameImageUrl?: string
    videoImageUrl?: string
    onPress?: () => void
    onActivityPress?: () => void  
    onProfileLongPress?: () => void 
    style?:  undefined
}

const renderNames = (names: string[]) => 
    names.length < 4 ? names.join(", ") :
    names.length > 3 ? names.slice(0,3).join(", ") + " +" + (names.length -3) : names

export const FriendRow = (props: FriendRowProps) => {
    return(
        <TouchableRipple style={styles.container} onPress={props.onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                {
                    props.friendCircles.length === 1 ? <FriendDot {...props.friendCircles[0]} variant="secondary"/> :
                        <FriendGroup friendCircles={props.friendCircles} variation="friends"/>
                }
                <View style={styles.textContent}>
                    <Title variation="subtitle1" numberOfLines={2}>{renderNames(props.friendCircles.map(f => f.username || ""))}</Title>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        { (props.friendCircles.findIndex(f => f.status === 'online') > -1 || props.activity) &&
                            <Title variation="subtitle1">{props.friendCircles.findIndex(f => f.status === 'online') > -1 && 'Online'}{props.activity && ","} {props.activity}</Title>
                        }
                        {props.inRoblox && <LavaImage source={require("./assets/roblox.png")} style={{width:16, height:16, marginLeft: 6}}/>}
                    </View>
                    {<Title variation="subtitle1" numberOfLines={2}>{props.lastSeen}</Title>}                
                </View>
            </View>
            {props.gameImageUrl && <Pressable onPress={props.onActivityPress}>
                <LinearGradient
                    colors={['#0F1017', 'rgba(0, 0, 0, 0)']}
                    start={{ x: 0.1, y: 0.87 }}
                    locations={[0.0277, 0.5961]}
                    style={styles.gradient}
                />
                <LavaImage source={props.gameImageUrl} style={styles.game}/>
            </Pressable>}
            {props.videoImageUrl && <Pressable onPress={props.onActivityPress}>
                <LavaImage source={props.videoImageUrl} style={styles.video}/>
                <View style={styles.playContent}>
                    <LavaImage source={require("./assets/video-play.png")} style={{height:24, width:24}}/>
                </View>
            </Pressable>}
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 286
    },
    textContent: {
        marginLeft: 12,
        paddingRight: 20,
        flex: 1,
        marginTop: 5
    },
    playContent: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradient: {
        top:1,
        left:1,
        height: 50,
        width: 50,
        position: 'absolute',
        zIndex: 14,
        borderRadius: 2,
        transform: [{rotate:'90deg'}],
        opacity: 0.9
    },
    game: {
        height:50, 
        width:50, 
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: 'rgba(234, 234, 223, 0.2)',
        opacity: 0.9,
        borderStyle: 'solid',
    },
    video: {
        height:42, 
        width:56,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: 'rgba(234, 234, 223, 0.4)',
        opacity: 0.9,
        borderStyle: 'solid',
    }
})