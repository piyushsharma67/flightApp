import React from 'react'
import LoginScreentIndex from './view'
import useLoginHook from './hooks/useLoginHook'

function LoginScreen() {
    const {
        loading,
        currentScreen,
        onPressSubmitOtp,
        onPressValidateOtp,
        onGoBack
    } = useLoginHook()
    return (
        <LoginScreentIndex
            loading={loading}
            currentScreen={currentScreen}
            onPressSubmitOtp={onPressSubmitOtp}
            onPressValidateOtp={onPressValidateOtp}
            onGoBack={onGoBack}
        />
    )
}

export default LoginScreen