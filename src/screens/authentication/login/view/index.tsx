import React from 'react'
import { StyleSheet, View } from 'react-native'
import RequestOtp from './RequestOtp'
import AppImage from './AppImage'
import ValidateOtp from './validateOtp'
import Loader from '../../../../components/loader/Loader'

interface ILoginScreentIndexProps {
    loading: boolean
    currentScreen: number
    onPressSubmitOtp: () => void
    onPressValidateOtp: () => void
    onGoBack: () => void
}

function LoginScreentIndex(props: ILoginScreentIndexProps) {

    return (
        <View style={style.main}>
            <Loader loading={props.loading} />
            <AppImage />
            {props.currentScreen == 1 && <RequestOtp
                onPressSubmitOtp={props.onPressSubmitOtp}
            />}
            {props.currentScreen == 2 && <ValidateOtp
                onGoBack={props.onGoBack}
                onPressValidateOtp={props.onPressValidateOtp}
            />}
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
    },
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
    input: {
        width: '100%'
    }
})

export default LoginScreentIndex