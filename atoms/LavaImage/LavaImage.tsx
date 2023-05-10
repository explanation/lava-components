import {Image, ImageProps} from "expo-image"
import {Image as RNImage, ImageProps as RNImageProps} from "react-native"

type Props = {} & ImageProps

export const LavaImage = (props: Props) => {

    const isLocalImage = (): boolean => {
        return typeof props.source === "number"
    }

    if (isLocalImage()) {
        return (
            <RNImage
                {...props as any} />
        )
    } else {
        return (
            <Image
                cachePolicy={props.cachePolicy ?? 'disk'}
                {...props} />
        )
    }
}