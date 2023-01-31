import {Image, ImageProps} from "react-native"

type Props = {} & ImageProps

export const LavaImage = (props: Props) => {
    let source = props.source as any
    if (source.uri) {
        source.cache = 'force-cache'
    }

    return (
        <Image
            {...props}
        />
    )
}