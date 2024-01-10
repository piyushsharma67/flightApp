import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Feather'

interface INotificationIconProps {
    value: string,
    onPress: () => void
}
function NotificationIcon(props: INotificationIconProps) {

    return (
        <TouchableOpacity style={style.main} onPress={props.onPress}>
            <Icon name="bell" size={18} color="red" />
            <View style={style.badgeContainer}>
                {!props.value ? 0 : <Badge>{props.value}</Badge>}
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    main: {
        width: 30,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeContainer: {
        position: 'absolute',
        top: -5,
        right: -5,

    }
})

export default React.memo(NotificationIcon)