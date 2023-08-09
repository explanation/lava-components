//

import {Pressable, StyleSheet, View} from "react-native"
import {FriendDot, FriendDotProps} from "./FriendDot"
import FriendGroup from "./FriendGroup"
import Title from "../../atoms/Title/Title"
import {LavaImage} from "../../atoms/LavaImage/LavaImage"
import {LinearGradient} from "expo-linear-gradient"
import {TouchableRipple} from "react-native-paper"
import Avatar from "../../atoms/Avatar/Avatar"

export type FriendListActionRowProps =  {
    title: string
    icon: 'add-friend'|'new-group'
    onPress?: () => void
}

export const FriendListActionRow = (props: FriendListActionRowProps) => {

    const ActionIcon = () => {
        switch (props.icon) {
            case 'add-friend':
                return <LavaImage source={require('./assets/icn-add-friend.png')}/>
            case 'new-group':
                return <LavaImage source={require('./assets/icn-new-group.png')}/>
        }

    }

    return(
        <TouchableRipple style={styles.container} onPress={props.onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                <Avatar icon={ActionIcon()} variant={'secondary'} />
                <View style={styles.textContent}>
                    <Title style={styles.text} variation="subtitle2" numberOfLines={1}>{props.title}</Title>
                </View>
            </View>
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
    text: {
        color: '#FFFFFF99'
    },
    textContent: {
        marginLeft: 12,
        paddingRight: 20,
        flex: 1,
        marginTop: 5
    }
})