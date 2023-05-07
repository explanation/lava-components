import React from 'react'
import {StyleSheet, Text, View, ViewStyle} from "react-native"
import Avatar from "../../atoms/Avatar/Avatar"
import useTheme from '../../hooks/useTheme'

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
    const theme = useTheme()
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

    const borderColor = () => {
        switch (props.type) {
            case FriendAvatarType.OFFLINE: return theme.colors.primarySand40
            case FriendAvatarType.ONLINE: return  theme.colors.tertiaryOnline
            case FriendAvatarType.PENDING: return  'transparent'
        }
      }

    return (
        <View style={[styles(props).container, props.style]}>
            <Avatar 
                size={FriendAvatarInnerImageSize()} 
                avatarUrl={source}
                style={{
                    borderWidth:3,
                    borderColor: borderColor()
                }}
            />
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