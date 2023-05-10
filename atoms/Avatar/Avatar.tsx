import {View, ViewStyle} from "react-native"
import useTheme from "../../hooks/useTheme"
import {LavaImage} from "../LavaImage/LavaImage"
import Text from "../Text/Text"

type Props = {
    avatarUrl?: string
    username?: string
    size: number,
    style?: ViewStyle
}

const Avatar = (props: Props) => {
    const theme = useTheme()

    const initials = () => {
        if (!props.username) return ''
        let parts = props.username.trim().split(' ').slice(0, 2)
        if (parts.length < 2) {
            parts = props.username.trim().split('_').slice(0, 2)
        }

        return parts.map((p) => p[0].toUpperCase()).join('')
    }

    const initialsFontSize = () => {
        return props.size * 0.35
    }

    return (
        <View style={{
            backgroundColor: theme.colors.secondaryContainers,
            width: props.size,
            height: props.size,
            borderRadius: props.size / 2,
            overflow: 'hidden',
            ...props.style
        }}>
            {props.avatarUrl &&
            <LavaImage
                style={{flex: 1}}
                source={{uri: props.avatarUrl}}
                resizeMode={'contain'} />}

            {props.username && !props.avatarUrl &&
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    style={{fontSize: initialsFontSize(), fontFamily: theme.fontFamily.Bold}}>
                    {initials()}
                </Text>
            </View>}
        </View>
    )
}

export default Avatar
