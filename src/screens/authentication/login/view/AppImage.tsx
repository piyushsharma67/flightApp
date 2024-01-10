import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'

function AppImage() {
    return (
        <View style={style.container}>
            <Image
                style={style.imageStyle}
                source={require('../../../../../assets/appImage.jpg')}
            />
            <Text style={style.text}>Jet Set GO!!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        position: 'absolute',
        bottom: 0,
        color: 'white',
        fontSize: 30
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
})


export default React.memo(AppImage)