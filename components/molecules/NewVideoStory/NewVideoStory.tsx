import React from 'react'
import { StyleSheet, View} from "react-native"
import Title from '../../atoms/Title/Title'
import {LavaImage} from '../../atoms/LavaImage/LavaImage'
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../config/theme'
import {TouchableRipple} from "react-native-paper"

const DEFAULT_WIDTH_OF_VIDEO_STORY = 369

export interface NewVideoStoryProps {
    book: { title: string, imageUrl: string }  // thing in top-left
    video: { title: string, imageUrl: string }
    onTapped?: () => void
    title: string
    showVerified?: boolean
    width?: number
}

export const NewVideoStory = (props: NewVideoStoryProps) => {

    return (
        <TouchableRipple style={[styles.container, {width: props.width ?? DEFAULT_WIDTH_OF_VIDEO_STORY}]}
                         onPress={props.onTapped}>
            <View style={styles.bookContent}>
                <View>
                    <View style={styles.overlay}/>
                    <LavaImage source={{uri: props.book.imageUrl}} style={styles.book}/>
                </View>
                <View style={styles.rightContent}>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>{props.book.title}</Title>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>Has a new secret</Title>
                    <Title style={styles.text} variation="title3" numberOfLines={1}>{props.title}</Title>
                    <View style={styles.videoContent}>
                        <View>
                            <LavaImage source={{uri: props.video.imageUrl}} style={styles.video}/>
                            <LavaImage source={require('./video-overlay.png')} contentFit={'fill'} style={StyleSheet.absoluteFillObject} />
                            <View style={styles.playContent}>
                                <LavaImage source={require("./play.png")} style={styles.play}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.titleContent}>
                        <Title style={[styles.text, {
                            color: theme.colors.dark.primarySand20,
                            width: props.showVerified ? '90%' : '100%'
                        }]} variation="subtitle3" numberOfLines={2}>{props.video.title}</Title>
                        {props.showVerified &&
                            <LavaImage source={require("./verified-mark.png")} style={styles.verifiedMarker}/>}
                    </View>
                </View>
            </View>
        </TouchableRipple>
    )
}


export default NewVideoStory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: theme.colors.dark.bgSurface1,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    bookContent:{
        flexDirection: 'row'
    },
    book: {
        width: 54,
        height: 54,
        borderRadius: 2,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    rightContent: {
        marginLeft: 16,
        flex: 1
    },
    text: {
        color: "#FFFFFF",
        marginBottom: 3
    },
    video: {
        width: 176,
        height: 100,
        borderRadius: 4,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    videoContent: {
        marginTop: 20,
        marginBottom: 8,
        width: 176,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15, 16, 23, 1)',
        opacity: 0.2,
        borderRadius: 2,
        zIndex: 14
    },
    play: {
        width: 36,
        height: 36
    },
    verifiedMarker: {
        width: 24,
        height: 24,
        marginTop: -4,
        marginRight: -4
    },
    playContent: {
        ...StyleSheet.absoluteFillObject,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradient: {
        top:0,
        right:0,
        height: 103,
        width: 100,
        position: 'absolute',
        zIndex: 14,
        borderRadius: theme.roundness.md,
        transform: [{rotate:'90deg'}],
        opacity: 0.9
    },
    titleContent: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: 176,
    }
})
