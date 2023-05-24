import {Image, StyleSheet, View} from 'react-native'
import useTheme from '../../hooks/useTheme'
import {FriendGroupItem} from './FriendGroup'

type FriendCircleProps = Pick<FriendGroupItem, 'imageUrl' | 'status'> & {
    imageSize: number
    containerSize: number
    gap: number
}

export const FriendCircle: React.FC<FriendCircleProps> = (props) => {
    const theme = useTheme()

    const imageContainerBorderColor = () => {
        return props.status === 'offline'
            ? theme.colors.primarySand40
            : theme.colors.tertiaryOnline
    }

    const styles = () => {
        return StyleSheet.create({
            imageContainer: {
                height: props.containerSize + props.gap + 2,
                width: props.containerSize + props.gap + 2,
                borderRadius: props.containerSize,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.secondaryContainers,
                borderWidth: 2,
                borderColor: imageContainerBorderColor(),
            },
            image: {
                width: props.imageSize,
                height: props.imageSize,
                borderRadius: props.imageSize,
            },
        })
    }

    return (
        <View style={styles().imageContainer}>
            <Image
                source={{uri: props.imageUrl}}
                style={styles().image}
                resizeMode="cover"
            />
        </View>
    )
}

export default FriendCircle