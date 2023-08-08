import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from "react-native"
import useTheme from "../../hooks/useTheme"
import {LavaImage} from "../LavaImage/LavaImage"
import Text from "../Text/Text"

export type AvatarVariantType = "primaryLarge" | "primarySmall" | "secondary"

export type AvatarProps = {
    avatarUrl?: string
    username?: string
    icon?: any
    style?: StyleProp<ViewStyle>,
    variant: AvatarVariantType
    onPress?: () => void
}

export const avatarVariants = (theme: any) => ({
    primaryLarge: {
        backgroundColor: theme.colors.bgSurface2,
        height: 54,
        width: 54,
        borderRadius: 54/2,
    },
    primarySmall: {
        backgroundColor: theme.colors.bgSurface2,
        height: 36,
        width: 36,
        borderRadius: 36/2,
    },
    secondary: {
        backgroundColor: theme.colors.bgSurface1,
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
})

const Avatar = (props: AvatarProps) => {
    const theme = useTheme()
    const avatarVariantTexts = {
        primaryLarge: {
            fontSize: 22,
            lineHeight: 28.6,
        },
        primarySmall: {
            fontSize: 14,
            lineHeight: 18.2,
        },
        secondary: {
            fontSize: 18,
            lineHeight: 23.4,
        },
    }


    const initials = () => {
        if (!props.username) return ''
        let parts = props.username.trim().split(' ').slice(0, 2)
        if (parts.length < 2) {
            parts = props.username.trim().split('_').slice(0, 2)
        }

        return parts.map((p) => p[0].toUpperCase()).join('')
    }

    return (
        <Pressable onPress={props.onPress}>
            <View style={[styles.container, {...avatarVariants(theme)[props.variant]}, props.style]}>
            {props.avatarUrl &&
                <LavaImage
                    style={{flex: 1}}
                    source={{uri: props.avatarUrl}}
                    contentFit={'contain'} />}

                {props.username && !props.avatarUrl &&
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={[avatarVariantTexts[props.variant], styles.text]}>
                        {initials()}
                    </Text>
                </View>}

                {props.icon && <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    {props.icon}
                </View>}
            </View>
        </Pressable>
    )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.25,
        borderColor:'rgba(255, 255, 255, 0.10)',
        overflow:'hidden',
    },
    text: {
        fontWeight: '400',
        letterSpacing: 0.8,
        marginTop: 4
    }
  })
