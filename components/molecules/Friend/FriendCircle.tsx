import {Image, StyleSheet, View} from 'react-native'
import useTheme from '../../hooks/useTheme'
import {FriendGroupItem} from './FriendGroup'

export type FriendCircleProps = Pick<FriendGroupItem, 'imageUrl' | 'networkStatus'> & {
    imageSize: number
    containerSize: number
    gap: number
}

export const FriendCircle: React.FC<FriendCircleProps> = (props) => {
    const {imageUrl, networkStatus, imageSize, containerSize, gap} = props

    const theme = useTheme()

    const imageContainerBorderColor = () => {
        return networkStatus === 'offline'
            ? theme.colors.primarySand40
            : theme.colors.tertiaryOnline
    }

    const styles = () => {
        return StyleSheet.create({
            imageContainer: {
                height: containerSize + gap + 2,
                width: containerSize + gap + 2,
                borderRadius: containerSize,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.secondaryContainers,
                borderWidth: 2,
                borderColor: imageContainerBorderColor(),
            },
            image: {
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize,
            },
        })
    }

    return (
        <View style={styles().imageContainer}>
            <Image
                source={{uri: imageUrl}}
                style={styles().image}
                resizeMode="cover"
            />
        </View>
    )
}

export default FriendCircle