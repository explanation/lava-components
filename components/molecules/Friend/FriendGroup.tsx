import {useCallback} from 'react'
import {Image, Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import Text from '../../atoms/Text/Text'
import useTheme from '../../hooks/useTheme'
import {FriendNetworkStatus} from './Friend'
import {getTimeAgo} from '../../utils/numbers'
import {intervalMapping} from '../../config/date'
import {FriendDot, FriendDotProps} from './FriendDot'
import {avatarVariants} from '../../atoms/Avatar/Avatar'


export interface FriendGroupProps {
    variation: 'feed' | 'friends' | 'offline' | 'inbox'
    friendCircles: FriendDotProps[]
    onPress?: () => void
}

const FriendGroup: React.FC<FriendGroupProps> = ({friendCircles = [], ...props}) => {
    const theme = useTheme()
    const variants = avatarVariants(theme)

    const styles = () => {
        return StyleSheet.create({
            container: {
                flexDirection:'row',
                marginBottom: 35
            },
            feedFriend: {
                position: 'relative',
                width:36,
                height: 36,
                backgroundColor: '#0F1017',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18
            },
            friend: {
                position: 'relative',
                width:36,
                height: 36,
                backgroundColor: '#1B1F23',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18
            },
            offlineFriend: {
                position: 'relative',
                width:42,
                height: 42,
                backgroundColor: '#1B1F23',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 21,
               left: -9,
            },
            inbox: {
                position: 'relative',
                width:36,
                height: 36,
                backgroundColor: '#0F1017',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18
            },
        })
    }

    const remainingFriends = friendCircles.slice(2)

    return (
        <Pressable onPress={props.onPress}>
            {
                props.variation === 'feed' && <View style={[styles().container, {marginLeft: variants["primarySmall"]?.width/2.5}]}>
                    {friendCircles.slice(0,2).map((friend, index) => 
                    <View style={index === 1 && {
                        position:'absolute',
                        bottom: -variants["primarySmall"].width/1.5,
                        left: -variants["primarySmall"].width/2.5
                    }}>
                            {index === 0 && <FriendDot {...friend} variant='primarySmall'/>}
                            {index === 1 && <View style={styles().feedFriend}>
                                <View>
                                    <FriendDot 
                                        {...friend} 
                                        variant='primarySmall' 
                                        style={{width:30, height:30}}
                                        dotStyle={{
                                            bottom: -1
                                        }}
                                    />
                                </View>
                            </View>}

                    </View>
                    )}
                    {remainingFriends.length > 0 && <Title variation='subtitle1' style={{marginLeft:6}}>+{remainingFriends.length}</Title>}
                </View>
            }
            
            {
                props.variation === 'friends' && <View style={[styles().container, {marginLeft: variants["primarySmall"]?.width/2.5}]}>
                    {friendCircles.slice(0,2).map((friend, index) => 
                    <View style={index === 1 && {
                        position:'absolute',
                        bottom: -variants["primarySmall"].width/1.5,
                        left: -variants["primarySmall"].width/2.5
                    }}>
                            {index === 0 && <FriendDot {...friend} variant='primarySmall'  style={{backgroundColor: theme.colors.bgSurface1}}/>}
                            {index === 1 && <View style={styles().friend}>
                                <View>
                                    <FriendDot 
                                        {...friend} 
                                        variant='primarySmall' 
                                        style={{width:30, height:30, backgroundColor: theme.colors.bgSurface1}}
                                        dotStyle={{
                                            bottom: -1
                                        }}
                                    />
                                </View>
                            </View>}

                    </View>
                    )}
                    {remainingFriends.length > 0 && <Title variation='subtitle1' style={{marginLeft:6}}>+{remainingFriends.length}</Title>}
                </View>
            }

            {
                props.variation === 'offline' && <View style={[styles().container, {flexDirection:'row', alignItems:'center', marginBottom: 6}]}>
                    {friendCircles.slice(0,2).map((friend, index) => <>
                        {index === 0 && <FriendDot {...friend}  status='offline' variant='primarySmall' style={{backgroundColor: theme.colors.bgSurface1}}/>}
                        {index === 1 && <View  style={styles().offlineFriend}>
                            <FriendDot 
                                {...friend} 
                                variant='primarySmall'
                                status='offline'
                                style={{backgroundColor: theme.colors.bgSurface1}}
                            />
                        </View>}
                    </>
                    )}
                    {remainingFriends.length > 0 && <Title variation='subtitle1' style={{marginLeft:-8}}>+{remainingFriends.length}</Title>}
                </View>
            }

            {
                props.variation === 'inbox' && <View style={[styles().container, {marginLeft: variants["primarySmall"]?.width/2.5}]}>
                    {friendCircles.slice(0,2).map((friend, index) => 
                    <View style={index === 1 && {
                        position:'absolute',
                        bottom: -variants["primarySmall"].width/1.5,
                        left: -variants["primarySmall"].width/2.5
                    }}>
                            {index === 0 && <FriendDot {...friend} variant='primarySmall' style={{backgroundColor: theme.colors.bgSurface1}}/>}
                            {index === 1 && <View style={styles().inbox}>
                                <View>
                                    <FriendDot 
                                        {...friend} 
                                        variant='primarySmall' 
                                        style={{width:30, height:30, backgroundColor: theme.colors.bgSurface1}}
                                        dotStyle={{
                                            bottom: -1
                                        }}
                                    />
                                </View>
                            </View>}

                    </View>
                    )}
                    {remainingFriends.length > 0 && <Title variation='subtitle1' style={{marginLeft:6}}>+{remainingFriends.length}</Title>}
                </View>
            }
        </Pressable>
    )
}

export default FriendGroup