import React from 'react'
import {StyleSheet, Text, View, ViewStyle} from "react-native"
import Avatar from "../../atoms/Avatar/Avatar"
import {LavaImage} from "../../atoms/LavaImage/LavaImage"

export enum FriendAvatarType {
     OFFLINE,
     ONLINE,
     PENDING
}

type Props = {
     avatarImage?: string
     size?: number
     initials?: string
     type: FriendAvatarType
     lavaBadge?: boolean
     style?: ViewStyle
     imageStyle?: ViewStyle
     backgroundColor?: string
}

export const FriendAvatarSize = () => {
    return 60
}

export const FriendAvatar = (props: Props) => {
    let source: string | undefined
    if (!props.avatarImage)
        source = require('./assets/img-profile-blank.png') as string
    if (typeof props.avatarImage === 'string')
        source = props.avatarImage
    else
        source = props.avatarImage 

    const FriendAvatarInnerImageSize = () => {
        return (props.size ?? FriendAvatarSize()) * 0.8
    }

    const overlayImage = () => {
        switch (props.type) {
            case FriendAvatarType.OFFLINE: return <LavaImage style={styles(props).overlayImage} source={require('./assets/img-profile-offline.png')} />
            case FriendAvatarType.ONLINE: return  <LavaImage style={styles(props).overlayImage} source={require('./assets/img-profile-online.png')} />
            case FriendAvatarType.PENDING: return  <LavaImage style={styles(props).overlayImage} source={require('./assets/img-profile-pending.png')} />
        }
    }

    return (
        <View style={[styles(props).container, props.style]}>
            <Avatar 
                size={FriendAvatarInnerImageSize()} 
                avatarUrl={source}
            />
            {overlayImage()}
            {props.initials && <View style={styles(props).overlayInitials}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: 'rgba(255,255,255,0.8)'}}>{props.initials}</Text>
            </View>}
            {props.lavaBadge && 
            <Avatar 
                size={31} 
                avatarUrl={require('./assets/img-lava-l.png')}
            />}
        </View>
    )
}

const styles = (props: Props) => StyleSheet.create({
     container: {
          width: props.size ?? FriendAvatarSize(),
          height: props.size ?? FriendAvatarSize(),
          justifyContent: 'center',
          alignItems: 'center'
     },
     overlayImage: {
          flex: 1,
          width: props.size ?? FriendAvatarSize(),
          height: props.size ?? FriendAvatarSize(),
          ...StyleSheet.absoluteFillObject
     },
     overlayInitials: {
        flex: 1,
        width: props.size ?? FriendAvatarSize(),
        height: props.size ?? FriendAvatarSize(),
        justifyContent: 'center',
        ...StyleSheet.absoluteFillObject
    }
})