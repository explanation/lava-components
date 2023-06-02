import {View, StyleSheet, ViewStyle} from "react-native"
import Avatar, {AvatarProps} from "../../atoms/Avatar/Avatar"
import theme from "../../config/theme"

export type FriendDotProps = AvatarProps & {
    status: 'online' | 'offline',
    dotStyle?: ViewStyle
}

export const FriendDot = (props: FriendDotProps) => {
    const variants = {
        primaryLarge: {
            width: 16,
            height: 16,
            borderRadius: 16/2,
            bottom: 2
        },
        secondary: {
            width: 14,
            height: 14,
            borderRadius: 14/2,
            bottom: 2
        },
        primarySmall: {
            width: 12,
            height: 12,
            borderRadius: 12/2,
            bottom: 2
        },
    }
    return(
        <View style={props.status === 'online' && {alignSelf: 'flex-start', position: 'relative'}}>
            <Avatar 
                {...props}
            />
            {props.status === 'online' && <View style={[variants[props.variant], styles.dot, props.dotStyle]}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: theme.colors.dark.tertiaryOnline,
        right: -2,
        position: 'absolute',
        borderWidth: 2,
        borderColor: theme.colors.dark.bgSurface1
    }
})