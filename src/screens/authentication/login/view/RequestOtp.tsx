import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

interface IRequestOtpProps {
    onPressSubmitOtp: () => void
    onPressMobile: (val: string) => void
}

function RequestOtp(props: IRequestOtpProps) {
    return (
        <View style={style.container}>
            <TextInput
                mode='outlined'
                label={"Enter Mobile Number"}
                numberOfLines={1}
                style={style.input}
                keyboardType='numeric'
                maxLength={10}
                onChangeText={props.onPressMobile}
            />
            <Button
                mode='contained'
                style={style.buttonStyle}
                disabled={false}
                rippleColor={'white'}
                onPress={props.onPressSubmitOtp}
            >
                Send OTP
            </Button>
            <View style={style.disclaimer}>
                <Text>By Joining you agree to our Terms and condition.</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16
    },
    input: {
        width: '100%'
    },
    buttonStyle: {
        borderRadius: 2,
        width: '100%',
        marginTop: 30

    },
    disclaimer: {
        position: 'absolute',
        bottom: 10
    }
})


export default React.memo(RequestOtp)