import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

interface IValidateOtpProps {
    onGoBack: () => void
    onPressValidateOtp: () => void
}
function ValidateOtp(props: IValidateOtpProps) {
    return (
        <View style={style.container}>
            <View style={style.inputContainer}>
                <TextInput
                    mode='outlined'
                    label={"Enter Otp"}
                    numberOfLines={1}
                    style={style.input}
                    keyboardType='numeric'
                    maxLength={4}
                />
                <Button
                    mode='text'
                    disabled={false}
                    rippleColor={'white'}
                    onPress={props.onGoBack}
                >
                    Go Back
                </Button>
            </View>
            <Button
                mode='contained'
                style={style.buttonStyle}
                disabled={false}
                rippleColor={'white'}
                onPress={props.onPressValidateOtp}
            >
                Validate OTP
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
    inputContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        width: '60%'
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


export default React.memo(ValidateOtp)