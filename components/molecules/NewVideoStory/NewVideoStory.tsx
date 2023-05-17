import React from 'react'
import { StyleSheet, View} from "react-native"
import Title from '../../atoms/Title/Title'
import {LavaImage} from '../../atoms/LavaImage/LavaImage'
import { LinearGradient } from 'expo-linear-gradient';

const DEFAULT_WIDTH_OF_VIDEO_STORY = 296

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
        <View style={[styles.container, {width: props.width ?? DEFAULT_WIDTH_OF_VIDEO_STORY}]}>
            <View style={styles.bookContent}>
                <View>
                    <LavaImage source={{uri: props.book.imageUrl}} style={styles.book}/>
                    <View style={styles.overlay} />
                </View>
                <View style={styles.rightContent}>
                    <Title style={styles.text} variation="title2" numberOfLines={1}>{props.book.title}</Title>
                    <View style={styles.titleContent}>
                        <Title style={[styles.text]} variation="title2">{props.title}</Title>
                        {props.showVerified && <LavaImage source={require("./verified-mark.png")} style={styles.verifiedMarker}/>}
                    </View>
                    <View style={styles.videoContent}>
                        <View>
                            <LinearGradient 
                                colors={['#0F1017', 'rgba(0, 0, 0, 0)']}
                                start={{ x: 0.1, y: 0.85 }}
                                locations={[0.0277, 0.5961]}
                                style={styles.gradient}
                            />
                            <LavaImage source={{uri: props.video.imageUrl}} style={styles.video}/>
                            <View style={styles.playContent}>
                                <LavaImage source={require("./play.png")} style={styles.play}/>
                            </View>
                        </View>
                    </View>
                    <Title style={[styles.text, {color:'rgba(166, 166, 166, 1)'}]} variation="title2">{props.video.title}</Title>
                </View>
            </View>
        </View>
    )
}


export default NewVideoStory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#0F1017',
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
        borderRadius: 2
    },
    rightContent: {
        marginLeft: 16,
        flex: 1
    },
    text: {
        marginBottom: 3
    },
    video: {
        width: 176,
        height: 100,
        borderRadius: 4,
    },
    videoContent: {
        marginTop: 20,
        marginBottom: 8
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(15, 16, 23, 1)',
        opacity: 0.2,
        borderRadius: 2,
    },
    play: {
        width: 36,
        height: 36
    },
    titleContent: {
        flexDirection:'row', 
        alignItems:'flex-end'
    },
    verifiedMarker: {
        width: 32,
        height: 32,
        marginLeft:8
    },
    playContent: {
        ...StyleSheet.absoluteFillObject,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradient: {
        position: 'absolute',
        right: 0,
        opacity: 0.1,
        width: 100,
        height: 170,
        zIndex: 14,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
    },
})
